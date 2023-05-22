import { useContext } from "react";
import AppContext from "~/context/AppContext";

export function NavItem({
  title,
  link,
  currentAddress,
}: {
  title: string;
  link: string;
  currentAddress: string;
}) {
  // const { dispatch } = useContext(AppContext);
  const handleClick = () => {
    // dispatch({ type: "CLOSE_MENU" });
  };

  return (
    <li>
      <a
        href={link}
        className={`btn btn-ghost ${
          currentAddress === link ? "btn-primary" : "btn-ghost-primary"
        } rounded-lg uppercase  tracking-widest font-medium mx-2 px-2 py-1 my-auto`}
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
}
