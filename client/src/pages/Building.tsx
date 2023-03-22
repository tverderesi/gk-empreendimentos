import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { OverviewImage } from "../components/atoms/OverviewImage";
import AppContext from "../context/AppContext";
import { getGoogleMapsLink, getMonthYear } from "../utils/buildingUtils";
import { InfoPanel } from "../components/atoms/InfoPanel";
import { NotFound } from "./NotFound";
import { Availability } from "../components/widgets/Availability";

export function Building() {
  const { link } = useParams();
  const { population } = useContext(AppContext);

  const building = population.find((building: any) => building.link === link);

  return (
    <>
      {building ? (
        <section
          key="OverviewCard"
          className="relative top-24 md:top-28 w-full md:w-11/12 md:rounded-xl mx-auto bg-[#1a1a1a] z-10 flex flex-col md:flex-row p-4 md:shadow-xl"
        >
          <OverviewImage item={building} />
          <section
            key="generalInfo"
            className="lg:ml-5 mt-2.5 lg:mt-0  h-full justify-between self-center w-full md:w-1/4 flex flex-col"
          >
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
                  <span className="material-symbols-outlined relative top-1 mr-1 inline">
                    pin_drop
                  </span>
                </a>
              </>
            </InfoPanel>
          </section>
          <div className="divider mt-0 mx-0 lg:mx-0 lg:divider-horizontal" />
          <section className="w-full lg:w-1/2 h-auto lg:h-full px-2">
            <div className="font-semibold text-lg lg:text-2xl uppercase tracking-wide  text-cadetblue-300">
              Disponibilidade
            </div>
            <div className="flex flex-col w-full px-2">
              <Availability building={building} />
            </div>
          </section>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
}
