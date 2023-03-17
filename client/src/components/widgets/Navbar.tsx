import LogoLetters from "../atoms/LogoLettering";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
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
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost normal-case h-full p-2 ml-3">
          <LogoLetters />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 ">
          {population.length >> 5 ? (
            population.slice(0, 5).map((item: any) => {
              return (
                <li>
                  <NavLink
                    to={`/${item.link}`}
                    className="text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })
          ) : (
            <li tabIndex={0}>
              <a className="uppercase  tracking-wider rounded-2xl">
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
              <ul className="p-2 bg-gradient-to-r from-[#1e2627fa] via-[#1d2223ff] to-[#1e2627fa] transition-all slide-in-top blur-edge  w-auto h-auto rounded-2xl justify-center backdrop-blur-3xl">
                {population.map((item: any) => {
                  return (
                    <li>
                      <NavLink
                        to={`/${item.link}`}
                        className="text-lg  rounded-xl uppercase text-center  w-100vwtracking-wider "
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
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

type MobileMenu = {
  handleBlur: () => void;
  handleClick: () => void;
  handleMenuToggle: () => void;
};

function MobileMenu({ handleBlur, handleClick, handleMenuToggle }: MobileMenu) {
  const { population, menuOpen } = useContext(AppContext);

  return (
    <>
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden w-auto"
        onClick={handleMenuToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5  transition-all`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M4,4 L20,20 M4,20 L20,4" : "M4 6h16M4 12h8m-8 6h16"}
          />
        </svg>
      </label>
      <div
        className={`overflow-y-scroll flex flex-col   ${
          menuOpen ? "" : "hidden"
        } bg-gradient-to-r from-[#1e2627fa] via-[#1d2223ff] to-[#1e2627fa] w-screen h-screen backdrop-blur-xl bg-blend-overlay items-center absolute top-24 left-0`}
        onBlur={handleBlur}
      >
        <Link
          to="/"
          className="text-2xl pt-10 pb-5 text-white tracking-wider font-light uppercase"
          onClick={handleClick}
        >
          Home
        </Link>
        <Dropdown population={population} handleClick={handleClick} />
      </div>
    </>
  );
}

type DropdownType = ({
  population,
  handleClick,
}: {
  population: any;
  handleClick: any;
}) => JSX.Element;

const Dropdown: DropdownType = ({ population, handleClick }) => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <>
      <div
        className="text-2xl uppercase py-5 text-white tracking-wider font-light flex flex-row items-center"
        onClick={(e) => {
          e.preventDefault();
          setDropOpen(!dropOpen);
        }}
      >
        Empreendimentos
        <svg
          className={`ml-2 fill-current transition-all ${
            dropOpen ? "state-rotate" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
      <div
        className={`${
          dropOpen ? "" : "hidden"
        } flex flex-col items-center pb-10`}
      >
        {population.map((item: any) => {
          return (
            <Link
              to={`/${item.link}`}
              className="text-2xl uppercase py-5 text-white tracking-wider font-light"
              onClick={handleClick}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
