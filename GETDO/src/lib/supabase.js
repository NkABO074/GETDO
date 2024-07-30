import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

supabase.auth.oauth.google({
  clientId: "YOUR_GOOGLE_OAUTH_CLIENT_ID",
  clientSecret: "YOUR_GOOGLE_OAUTH_CLIENT_SECRET",
  redirectUri: "http://localhost:5173/home", // redirect to your app after signin
});
