import data from "../data.json";

const RegularItem: React.FC<any> = ({ index }) => {
  const item = data[index];

  return (
    <div>
      <img src={`.${item.thumbnail.regular.small}`} alt="" />
      <p>
        {item.year} * {item.category} * {item.rating}
      </p>
      <p>{item.title}</p>
    </div>
  );
};

export default RegularItem;
