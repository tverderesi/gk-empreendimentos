import LogoLetters from "../atoms/LogoLettering";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenu } from "./MobileMenu";
import { ListDropDown } from "../atoms/ListDropDown";
import { NavItem } from "../atoms/NavItem";
import Link from "next/link";

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

  const router = useRouter();
  const currentAddress = router.asPath;
  console.log(currentAddress);

  return (
    <header className="navbar py-[1rem] fixed  top-0 z-[100] h-24 drop-shadow-xl min-w-[100vw] bg-eerie-black-900/75 backdrop-blur-2xl blur-fallback">
      <Link
        href="/"
        className="h-full p-2 flex-grow justify-start lg:mx-0 lg:flex-grow-0 no-animation"
      >
        <LogoLetters />
      </Link>
      <div className="hidden lg:flex justify-center">
        <ul className="menu menu-horizontal p-0 my-auto">
          <NavItem title="Início" link="/" currentAddress={currentAddress} />
          <NavItem
            title="Sobre A GK"
            link="/sobre"
            currentAddress={currentAddress}
          />
          <NavItem
            title="Empreendimentos"
            link="/empreendimentos"
            currentAddress={currentAddress}
          />
          <NavItem
            title="Contato"
            link="/contato"
            currentAddress={currentAddress}
          />
          <NavItem
            title="Oportunidades"
            link="/Oportunidades"
            currentAddress={currentAddress}
          />
          <NavItem
            title="Histórico de Obras"
            link="/historico"
            currentAddress={currentAddress}
          />
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
