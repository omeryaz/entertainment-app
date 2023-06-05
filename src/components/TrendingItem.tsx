import React from "react";
import PlayButton from "./PlayButton";
import { ItemBookmarkIcon } from "../Icons/ItemIcons";
const TrendingItem: React.FC<any> = ({ item, category, isBookmarked }) => {
  return (
    <div className="relative group">
      {/* Image */}
      <img
        className="rounded-xl group-hover:opacity-60"
        src={item.thumbnail.trending.large}
        alt=""
      />

      {/* Bookmark Icon */}
      {<ItemBookmarkIcon title={item.title} isBookmarked={isBookmarked} />}

      {/* Play Button */}
      <PlayButton />

      {/* Item description */}
      <p className="absolute bottom-12 left-5 text-sm font-light opacity-75 flex">
        {item.year} &#x2022;{" "}
        <span className="flex items-center mx-1">{category}</span>{" "}
        {item.category} &#x2022; {item.rating}
      </p>
      <p className="absolute bottom-5 left-5 font-medium text-xl">
        {item.title}
      </p>
    </div>
  );
};

export default TrendingItem;
