import RegularItem from "../components/RegularItem";
import TrendingItem from "../components/TrendingItem";
import data from "../data.json";
import { useGeneral } from "../Context";

function Home() {
  const { filterText, bookmarkItems, categories } = useGeneral();

  let trendingItems = data.filter((item) => item.isTrending === true);
  let regularItems = data.filter((item) => item.isTrending === false);
  let filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  let itemToRender = filterText ? filteredItems : regularItems;

  // Rendering Trending Items
  const renderTrending = () => {
    return (
      <div className="h-[295px]">
        <h2 className="font-light text-3xl mb-5">Trending</h2>
        <div className="grid gap-5 grid-flow-col auto-cols-[400px] overflow-x-auto max-w-screen-xl">
          {trendingItems.map((item) => {
            return (
              <TrendingItem
                key={item.title}
                item={item}
                isBookmarked={bookmarkItems[item.title]}
                category={
                  categories[item.category.toLowerCase().split(" ").join("")]
                }
              ></TrendingItem>
            );
          })}
        </div>
      </div>
    );
  };

  // Rendering Regular Items
  const renderItems = () => {
    return (
      <div className="mr-10">
        <h2 className="font-light text-3xl mb-5">
          {filterText
            ? `Found ${filteredItems.length} for "${filterText}"`
            : "Recommended for you"}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {itemToRender.map((item) => {
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
  };

  return (
    <div>
      <section>{!filterText && renderTrending()}</section>
      <section>{renderItems()}</section>
    </div>
  );
}

export default Home;
