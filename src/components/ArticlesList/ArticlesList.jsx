/* eslint-disable react/prop-types */
import data from "../../../articles.json";
import Article from "../Article/Article";

const ArticlesList = () => {
  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {data.map((props, index) => {
        return (
          <Article key={index} {...props}/>
        );
      })}
    </div>
  );
}

export default ArticlesList;