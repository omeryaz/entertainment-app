import { motion } from "framer-motion";
import { useGeneral } from "../Context";
import { trendingContainerVariants } from "../animations";
import RegularItemContainer from "../components/RegularItemContainer";
import TrendingItem from "../components/TrendingItem";
import data from "../data.json";

function Home() {
  const { filterText, bookmarkItems, categories } = useGeneral();

  let trendingItems = data.filter((item) => item.isTrending === true);
  let itemsToRender = data
    .filter((item) => item.isTrending === false)
    .filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    );

  const renderTrending = () => {
    return (
      <div className="h-72 mt-8">
        <h2 className="font-light text-3xl mb-5">Trending</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={trendingContainerVariants}
          className="grid gap-5 grid-flow-col auto-cols-[24rem] md:auto-cols-[26rem] overflow-x-auto max-w-screen-xl"
        >
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
        </motion.div>
      </div>
    );
  };
  return (
    <>
      <section>{!filterText && renderTrending()}</section>
      <section>
        <RegularItemContainer
          itemsToRender={itemsToRender}
          sectionHeader="Recommended for you"
        />
      </section>
    </>
  );
}

export default Home;
