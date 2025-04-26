import { useContext } from "react";
import { FavoriteBlogContext } from "../context/Store/StoreProvider";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticleArrayType } from "../type";

export default function Blogs({ data }: ArticleArrayType) {
  const { favorites, removeFavorite, addFavorite } =
    useContext(FavoriteBlogContext);

  // TODO refactor styles

  return (
    <>
      {data.map((item) => {
        const isFavorite = favorites.includes(item.id);

        return (
          <div key={item.id} className="blog">
            <div className="blog-image">
              <img src={item.social_image} alt="Blog-Image-Not-Available" />
            </div>
            <div className="blog-content">
              <h1>{item.title}</h1>
              <p className="description">{item.description}</p>
              <p className="content">{item.tags}</p>
              <p className="content">{item.positive_reactions_count}</p>
              <span>{item.readable_publish_date}</span>
              <a className="link" href={item.url}>
                Read More
              </a>
            </div>
            <FontAwesomeIcon
              icon={isFavorite ? solidHeart : regularHeart}
              color="red"
              onClick={() =>
                isFavorite ? removeFavorite(item.id) : addFavorite(item.id)
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      })}
    </>
  );
}
