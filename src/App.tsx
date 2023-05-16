import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  HomeIcon,
  MoviesIcon,
  SeriesIcon,
  BookmarkIcon,
  Logo,
} from "./pages/Icons";
import Home from "./pages/Home";

function App() {
  const links: [string, React.ComponentType][] = [
    ["/", HomeIcon],
    ["/movies", MoviesIcon],
    ["/series", SeriesIcon],
    ["/bookmark", BookmarkIcon],
  ];
  return (
    <div className="flex flex-row  h-screen bg-darkblue ">
      <nav className=" basis-1/12 h-[80vh] bg-semidarkblue items-center my-7 mx-7 rounded-[1rem] max-h-[960px]">
        <ul className="flex flex-col h-3/6 justify-around items-center">
          <li className="mt-5">
            <Logo></Logo>
          </li>
          {links.map(([url, IconComponent]) => (
            <li
              className=" hover:brightness-150 hover:cursor-pointer"
              key={url}
            >
              <Link to={url}>
                <IconComponent />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col">
        <div className="text-white">Search Bar</div>
        <div className="basis-11/12">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies"></Route>
            <Route path="/series"></Route>
            <Route path="/bookmark"></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
