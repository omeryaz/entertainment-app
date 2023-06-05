import RegularItem from "../components/RegularItem";
import data from "../data.json";
import { useGeneral } from "../Context";
function Series() {
  const { filterText, categories, bookmarkItems } = useGeneral();
  let series = data
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((item) => item.category === "TV Series");

  return (
    <div className="mr-10">
      <h2 className="font-light text-3xl mb-5">
        {filterText
          ? `Found ${
              filterText.length !== 0 && series.length === 0
                ? "no matches"
                : series.length
            } for "${filterText}"`
          : "TV Series"}
      </h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        {series.map((item) => {
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

export default Series;
