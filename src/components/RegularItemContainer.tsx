import RegularItem from "./RegularItem";
import { useGeneral } from "../Context";

type Item = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

type RegularItemContainerProps = {
  itemsToRender: Item[];
  sectionHeader: string;
};

function RegularItemContainer({
  itemsToRender,
  sectionHeader,
}: RegularItemContainerProps) {
  const { filterText, bookmarkItems, categories } = useGeneral();
  return (
    <div>
      <div className="mr-5 lg:mr-10">
        {/* Section Heading */}
        <h2 className="font-light text-3xl mb-5">
          {filterText
            ? `Found ${
                itemsToRender.length !== 0 ? itemsToRender.length : "no match"
              } for "${filterText}"`
            : `${sectionHeader}`}
        </h2>

        {/* Section Body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {itemsToRender.map((item) => {
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
    </div>
  );
}

export default RegularItemContainer;
