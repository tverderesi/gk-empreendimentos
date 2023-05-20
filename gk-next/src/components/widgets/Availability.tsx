import {
  availabilityCalc,
  countApartmentsPerTower,
} from "../../utils/buildingUtils";

export function Availability({ building }) {
  const towerApartments = countApartmentsPerTower(building);
  const towerAvailabilities = availabilityCalc(building);

  return (
    <>
      {Object.entries(towerApartments).map(([tower, totalApartments], idx) => {
        const soldWidth = `${
          (towerAvailabilities[tower].sold / totalApartments) * 100
        }%`;
        const negotiationWidth = `${
          (towerAvailabilities[tower].negotiation / totalApartments) * 100
        }%`;
        const availableWidth = `${
          (towerAvailabilities[tower].available / totalApartments) * 100
        }%`;

        return (
          <div key={`tower-${idx}`} className="my-2">
            <h3 className="font-semibold text-xl pb-2 uppercase tracking-wide  text-cadet-blue-200">
              Torre {tower}
            </h3>
            <div className="w-full h-2 md:h-4 my-2.5 bg-slate-500 rounded-lg flex items-center">
              <div
                className={`${soldWidth} bg-brown-sugar-600 h-full rounded-l-lg text-center flex items-center font-bold text-white justify-center`}
                style={{ width: soldWidth }}
              />
              <div
                className={`${negotiationWidth} bg-golden-rod-600 h-full text-center flex items-center font-bold text-white justify-center`}
                style={{ width: negotiationWidth }}
              />
              <div
                className={`${availableWidth} bg-cadet-blue-600 h-full text-center flex items-center rounded-r-xl font-bold text-white justify-center`}
                style={{ width: availableWidth }}
              />
            </div>
            <div className="text-base md:text-lg uppercase tracking-wide flex flex-wrap md:flex-nowrap justify-between">
              <span className="text-brown-sugar-600">
                <span className="text-2xl md:text-3xl mr-2 ">
                  {towerAvailabilities[tower].sold}
                </span>
                Vendidos
              </span>
              <span className="text-golden-rod-600">
                <span className="text-2xl md:text-3xl mr-2">
                  {towerAvailabilities[tower].negotiation}
                </span>
                em Negociação
              </span>
              <span className="text-cadet-blue-600">
                <span className="text-2xl md:text-3xl mr-2">
                  {towerAvailabilities[tower].available}
                </span>
                Disponíveis
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
