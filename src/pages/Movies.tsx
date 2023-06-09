import RegularItemContainer from "../components/RegularItemContainer";
import data from "../data.json";
import { useGeneral } from "../Context";
function Movies() {
  const { filterText } = useGeneral();
  let movies = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "Movie");

  return <RegularItemContainer itemsToRender={movies} sectionHeader="Movies" />;
}

export default Movies;
