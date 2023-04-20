import LogoLetters from "../atoms/LogoLettering";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenu } from "./MobileMenu";
import { ListDropDown } from "../atoms/ListDropDown";

export function Navbar() {
  const { menuOpen, dispatch } = useContext(AppContext);
  const population = [];
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
      <NavLink
        to="/"
        className="btn btn-ghost normal-case h-full p-2 no-animation flex-grow mx-10 lg:mx-0 lg:flex-grow-0"
      >
        <LogoLetters />
      </NavLink>

      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 my-auto">
          <NavItem title="Início" link="/" />
          <NavItem title="Sobre A GK" link="/sobre" />
          <NavItem title="Empreendimentos" link="/empreendimentos" />
          <NavItem title="Contato" link="/contato" />
          <NavItem title="Oportunidades" link="/Oportunidades" />
          <NavItem title="Histórico de Obras" link="/historico" />
        </ul>
      </div>
      <MobileMenu
        handleBlur={handleBlur}
        handleClick={handleClick}
        handleMenuToggle={handleMenuToggle}
      />
    </header>
  );
}
function NavItem({ title, link }: { title: string; link: string }) {
  const { dispatch } = useContext(AppContext);
  const handleClick = () => {
    dispatch({ type: "CLOSE_MENU" });
  };
  return (
    <li>
      <NavLink
        to={link}
        className="btn btn-ghost btn-ghost-primary rounded-lg uppercase  tracking-widest font-medium mx-2 px-2 py-1 my-auto"
        onClick={handleClick}
      >
        {title}
      </NavLink>
    </li>
  );
}

{
  /* {population.length > 5 ? (
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
                    to={`${item.link}`}
                    className="btn btn-ghost btn-ghost-primary text-lg  py-3 px-3 rounded-xl uppercase  tracking-wider font-medium min-w-max mx-2"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })
          )} */
}
