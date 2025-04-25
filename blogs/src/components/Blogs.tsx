import { useContext } from "react";
import { FavoriteBlogContext } from "../Store/StoreProvider";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticleArrayType } from "../type";

export default function Blogs({ blog }: ArticleArrayType) {
  const { favorites, removeFavorite, addFavorite } =
    useContext(FavoriteBlogContext);

  console.log(favorites, "fav");

  return (
    <>
      {blog.map((item: any) => {
        const isFavorite = favorites.includes(item.url);

        return (
          <div key={item.url} className="blog">
            <div className="blog-image">
              <img src={item.urlToImage} alt="Blog-Image-Not-Available" />
            </div>
            <div className="blog-content">
              <h1>{item.title}</h1>
              <p className="description">{item.description}</p>
              <p className="content">{item.content}</p>
              <span>{item.publishedAt}</span>
              <a className="link" href={item.url}>
                Read More
              </a>
            </div>
            <FontAwesomeIcon
              icon={isFavorite ? solidHeart : regularHeart}
              color="red"
              onClick={() =>
                isFavorite ? removeFavorite(item.url) : addFavorite(item.url)
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        );
      })}
    </>
  );
}
