import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="auth-container">
      <SignIn />
    </div>
  );
}
