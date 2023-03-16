import { useContext } from "react";
import AppContext from "../../context/AppContext";
import GridItem from "./GridItem";

export default function Grid({ population }: { population: any }) {
  const { menuOpen } = useContext(AppContext);
  return (
    <div
      className={`grid gap-5 overflow-x-hidden items-center
 ${
   menuOpen ? "overflow-y-hidden" : "overflow-y-scroll"
 } grid-cols-[9rem_9rem] py-10 lg:grid-cols-3 lg:gap-10 grid-flow-row z-[3]`}
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
