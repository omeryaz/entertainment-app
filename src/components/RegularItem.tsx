import PlayButton from "./PlayButton";
import { ItemBookmarkIcon } from "../Icons/ItemIcons";

const RegularItem: React.FC<any> = ({ item, category, isBookmarked }) => {
  return (
    <div>
      <div className="relative group">
        {/* Image */}
        <img
          className="rounded-xl group-hover:opacity-60 "
          src={item.thumbnail.regular.medium}
          alt=""
        />

        {/* Bookmark Icon */}
        {<ItemBookmarkIcon title={item.title} isBookmarked={isBookmarked} />}

        {/* Play Button */}
        <PlayButton />
      </div>
      {/* Item description */}
      <p className="font-light text-sm opacity-75 flex mt-2">
        {item.year} &#x2022;{" "}
        <span className="flex items-center mx-1">{category}</span>{" "}
        {item.category} &#x2022; {item.rating}
      </p>
      <p className="font-medium text-lg mb">{item.title}</p>
    </div>
  );
};

export default RegularItem;
