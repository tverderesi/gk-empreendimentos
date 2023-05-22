import LogoLetters from "../atoms/LogoLettering";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenu } from "./MobileMenu";
import { ListDropDown } from "../atoms/ListDropDown";

export function TableNavbar() {
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
        <Link
          href="/tabelas/"
          className="btn btn-ghost normal-case h-full p-2 ml-3 no-animation"
        >
          <LogoLetters />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 my-auto">
          <li>
            <Link
              href="/tabelas/"
              className="btn btn-ghost btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          {population.length > 5 ? (
            <ListDropDown>
              <>Empreendimentos</>

              {population.map((item: any) => {
                return (
                  <Link
                    href={`/tabelas/${item.link}`}
                    className="rounded-xl"
                    key={item.link}
                  >
                    <span className="text-lg uppercase tracking-wide mx-auto">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </ListDropDown>
          ) : (
            population.map((item: any) => {
              return (
                <li key={item.link}>
                  <Link
                    href={`/tabelas/${item.link}`}
                    className="btn btn-ghost btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })
          )}
          <ListDropDown>
            <>Outros</>

            <Link
              href="/tabelas/terceiros"
              className="text-lg rounded-xl   py-3 px-3 uppercase  tracking-wider font-medium "
              onClick={handleClick}
            >
              Imóveis de Terceiros
            </Link>
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
