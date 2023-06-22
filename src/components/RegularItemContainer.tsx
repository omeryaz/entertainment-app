import RegularItem from "./RegularItem";
import { useRef } from "react";
import { useGeneral } from "../Context";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants } from "../animations";
import { RegularItemContainerProps } from "../types";

function RegularItemContainer({
  itemsToRender,
  sectionHeader,
}: RegularItemContainerProps) {
  // Ref for RegularItem forwardRef
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { filterText, bookmarkItems, categories } = useGeneral();
  return (
    <div className="mr-5 lg:mr-5 mt-8">
      {/* Section Heading */}
      <h2 className="font-light text-3xl mb-5">
        {filterText
          ? `Found ${
              itemsToRender.length !== 0 ? itemsToRender.length : "no match"
            } for "${filterText}"`
          : `${sectionHeader}`}
      </h2>

      {/* Section Body */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {itemsToRender.map((item) => {
            return (
              <RegularItem
                ref={containerRef}
                key={item.title}
                item={item}
                isBookmarked={bookmarkItems[item.title]}
                category={
                  categories[item.category.toLowerCase().split(" ").join("")]
                }
              ></RegularItem>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default RegularItemContainer;
