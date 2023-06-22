import PlayButton from "./PlayButton";
import { ItemBookmarkIcon } from "../Icons/ItemIcons";
import { motion } from "framer-motion";
import { RegularItemProps } from "../types";
import { forwardRef } from "react";

const RegularItem = forwardRef<HTMLDivElement, RegularItemProps>(
  ({ item, category, isBookmarked }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 300 }}
        transition={{ duration: 0.4 }}
      >
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

        {/* Title */}
        <p className="font-medium text-lg mb">{item.title}</p>
      </motion.div>
    );
  }
);

export default RegularItem;
