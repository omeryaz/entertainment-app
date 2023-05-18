import RegularItem from "../components/RegularItem";
import data from "../data.json";

function Home() {
  return (
    <div>
      <h2>Trending</h2>

      <h2 className="text-2xl font-bold">Recommended for you</h2>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, i) => {
          return <RegularItem key={item.title} index={i}></RegularItem>;
        })}
      </div>
    </div>
  );
}

export default Home;
