import { ArticleTypes } from "../hooks/useFetchSportData";
// TODO fix type any
export default function Blogs({ blog }: any) {
  return (
    <>
      {blog.map((item: ArticleTypes) => (
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
          {/* <FontAwesomeIcon icon={solidStar} color="gold" /> */}
        </div>
      ))}
    </>
  );
}
