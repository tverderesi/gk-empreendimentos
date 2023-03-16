import LogoLetters from "../atoms/LogoLettering";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Navbar() {
  const { population, menuOpen, dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  const handleBlur = () => {
    dispatch({ type: "CLOSE_MENU" });
  };

  const handleMenuToggle = () => {
    dispatch({ type: menuOpen ? "CLOSE_MENU" : "OPEN_MENU" });
  };

  return (
    <header className="navbar bg-cadetblue-400 dark:bg-[#1a1a1a]/80 backdrop-blur-xl py-[1rem] fixed w-full top-0 z-10 h-24 drop-shadow-xl">
      <div className="navbar-start min-w-[25%]">
        <NavLink to="/" className="btn btn-ghost normal-case h-full p-2 ml-3">
          <LogoLetters />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 ">
          <>
            {population.map((item: any) => {
              return (
                <li>
                  <NavLink
                    to={`/${item.link}`}
                    className="btn btn-ghost text-lg h-full py-3 px-3 rounded-xl text-white tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </>
        </ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                menuOpen ? "M4,4 L20,20 M4,20 L20,4" : "M4 6h16M4 12h8m-8 6h16"
              }
            />
          </svg>
        </label>
        <ul
          className={`overflow-y-scroll menu menu-vertical   ${
            menuOpen ? "" : "hidden"
          }  bg-[#1a1a1af1] w-screen h-screen backdrop-blur-xl bg-blend-overlay flex flex-col items-center absolute top-24 left-0 z-50`}
          onBlur={handleBlur}
        >
          <li>
            <Link
              to="/"
              className="btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <span>Parent</span>
            <ul>
              {population.map((item: any) => {
                return (
                  <li key={item.link}>
                    <Link
                      to={`/${item.link}`}
                      className="btn btn-ghost text-xl h-full py-10 px-4 rounded-xl text-white tracking-wider font-normal mr-2 ml-2 w-auto"
                      onClick={handleClick}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
