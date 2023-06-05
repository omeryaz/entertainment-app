import RegularItem from "../components/RegularItem";
import data from "../data.json";
import { useGeneral } from "../Context";

function Bookmark() {
  const { filterText, categories, bookmarkItems } = useGeneral();

  // Array of filtered and bookmarked Movies
  let bookmarkedMovies = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "Movie")
    .filter((item) => bookmarkItems[item.title]);

  // Array of filtered and bookmarked TV Series
  let bookmarkedSeries = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "TV Series")
    .filter((item) => bookmarkItems[item.title]);

  return (
    <div className="mr-10">
      <h2 className="font-light text-3xl mb-5">Bookmarked Movies</h2>
      <div className="grid grid-cols-4 gap-4">
        {bookmarkedMovies.map((item) => {
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
      <h2 className="font-light text-3xl mb-5">Bookmarked TV Series</h2>
      <div className="grid grid-cols-4 gap-4">
        {bookmarkedSeries.map((item) => {
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

export default Bookmark;
