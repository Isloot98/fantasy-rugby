import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  // Try to fetch the user session
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
    redirect("/login");
    return null;
  }

  if (!data?.user) {
    console.warn("No user found, redirecting to login");
    redirect("/login");
    return null;
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
    </div>
  );
}
