import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfktvpaerefoevhsgibv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRma3R2cGFlcmVmb2V2aHNnaWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MzQ0NjgsImV4cCI6MjAyNDExMDQ2OH0.POCETrnmJuh1dL74MU6mnzwQcqtjxpacbaMibnMi8JA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
