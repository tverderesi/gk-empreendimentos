import LogoLetters from "../atoms/LogoLettering";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenu } from "./MobileMenu";
import { ListDropDown } from "../atoms/ListDropDown";

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
              className="btn btn-ghost btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          {population.length > 5 ? (
            <ListDropDown>
              <>Empreendimentos</>

              {population.map((item: any) => {
                return (
                  <NavLink
                    to={`/tabelas/${item.link}`}
                    className="rounded-xl"
                    key={item.link}
                  >
                    <span className="text-lg uppercase tracking-wide mx-auto">
                      {item.title}
                    </span>
                  </NavLink>
                );
              })}
            </ListDropDown>
          ) : (
            population.map((item: any) => {
              return (
                <li key={item.link}>
                  <NavLink
                    to={`/tabelas/${item.link}`}
                    className="btn btn-ghost btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })
          )}
          <ListDropDown>
            <>Outros</>
            <NavLink
              to="/folders"
              className=" rounded-xl text-lg  mb-1 py-3 px-3  uppercase  tracking-wider font-medium "
              onClick={handleClick}
            >
              Folders e Tabelas
            </NavLink>
            <NavLink
              to="/terceiros"
              className="text-lg rounded-xl   py-3 px-3 uppercase  tracking-wider font-medium "
              onClick={handleClick}
            >
              Imóveis de Terceiros
            </NavLink>
          </ListDropDown>
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
