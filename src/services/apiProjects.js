import supabase, { supabaseUrl } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(error);
    throw new Error("projects could not be loaded");
  }

  return data;
}

export async function createEditProject(newProject, id) {
  const imagesArr = newProject.images || [];
  const hasImagePath = imagesArr[0]?.startsWith?.(supabaseUrl);

  const imageNameArr = imagesArr.map((image) =>
    `${Math.floor(Math.random() * 10 ** 8)}-${image.name}`.replaceAll("/", "")
  );

  const imagesPath = hasImagePath
    ? imagesArr
    : imageNameArr.map(
        (imageName) =>
          `${supabaseUrl}/storage/v1/object/public/projects_images/${imageName}`
      );

  const posterImage = newProject.poster_img || {};
  const hasPosterImagePath = posterImage?.startsWith?.(supabaseUrl);

  const posterImageName = `${Math.floor(Math.random() * 10 ** 8)}-${
    posterImage.name
  }`.replaceAll("/", "");
  const posterImagePath = hasPosterImagePath
    ? posterImage
    : `${supabaseUrl}/storage/v1/object/public/projects_images/${posterImageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("projects");

  // A) CREATE
  if (!id)
    query = query.insert([
      { ...newProject, images: imagesPath, poster_img: posterImagePath },
    ]);

  // B) EDIT
  if (id)
    query = query
      .update({
        ...newProject,
        images: imagesPath,
        poster_img: posterImagePath,
      })
      .eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("technology could not be created");
  }

  // 2. Upload images
  if (!hasImagePath || !hasPosterImagePath) {
    let storageErrors;
    for (const imageName of imageNameArr) {
      const imagePath = `${supabaseUrl}/storage/v1/object/public/projects_images/${imageName}`;

      const { error: storageError } = await supabase.storage
        .from("projects_images")
        .upload(imageName, imagePath);

      if (storageError) {
        storageErrors = storageError;
        console.error(storageError);
        throw new Error("One or more images could not be uploaded");
      }
    }

    if (!hasPosterImagePath) {
      const { error: posterStorageError } = await supabase.storage
        .from("projects_images")
        .upload(posterImageName, posterImage);

      if (posterStorageError) {
        storageErrors = posterStorageError;
        console.error(posterStorageError);
        throw new Error("Poster image could not be uploaded");
      }
    }

    // 3. Delete the cabin IF there was an error uplaoding image
    if (storageErrors) {
      await supabase.from("projects").delete().eq("id", data.id);
      console.error(storageErrors);
      throw new Error(
        "project images could not be uploaded and the project was not created"
      );
    }
  }
  return data;
}
