import RegularItem from "../components/RegularItem";

function Home() {
  return (
    <div>
      <h2>Trending</h2>

      <h2 className="text-2xl font-bold text-white">Recommended for you</h2>
      <RegularItem index={0}></RegularItem>
    </div>
  );
}

export default Home;
