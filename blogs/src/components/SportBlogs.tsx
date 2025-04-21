import useFetchSportArticles from "../hooks/useFetchSportData";
import Blogs from "./Blogs";
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // filled star
// import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'; // empty star
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SportBlogs() {
  const { articles } = useFetchSportArticles();

  return (
    <div className="blog-container">
      <Blogs blog={articles} />
    </div>
  );
}
