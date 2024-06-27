import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zrlvfdcrshkrmytvdirs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybHZmZGNyc2hrcm15dHZkaXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNzcxMTAsImV4cCI6MjAyMzc1MzExMH0.904dsCNK2xCOVAydpQeGpoLA-0GlTEsTXHyGkvI78n4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
