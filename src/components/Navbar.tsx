import {
  HomeIcon,
  MoviesIcon,
  SeriesIcon,
  BookmarkIcon,
  Logo,
} from "../Icons/NavbarIcons";

import { NavLink } from "react-router-dom";

function Navbar() {
  // Page routes and their icons
  const links: [string, React.ComponentType][] = [
    ["/", HomeIcon],
    ["/movies", MoviesIcon],
    ["/series", SeriesIcon],
    ["/bookmark", BookmarkIcon],
  ];
  return (
    <nav className="flex basis-20 h-[80vh] max-h-[960px] bg-semidarkblue items-center md:my-5 md:mx-5 md:rounded-[1rem] px-5 xl:py-7">
      <ul className=" flex h-full w-full xl:flex-col items-center">
        {/* Logo */}
        <li>
          <Logo></Logo>
        </li>

        {/* Pages */}
        <li className="ml-auto">
          <ul className="flex xl:flex-col xl:mt-10">
            {links.map(([url, IconComponent]) => (
              <li className="hover:cursor-pointer px-5 xl:py-4" key={url}>
                <NavLink to={url}>
                  <IconComponent />
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Profile */}
        <li className="ml-auto xl:ml-0 xl:mt-auto">
          <div className="w-10 h-10 rounded-full ring-1 ring-white/60">
            <img src="./assets/image-avatar.png" alt="avatar" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
