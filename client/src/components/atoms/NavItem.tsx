import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export function NavItem({ title, link }: { title: string; link: string }) {
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
