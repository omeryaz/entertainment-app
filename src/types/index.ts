export type ItemProps = {
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

export type RegularItemContainerProps = {
  itemsToRender: ItemProps[];
  sectionHeader: string;
};

export type RegularItemProps = {
  item: ItemProps;
  category: string | any;
  isBookmarked: boolean;
};
