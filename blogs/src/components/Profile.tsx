import { useUser } from "@clerk/clerk-react";
import Loader from "./Loader";

export default function Profile() {
  const { user } = useUser();

  console.log(user, "user");

  if (!user) {
    return <Loader />;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Profile</h2>
      <p>
        <strong>Email:</strong> {user.emailAddresses[0].emailAddress}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
    </div>
  );
}
