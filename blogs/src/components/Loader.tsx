import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="loader-container">
      <BeatLoader size={50} color="#e63946" />
    </div>
  );
}
