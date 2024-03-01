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
  const imagesArr = newProject
    ? [newProject.poster_img, ...newProject.images]
    : [];
  let storageError = false;

  // create url for images and upload then

  const uploadImage = async (imageName, image) => {
    const { error } = await supabase.storage
      .from("projects_images")
      .upload(imageName, image);

    if (error) {
      storageError = true;
      console.error(error);
      throw new Error("image could not be uploaded");
    }
  };

  const imagesPath = imagesArr.map((image) => {
    if (image.startsWith?.(supabaseUrl)) {
      return image;
    } else {
      const imageName = `${Math.floor(Math.random() * 10 ** 8)}-${
        image.name
      }`.replaceAll("/", "");
      uploadImage(imageName, image);
      return `${supabaseUrl}/storage/v1/object/public/projects_images/${imageName}`;
    }
  });

  // 1. Create/edit cabin
  if (storageError) {
    throw new Error("project could not be created");
  } else {
    let query = supabase.from("projects");
    const [poster_img, ...images] = imagesPath;
    // A) CREATE
    if (!id)
      query = query.insert([
        { ...newProject, images: images, poster_img: poster_img },
      ]);

    // B) EDIT
    if (id)
      query = query
        .update({
          ...newProject,
          images: images,
          poster_img: poster_img,
        })
        .eq("id", id);

    const { data, error } = await query.select().single();

    if (error) {
      console.error(error);
      throw new Error("project could not be created");
    }
  }
  /////////////////////////////////////
  /////////////////////////////////////
}

export async function deleteProject(id) {
  const { data, error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("project could not be deleted");
  }
  return data;
}
