import BuildingLayout from "../layout/BuildingLayout";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import Availability from "../widgets/Availability";
import OverviewImage from "../widgets/OverviewImage";

export default function GenericRoute({ param }: { param: any }) {
  const { population } = useContext(AppContext);

  const getItem = (population: any) => {
    for (let i = 0; i < population.length; i++) {
      if (population[i].link === param) {
        const item = population[i];
        return item;
      }
    }
  };

  const item = getItem(population);

  return item.building ? <Building item={item} /> : <p>Hello Worlde</p>;
}

export function Building({ item }: { item: any }) {
  const { shape } = item;

  const [tower, setTower] = useState(1);
  return (
    <BuildingLayout>
      <div className="flex flex-col items-center min-w-[100vw] justify-start min-h-[calc(100vh-6rem)] 0 lg:mt-10">
        <section
          key="OverviewCard"
          className=" w-screen lg:w-[98vw] min-h-[calc(100vh-6rem)]  lg:min-h-0 lg:h-full p-2 lg:p-4 lg:rounded-xl lg:drop-shadow-2xl  bg-[#1a1a1a] z-[5] flex flex-col lg:flex-row items-center "
        >
          {OverviewImage(item)}
          <div
            key="generalInfo"
            className="lg:ml-5 h-auto my-2 lg:my-0 lg:h-full w-full lg:w-1/4 items-center justify-center flex flex-col"
          >
            <div className="flex flex-col justify-between h-[31.5vh]">
              <div>
                <p className=" text-md lg:text-xl my-2 text-cadetblue-300 uppercase font-semibold tracking-wider">
                  Previsão de Entrega
                </p>
                <p className="text-lg lg:text-xl text-white  font-medium tracking-wider">
                  Outubro/2025
                </p>
              </div>

              <div>
                <p className="text-lg lg:text-xl  text-cadetblue-300 uppercase font-semibold tracking-wider">
                  Endereço
                </p>
                <p className="text-lg lg:text-xl w-full text-white  font-medium tracking-wider my-2">
                  Av. Leopoldo Zarling, 1890, Bombas, Bombinhas – SC
                </p>
              </div>
            </div>
          </div>
          <div className="divider mt-0 mx-0 lg:mx-0 lg:divider-horizontal"></div>
          <div className="w-full lg:w-1/2 h-auto lg:h-full">
            <div className="flex flex-col w-full px-2">
              <div className="flex items-center justify-start flex-wrap ">
                <div className=" w-[98vw] lg:w-auto text-left  h-full font-semibold text-lg lg:text-2xl uppercase tracking-wide  text-cadetblue-300">
                  Unidades
                </div>
                {shape.map((towers: any, i: number) => {
                  return (
                    <button
                      className={`btn btn-ghost lg:ml-3 ${
                        tower === i ? "text-cadetblue-400" : ""
                      }  text-md lg:text-lg font-medium tracking-wide uppercase`}
                      onClick={() => {
                        setTower(i);
                      }}
                    >
                      {towers.title}
                    </button>
                  );
                })}
              </div>

              <Availability availability={shape[tower]?.availability} />
            </div>
          </div>
        </section>
      </div>
    </BuildingLayout>
  );
}
