import { availabilityCalc, totalApts } from "../../utils/buildingUtils";

export function Availability({ building }) {
  const towerAvailabilities = availabilityCalc(building);
  const towerApartments = totalApts(building);
  console.log(towerApartments);
  return (
    <>
      {towerApartments.map((tower, idx) => {
        const soldWidth = `${
          (towerAvailabilities[idx].sold / tower.totalApartments) * 100
        }%`;
        const negotiationWidth = `${
          (towerAvailabilities[idx].negotiation / tower.totalApartments) * 100
        }%`;
        const availableWidth = `${
          (towerAvailabilities[idx].available / tower.totalApartments) * 100
        }%`;

        return (
          <div className="my-2">
            <h3 className="font-semibold text-lg uppercase tracking-wide  text-cadetblue-300">
              {tower.name}
            </h3>
            <div className="w-full h-4 my-2 bg-slate-500 rounded-lg flex items-center">
              <div
                className={`${soldWidth} bg-red-600 h-full rounded-l-lg text-center flex items-center font-bold text-white justify-center`}
                style={{ width: soldWidth }}
              />
              <div
                className={`${negotiationWidth} bg-yellow-600 h-full text-center flex items-center font-bold text-white justify-center`}
                style={{ width: negotiationWidth }}
              />
              <div
                className={`${availableWidth} bg-green-600 h-full text-center flex items-center rounded-r-xl font-bold text-white justify-center`}
                style={{ width: availableWidth }}
              />
            </div>
            <div className="text-lg uppercase tracking-wide flex flex-col md:flex-row justify-between">
              <span className="text-red-600">
                <span className="text-3xl mr-2 ">
                  {towerAvailabilities[idx].sold}
                </span>
                Vendidos
              </span>
              <span className="text-yellow-600">
                <span className="text-3xl mr-2">
                  {towerAvailabilities[idx].negotiation}
                </span>
                em Negociação
              </span>
              <span className="text-green-600">
                <span className="text-3xl mr-2">
                  {towerAvailabilities[idx].available}
                </span>
                Disponíveis
              </span>
            </div>
          </div>
        );
      })}
    </>

    // <div className="flex lg:ml-[-16px] lg:mt-4 h-full my-auto  items-center  text-medium tracking-wide">
    //   <div className="w-4/5 ml-3 flex flex-col justify-center h-full">
    //     <p className="text-green-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
    //       <span className="lg:text-3xl font-black">{available}%</span> Em
    //       Negociação
    //     </p>
    //     <p className="text-green-500 text-md font-light lg:text-xl  lg:mb-4">
    //       <span className="lg:text-2xl font-black"></span> Unidades
    //     </p>
    //     <p className="text-yellow-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
    //       <span className="lg:text-3xl font-black">{negotiation}%</span> Em
    //       Negociação
    //     </p>
    //     <p className="text-yellow-500 text-md font-light lg:text-xl lg:mb-4">
    //       <span className="lg:text-2xl font-black"></span> Unidades
    //     </p>
    //     <p className="text-red-500 text-md font-light lg:text-xl mt-2 lg:mt-4">
    //       <span className="lg:text-3xl font-black">%</span> Indisponíveis
    //     </p>
    //     <p className="text-red-500 text-md font-light lg:text-xl lg:mb-4">
    //       <span className="lg:text-2xl font-black"></span> Unidades
    //     </p>
    //   </div>
    // </div>
  );
}
