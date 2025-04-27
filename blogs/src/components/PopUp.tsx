import { PopUpTypes } from "../type";

export default function PopUp({
  handleGoToSignIn,
  setShowWarning,
}: PopUpTypes) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="pop-up-warning">
          You must be signed in to view the full blog.
        </p>
        <button className="pop-up-button" onClick={handleGoToSignIn}>
          Go to Sign In
        </button>
        <button className="pop-up-button" onClick={() => setShowWarning(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
