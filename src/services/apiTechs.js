import supabase from "./supabase";

export async function getTechs() {
  const { data, error } = await supabase.from("technologies").select("*");
  if (error) {
    console.error(error);
    throw new Error("technologies could not be loaded");
  }

  return data;
}
