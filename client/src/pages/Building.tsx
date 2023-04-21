import { useParams, useNavigate } from "react-router-dom";
import { usePageTitle } from "../utils/webisteUtils";
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
    return (
      <section className="flex flex-col items">
        <BackButton />
        <article className="pt-16">
          <div className="h-52 lg:h-96 relative">
            <img
              src={`../buildings/${building.title}/${building.title}.jpg`}
              alt={building.title}
              className="-mt-16 w-full h-52 lg:h-96 object-cover"
            />
            <h1 className="w-full text-center text-6xl font-semibold uppercase tracking-wider text-white absolute bottom-0 bg-gradient-to-t from-slate-900/50">
              {building.title}
            </h1>
          </div>
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
