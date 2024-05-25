"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter, usePathname } from "next/navigation";

const NavMenu = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
      return;
    }
    setUser(data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", (error as any).message);
    }
  };

  // Check if the current path is not '/'
  const isNotHomeOrLoginPage = pathname !== "/" && pathname !== "/login";

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <Link href="/login">login</Link>
        </div>
      )}

      {/* Render the navigation menu only if the user is not on the home page */}
      {isNotHomeOrLoginPage && (
        <ul className="nav-menu">
          <li>
            <Link href="/page1">Page 1</Link>
          </li>
          <li>
            <Link href="/page2">Page 2</Link>
          </li>
          <li>
            <Link href="/page3">Page 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavMenu;
