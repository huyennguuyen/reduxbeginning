import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();

  const singleArticle = useSelector((state) => state.articleState.entries);

  const one = {};
  singleArticle.forEach((article) => {
    one[article.id] = article;
  });

  return (
    <div className="singleArticle">
      <h1>{one[id]?.title}</h1>
      <img src={one[id].imageUrl} alt={one[id].title} />
      <p>{one[id]?.body}</p>
    </div>
  );
};

export default SingleArticle;
