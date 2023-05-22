import RegularItem from "../components/RegularItem";
import TrendingItem from "../components/TrendingItem";
import data from "../data.json";
import { MoviesIcon, SeriesIcon } from "../pages/Icons";

function Home() {
  let trendingItems = data.filter((item) => item.isTrending === true);
  let regularItems = data.filter((item) => item.isTrending === false);
  // TODO: Category icons needs to be passed down to Items!
  // const categories: [string, React.ComponentType][] = [
  //   movie: MoviesIcon,
  //   tvseries : SeriesIcon,
  // ];
  return (
    <div>
      {/* Rendering of trending items */}
      <div className="h-[295px]">
        <h2 className="font-light text-3xl mb-5">Trending</h2>
        <div className="grid gap-5 grid-flow-col auto-cols-[400px] overflow-x-auto max-w-screen-xl">
          {trendingItems.map((item) => {
            return (
              <TrendingItem
                key={item.title}
                item={item}
                // category={categories[item.category]}
              ></TrendingItem>
            );
          })}
        </div>
      </div>

      {/* Rendering of regular items */}
      <div className="mr-10">
        <h2 className="font-light text-3xl mb-5">Recommended for you</h2>
        <div className="grid grid-cols-4 gap-4">
          {regularItems.map((item) => {
            return <RegularItem key={item.title} item={item}></RegularItem>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
