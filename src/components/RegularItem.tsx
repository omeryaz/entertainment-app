const RegularItem: React.FC<any> = ({ item }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="rounded-xl"
          src={`.${item.thumbnail.regular.medium}`}
          alt=""
        />
        <p className="font-light text-sm absolute bottom-1 left-1">
          {item.year} * {item.category} * {item.rating}
        </p>
      </div>
      <p className="font-medium text-lg">{item.title}</p>
    </div>
  );
};

export default RegularItem;
