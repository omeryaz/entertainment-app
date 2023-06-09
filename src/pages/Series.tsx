import data from "../data.json";
import { useGeneral } from "../Context";
import RegularItemContainer from "../components/RegularItemContainer";
function Series() {
  const { filterText } = useGeneral();
  let series = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "TV Series");

  return (
    <RegularItemContainer
      itemsToRender={series}
      sectionHeader="TV Series"
    ></RegularItemContainer>
  );
}

export default Series;
