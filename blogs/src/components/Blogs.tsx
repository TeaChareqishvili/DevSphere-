import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // filled
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO fix any

export default function Blogs({ blog }: any) {
  return (
    <>
      {blog.map((item: any) => (
        <div key={item.id} className="blog">
          <div className="blog-image">
            <img src={item.urlToImage} alt="Blog-Image-Not-Available" />.
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
          <FontAwesomeIcon icon={solidHeart} color="gold" />
          <FontAwesomeIcon icon={regularHeart} color="gray" />
        </div>
      ))}
    </>
  );
}
