import {
  HomeIcon,
  MoviesIcon,
  SeriesIcon,
  BookmarkIcon,
  Logo,
} from "../Icons/NavbarIcons";

import { NavLink } from "react-router-dom";

function Navbar() {
  const links: [string, React.ComponentType][] = [
    ["/", HomeIcon],
    ["/movies", MoviesIcon],
    ["/series", SeriesIcon],
    ["/bookmark", BookmarkIcon],
  ];
  return (
    <nav className="basis-1/12 min-w-[75px] h-[80vh] bg-semidarkblue items-center my-7 mx-7 rounded-[1rem] max-h-[960px]">
      <ul className="flex flex-row md:flex-col md:h-3/6 justify-around items-center">
        <li className="md:mt-5">
          <Logo></Logo>
        </li>
        {links.map(([url, IconComponent]) => (
          <li className="hover:cursor-pointer" key={url}>
            <NavLink to={url}>
              <IconComponent />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
