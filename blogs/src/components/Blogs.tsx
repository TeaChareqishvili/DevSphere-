import { useContext } from "react";
import { FavoriteBlogContext } from "../context/Store/StoreProvider";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticleArrayType } from "../type";

export default function Blogs({ data }: ArticleArrayType) {
  const { favorites, removeFavorite, addFavorite } =
    useContext(FavoriteBlogContext);

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
              <div className="tags-container">
                {item.tag_list.map((tag: string, index: number) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="content">
                Positive Reactions -{item.positive_reactions_count}
              </p>
              <span className="content">
                Published:{item.readable_publish_date}
              </span>
              <a className="link" href={item.url}>
                Read More
              </a>
            </div>
            <div className="fav-icon-container">
              <FontAwesomeIcon
                icon={isFavorite ? solidHeart : regularHeart}
                color="red"
                onClick={() =>
                  isFavorite ? removeFavorite(item.id) : addFavorite(item.id)
                }
                style={{ cursor: "pointer", width: "30px", height: "30px" }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
