import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { GridItemType } from "../../Types";
// test
export default function Grid({
  children,
}: {
  children: React.ReactElement<GridItemType>[];
}) {
  const { menuOpen } = useContext(AppContext);
  return (
    <div
      //prettier-ignore
      className={`overflow-x-hidden flex flex-row items-center justify-center flex-wrap ${menuOpen ? "overflow-y-hidden" : "overflow-y-scroll"}  
      gap-5 py-10 px-5 lg:gap-10 grid-flow-row z-[3]`}
    >
      {children}
    </div>
  );
}
