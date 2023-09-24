/* eslint-disable react/prop-types */
const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="container bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="grid gap-1">
        {
          text.map((content, index) => {
            return (
              <p
                key={index}
                className="text-alura-200 dark:text-gray-400"
              >{content}</p>
            );
          })
        }
      </div>
    </div>
  );
}

export default Article;