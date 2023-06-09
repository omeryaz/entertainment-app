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
    <nav className="basis-1/12 min-w-[75px] h-[80vh] max-h-[960px] bg-semidarkblue items-center my-5 mx-5 rounded-[1rem] ">
      <ul className="flex flex-row lg:flex-col lg:h-3/6 justify-around items-center">
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
