import { loginWithOAuth } from "../login/actionsOauth";

export default function OAuthLogin() {
  return (
    <div>
      <button onClick={() => loginWithOAuth("google")} className="w-8">
        <img src="https://www.pngall.com/wp-content/uploads/13/Google-Logo.png" />
      </button>
    </div>
  );
}
