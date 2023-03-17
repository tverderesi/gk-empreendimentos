import LogoLetters from "../atoms/LogoLettering";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const { population, menuOpen, dispatch } = useContext(AppContext);
  console.log(population.length > 5);
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
    <header className="custom-navbar">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost normal-case h-full p-2 ml-3">
          <LogoLetters />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 my-auto">
          <li>
            <NavLink
              to="/"
              className="btn btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          {population.length > 5 ? (
            <li tabIndex={0}>
              <a className="uppercase tracking-wider rounded-2xl">
                Empreendimentos
                <svg
                  className="fill-current transition-all rotation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-gradient-to-r from-[#1e2627fa] via-[#1d2223ff] to-[#1e2627fa] transition-all slide-in-top blur-edge w-full h-auto rounded-2xl justify-center backdrop-blur-3xl">
                {population.map((item: any) => {
                  return (
                    <li className="w-full flex justify-center text-center">
                      <NavLink to={`/${item.link}`} className="rounded-xl">
                        <span className="text-lg uppercase tracking-wide mx-auto">
                          {item.title}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
            population.map((item: any) => {
              return (
                <li>
                  <NavLink
                    to={`/${item.link}`}
                    className="btn btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <MobileMenu
          handleBlur={handleBlur}
          handleClick={handleClick}
          handleMenuToggle={handleMenuToggle}
        />
      </div>
    </header>
  );
}
