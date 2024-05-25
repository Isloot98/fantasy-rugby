"use client";

import Link from "next/link";
import { login, signup } from "../login/actions";
import Login from "../components/login";
import OAuthLogin from "../components/OAuthLogin";

export default function LoginPage() {
  return (
    <div>
      <Login />
      <OAuthLogin />
    </div>
  );
}
