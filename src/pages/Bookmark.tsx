import data from "../data.json";
import { useGeneral } from "../Context";
import RegularItemContainer from "../components/RegularItemContainer";

function Bookmark() {
  const { filterText, bookmarkItems } = useGeneral();

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
    <>
      {/* Rendering of bookmarked TV Series and Movies */}
      {!filterText && (
        <RegularItemContainer
          itemsToRender={bookmarkedMovies}
          sectionHeader="Bookmarked Movies"
        ></RegularItemContainer>
      )}
      {!filterText && (
        <RegularItemContainer
          itemsToRender={bookmarkedSeries}
          sectionHeader="Bookmarked TV Series"
        ></RegularItemContainer>
      )}

      {/* Displaying the bookmarked content together when filtering */}
      {filterText && (
        <RegularItemContainer
          itemsToRender={[...bookmarkedMovies, ...bookmarkedSeries]}
          sectionHeader=""
        ></RegularItemContainer>
      )}
    </>
  );
}

export default Bookmark;
