import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenuType } from "../../Types";
import { ItemsList } from "./ItemsList";
import { ElementDropdown } from "../atoms/ElementDropdown";

export const MobileMenu: MobileMenuType = ({
  handleBlur,
  handleClick,
  handleMenuToggle,
}) => {
  const { population, menuOpen } = useContext(AppContext);
  console.log(population.length);
  const classes = `${
    menuOpen ? "flex flex-col" : "hidden"
  } overflow-y-scroll bg-gradient-to-r from-[#1e2627fa] via-[#1d2223ff] to-[#1e2627fa] w-screen h-[calc(100vh-6rem)] backdrop-blur-xl bg-blend-overlay 
  items-center absolute top-24 left-0`;
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
      <div className={classes} onBlur={handleBlur}>
        <Link
          to="/"
          className="text-2xl pt-10 pb-5 text-white tracking-wider font-light uppercase"
          onClick={handleClick}
        >
          Home
        </Link>
        {population.length > 5 ? (
          <ElementDropdown population={population} handleClick={handleClick} />
        ) : (
          <ItemsList population={population} handleClick={handleClick} />
        )}

        <Link
          to="/folders"
          className="text-2xl py-5 text-white tracking-wider font-light uppercase"
          onClick={handleClick}
        >
          Folders e Tabelas
        </Link>
        <Link
          to="/terceiros"
          className="text-2xl mb-10  pt-5 text-white tracking-wider font-light uppercase"
          onClick={handleClick}
        >
          Imóveis de Terceiros
        </Link>
      </div>
    </>
  );
};
