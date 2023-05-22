import React from "react";
const TrendingItem: React.FC<any> = ({ item }) => {
  return (
    <div>
      <img src={item.thumbnail.trending.large} alt="" />
      <p></p>
    </div>
  );
};

export default TrendingItem;
