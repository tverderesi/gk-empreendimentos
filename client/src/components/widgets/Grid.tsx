import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { GridItemType } from "../../../../gk-next/src/Types";

export function Grid({
  children,
  className = "",
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
}) {
  const { menuOpen } = useContext(AppContext);
  return (
    <div
      //prettier-ignore
      className={`overflow-x-hidden flex flex-row items-center justify-center flex-wrap ${menuOpen ? "overflow-y-hidden" : "overflow-y-scroll"}  
      gap-5 py-10 px-5 lg:gap-10 grid-flow-row z-[3] ${className}`}
    >
      {children}
    </div>
  );
}
