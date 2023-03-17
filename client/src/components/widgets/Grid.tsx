import { useContext } from "react";
import AppContext from "../../context/AppContext";
import GridItem from "./GridItem";

export default function Grid({ population }: { population: any }) {
  const { menuOpen } = useContext(AppContext);
  return (
    <div
      //prettier-ignore
      className={`overflow-x-hidden flex flex-row items-center justify-center flex-wrap ${menuOpen ? "overflow-y-hidden" : "overflow-y-scroll"}  
      gap-5 py-10 px-5 lg:gap-10 grid-flow-row z-[3]`}
    >
      {population.map((item: any) => {
        return (
          <GridItem
            name={item.title}
            link={item.link}
            imageURL={item.image}
            logoURL={item.logo}
          />
        );
      })}
    </div>
  );
}
