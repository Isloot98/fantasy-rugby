import { createClient } from "../utils/supabase/client";
export async function loginWithOAuth(provider: "google") {
  const supabase = createClient();
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "/",
      // we can use location.origin here
    },
  });
}
