import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen bg-darkblue ">
      {/* Navigation Bar */}
      <Navbar></Navbar>

      {/* Main Content */}
      <div className="flex flex-col">
        <SearchBar></SearchBar>
        <div className="basis-11/12 ml-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/bookmark" element={<Bookmark />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
