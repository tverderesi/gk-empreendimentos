import { useContext } from "react";
import { useParams } from "react-router-dom";
import { OverviewImage } from "../components/atoms/OverviewImage";
import AppContext from "../context/AppContext";
import { getGoogleMapsLink, getMonthYear } from "../utils/buildingUtils";
import { InfoPanel } from "../components/atoms/InfoPanel";
import { NotFound } from "./NotFound";
import { Availability } from "../components/widgets/Availability";
import ApartmentTable from "../components/widgets/ApartmentTable";

export function BuildingTable() {
  const { link } = useParams();
  const { population } = useContext(AppContext);

  const building = population.find((building: any) => building.link === link);

  return (
    <>
      {building ? (
        <div className="pb-28">
          <section
            key="OverviewCard"
            className="relative top-24 md:top-28 w-full md:w-11/12 md:rounded-xl mx-auto bg-[#1a1a1a] z-10 flex flex-col lg:flex-row p-4 md:shadow-xl"
          >
            <section
              key="generalInfo"
              className=" lg:mt-0 flex flex-col md:flex-row w-full lg:w-1/2 h-full justify-between self-center"
            >
              <OverviewImage
                item={building}
                className={"flex-grow lg:w-1/2 lg:flex-grow-0"}
              />
              <div className="w-full md:w-1/2 lg:w-1/3 lg:ml-5 mt-2.5 py-2.5 self-center justify-self-start ml-0 flex-grow-0 px-2.5 lg:flex-grow">
                <InfoPanel>
                  Previsão de Entrega
                  {getMonthYear(building)}
                </InfoPanel>
                <InfoPanel>
                  Endereço
                  <>
                    {building.address}
                    <a
                      href={getGoogleMapsLink(building)}
                      className="inline  hover:text-primary"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined relative top-1 mr-1 inline text-primary">
                        pin_drop
                      </span>
                    </a>
                  </>
                </InfoPanel>
              </div>
            </section>

            <div className="divider mt-0 mx-0 lg:mx-0 md:divider-vertical lg:divider-horizontal" />
            <section className="w-full lg:w-1/2 h-auto lg:h-full px-2 ">
              <div className="flex flex-col p-2">
                <h2 className="text-2xl font-semibold uppercase tracking-wider mb-2">
                  Disponibilidade
                </h2>
                <Availability building={building} />
              </div>
            </section>
          </section>
          <section className="relative top-24 md:top-28 w-full md:mt-4 md:w-11/12 md:rounded-xl mx-auto bg-[#1a1a1a] z-10 flex flex-col lg:flex-row p-4 md:shadow-xl mb-3 overflow-x-scroll">
            <ApartmentTable apartments={building.apartments} />
          </section>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
