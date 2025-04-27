import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

export default function Profile() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="auth-container">
      <h2>Profile</h2>
      <p>
        <strong>Email:</strong> {user?.emailAddresses[0].emailAddress}
      </p>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
    </div>
  );
}
