import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { MobileMenuType } from "~/Types";
import { ItemsList } from "./ItemsList";
import { ElementDropdown } from "../atoms/ElementDropdown";

export const MobileMenu: MobileMenuType = ({
  handleBlur,
  handleClick,
  handleMenuToggle,
}) => {
  const { population, menuOpen } = useContext(AppContext);

  const classes = `${
    menuOpen ? "flex flex-col" : "hidden"
  } overflow-y-scroll bg-eerie-black-900/[0.98] w-screen h-[calc(100vh-6rem)] backdrop-blur-xl bg-blend-overlay blur-fallback 
  items-center absolute top-24 left-0`;
  return (
    <>
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden w-auto"
        onClick={handleMenuToggle}
      >
        <span className="material-symbols-outlined">
          {menuOpen ? <>close</> : <>menu</>}
        </span>
      </label>
      <div className={classes} onBlur={handleBlur}>
        <MobileNavItem title="Início" link="/" handleClick={handleClick} />
        <MobileNavItem
          title="Sobre A GK"
          link="/sobre"
          handleClick={handleClick}
        />
        <MobileNavItem
          title="Empreendimentos"
          link="/empreendimentos"
          handleClick={handleClick}
        />
        <MobileNavItem
          title="Contato"
          link="/contato"
          handleClick={handleClick}
        />
        <MobileNavItem
          title="Oportunidades"
          link="/Oportunidades"
          handleClick={handleClick}
        />
        <MobileNavItem
          title="Histórico de Obras"
          link="/historico"
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

function MobileNavItem({
  handleClick,
  title,
  link,
}: {
  handleClick: () => void;
  title: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="text-2xl pt-10 pb-5 text-white tracking-widest font-medium uppercase"
      onClick={handleClick}
    >
      {title}
    </a>
  );
}

// {population.length > 5 ? (
//   <ElementDropdown population={population} handleClick={handleClick} />
// ) : (
//   <ItemsList population={population} handleClick={handleClick} />
// )}

// <Link
//   to="/tabelas/folders"
//   className="text-2xl py-5 text-white tracking-wider font-light uppercase"
//   onClick={handleClick}
// >
//   Folders e Tabelas
// </Link>
// <Link
//   to="/tabelas/terceiros"
//   className="text-2xl mb-10  pt-5 text-white tracking-wider font-light uppercase"
//   onClick={handleClick}
// >
//   Imóveis de Terceiros
// </Link>
