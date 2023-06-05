import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ItemMovieIcon, ItemSeriesIcon } from "./Icons/ItemIcons";
import data from "./data.json";

const defaultBookmarkItems: { [key: string]: boolean } = {};

data.forEach((item) => (defaultBookmarkItems[item.title] = item.isBookmarked));

export type ContextType = {
  filterText: string;
  setFilterText: Dispatch<SetStateAction<string>>;
  bookmarkItems: { [key: string]: boolean };
  setBookmarkItems: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  categories: {
    [key: string]: JSX.Element;
    movie: JSX.Element;
    tvseries: JSX.Element;
  };
};

export const defaultState: ContextType = {
  filterText: "",
  setFilterText: () => {},
  bookmarkItems: defaultBookmarkItems,
  setBookmarkItems: () => {},
  categories: {
    movie: <ItemMovieIcon />,
    tvseries: <ItemSeriesIcon />,
  },
};

const GeneralContext = createContext<ContextType | null>(defaultState);

export const GeneralProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterText, setFilterText] = useState<string>("");
  const [bookmarkItems, setBookmarkItems] = useState<{
    [key: string]: boolean;
  }>(defaultBookmarkItems);

  const categories = {
    movie: <ItemMovieIcon />,
    tvseries: <ItemSeriesIcon />,
  };

  return (
    <GeneralContext.Provider
      value={{
        filterText,
        setFilterText,
        bookmarkItems,
        setBookmarkItems,
        categories,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = () => useContext(GeneralContext) as ContextType;
