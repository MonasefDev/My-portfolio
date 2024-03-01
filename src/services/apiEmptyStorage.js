import supabase from "./supabase";

export async function removeStorage() {
  const { data, error } = await supabase.storage
    .from("projects_images")
    .list("");
  // const { data, error } = await supabase.storage.emptyBucket("projects_images");
  if (data?.length > 0) {
    for (const image of data) {
      const { data: deleteData, error: deleteError } = await supabase.storage
        .from("projects_images")
        .remove(image.name);

      if (deleteError) {
        console.error(deleteError.message);
      } else {
        console.log(`Image ${image.id} deleted successfully`);
      }
    }
  } else {
    console.log("No images found");
  }
  if (error) {
    console.error(error);
    throw new Error("storage could not be removed");
  }
}
