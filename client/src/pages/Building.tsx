import { useParams, useNavigate } from "react-router-dom";
import { splitString, usePageTitle } from "../utils/webisteUtils";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { NotFound } from "./NotFound";

export function Building() {
  const { buildingName } = useParams();
  const { buildings } = useContext(AppContext);

  const [building] = buildings.filter(
    (building) => building.title === buildingName
  );

  usePageTitle(
    `${
      buildingName
        ? buildingName.charAt(0)?.toUpperCase() + buildingName?.slice(1) + " - "
        : ""
    }GK Empreedimentos`
  );
  if (building) {
    // const separetedText = splitString(building.description, "\n");
    const text = [building.description];
    return (
      <section className="flex flex-col items">
        <BackButton />
        <article className="pt-16">
          <figure className="h-52 lg:h-96 relative">
            <img
              src={`../buildings/${building.title}/${building.title}.jpg`}
              alt={building.title}
              className="-mt-16 w-full h-52 lg:h-96 object-cover"
            />
            <div className="w-full text-center font-semibold uppercase tracking-wider text-white absolute bottom-0 bg-gradient-to-t from-slate-900/80 py-2">
              <h1 className="text-6xl mb-1">{building.title}</h1>
              <h2 className="text-xl">{building.tagLine}</h2>
            </div>
          </figure>
          <section className="text-white p-6">
            <h3 className="text-2xl uppercase tracking-wide font-bold text-center">
              O empreendimento
            </h3>

            <div className="prose text-white text-justify text-lg py-5 snap-y snap-mandatory">
              {text}
            </div>
          </section>
          <section className="text-white p-6">
            <h3 className="text-2xl uppercase tracking-wide font-bold text-center">
              Diferenciais
            </h3>
            <ul>
              {building.features.map((feature, index) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </section>
        </article>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col items-center justify-center">
        <BackButton />
        <NotFound />
      </section>
    );
  }
}

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-square z-[99] btn-md btn-primary rounded-full  absolute top-3 left-3 drop-shadow-lg"
    >
      <span className="material-symbols-outlined">arrow_back</span>{" "}
    </button>
  );
}
