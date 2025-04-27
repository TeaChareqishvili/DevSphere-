import { SignOutButton } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogOut() {
  return (
    <>
      <SignOutButton>
        <FontAwesomeIcon icon={faRightFromBracket} size="lg" cursor="pointer" />
      </SignOutButton>
    </>
  );
}
