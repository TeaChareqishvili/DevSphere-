import { useState } from "react";
import { BlogDetailProps } from "../type";
import { useUser } from "@clerk/clerk-react";
import PopUp from "./PopUp";

export default function BlogDetail({ item }: BlogDetailProps) {
  const { isSignedIn } = useUser();
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    if (isSignedIn) {
      window.open(item.url, "_blank");
    } else {
      setShowWarning(true);
    }
  };

  const handleGoToSignIn = () => {
    setShowWarning(false);
    window.location.href = "/sign-in";
  };

  return (
    <>
      <button className="link" onClick={handleClick}>
        Read More
      </button>

      {showWarning && (
        <PopUp
          handleGoToSignIn={handleGoToSignIn}
          setShowWarning={setShowWarning}
        />
      )}
    </>
  );
}
