/* eslint-disable react/prop-types */
const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
      <div className="w-full sm:flex flex-row justify-end gap-2 pr-5 hidden ">
        {
          tags.map((tag) => {
            return (
              <span
                key={tag}
                className="alura-tag"
              >{tag}</span>
              // <span
              //   key={tag}
              //   className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-alura-200 hover:scale-110"
              // >{tag}</span>
            );
          })
        }
      </div>
      <div className="grid gap-1">
        {
          text.map((content, index) => {
            return (
              <p
                key={index}
                className="text-alura-200 dark:text-gray-400 line-clamp-2 sm:line-clamp-none"
              >{content}</p>
            );
          })
        }
      </div>
      {image && <img className="sm:p-4" src={image} /> }
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
}

export default Article;