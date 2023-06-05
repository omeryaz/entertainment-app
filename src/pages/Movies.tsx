import RegularItem from "../components/RegularItem";
import data from "../data.json";
import { useGeneral } from "../Context";
function Movies() {
  const { filterText, categories, bookmarkItems } = useGeneral();
  let movies = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "Movie");

  return (
    <div className="mr-10">
      {/* Heading */}
      <h2 className="font-light text-3xl mb-5">
        {filterText
          ? `Found ${
              filterText.length !== 0 && movies.length === 0
                ? "no matches"
                : movies.length
            } for "${filterText}"`
          : "Movies"}
      </h2>

      {/* Rendering Movies */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((item) => {
          return (
            <RegularItem
              key={item.title}
              item={item}
              isBookmarked={bookmarkItems[item.title]}
              category={
                categories[item.category.toLowerCase().split(" ").join("")]
              }
            ></RegularItem>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
