import { SignOutButton } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@clerk/clerk-react";

export default function LogOut() {
  const { user } = useUser();
  return (
    <>
      {user && (
        <SignOutButton>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            size="lg"
            cursor="pointer"
          />
        </SignOutButton>
      )}
    </>
  );
}
