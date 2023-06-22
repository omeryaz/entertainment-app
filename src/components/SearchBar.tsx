import { useGeneral } from "../Context";
import { useRef } from "react";
function SearchBar() {
  const { filterText, setFilterText } = useGeneral();

  // Focusing on the search input when the search icon is clicked
  const searchInputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="flex align-items mt-2 md:mt-7 ml-4">
      {/* Search Icon */}
      <span onClick={focusInput}>
        <svg
          className="inline-block mr-5 hover:opacity-70"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
            fill="#FFF"
          />
        </svg>
      </span>

      {/* Search Input */}
      <input
        ref={searchInputRef}
        className="bg-darkblue font-light text-3xl xl:text-base placeholder:font-light placeholder:opacity-75 w-11/12 outline-none border-none focus:border-solid border-b-2 border-greyishblue transition-[border]"
        placeholder="Search for movies or TV Series"
        type="text"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
