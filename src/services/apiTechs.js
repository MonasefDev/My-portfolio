import supabase, { supabaseUrl } from "./supabase";

export async function getTechs() {
  const { data, error } = await supabase.from("technologies").select("*");
  if (error) {
    console.error(error);
    throw new Error("technologies could not be loaded");
  }

  return data;
}

export async function createEditTech(newTech, id) {
  const hasImagePath = newTech.tech_icon?.startsWith?.(supabaseUrl);

  const imageName = `${Math.floor(Math.random() * 10 ** 8)}-${
    newTech.tech_icon.name
  }`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newTech.tech_icon
    : `${supabaseUrl}/storage/v1/object/public/techs_images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("technologies");

  // A) CREATE
  if (!id) query = query.insert([{ ...newTech, tech_icon: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newTech, tech_icon: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("technology could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("techs_images")
    .upload(imageName, newTech.tech_icon);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("technologies").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "technology image could not be uploaded and the technology was not created"
    );
  }

  return data;
}

export async function deleteTech(id) {
  const { data, error } = await supabase
    .from("technologies")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("technology could not be deleted");
  }
  return data;
}
