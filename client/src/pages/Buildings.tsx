import { useState, useEffect } from "react";
import { GridItem } from "../components/widgets/GridItem";
import { Grid } from "../components/widgets/Grid";
import { CustomBuildingBadge } from "../components/atoms/CustomBadge";
import { GKDivider } from "../components/atoms/GKDivider";
import { usePageTitle } from "../utils/webisteUtils";

export function Buildings() {
  const [filter, setFilter] = useState("");
  usePageTitle("Empreendimentos - GK Empreedimentos");

  return (
    <section className="lg:mt-6 mt-6 lg:w-9/12 mx-auto">
      <h1 className="text-2xl lg:text-5xl font-semibold text-white uppercase text-center tracking-widest">
        Empreendimentos
      </h1>
      <GKDivider className="w-11/12 mx-auto mb-10" />

      <BuildingFilter filter={filter} setFilter={setFilter} />
      <Grid className="transition-all duration-500 ease-in-out">
        <FilterManager filter={filter} filteringProp="status">
          <CustomBuildingBadge icon="workspace_premium" status="new">
            <GridItem
              name={"Lumina"}
              link={"/empreendimentos/lumina"}
              imageURL={"lumina.jpg"}
              logoURL={"lumina-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="construction" status="ongoing">
            <GridItem
              name={"Adra"}
              link={"/empreendimentos/adra"}
              imageURL={"adra.jpg"}
              logoURL={"adra-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"Aion"}
              link={"/empreendimentos/aion"}
              imageURL={"aion.png"}
              logoURL={"aion-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"San Diego"}
              link={"/empreendimentos/san-diego"}
              imageURL={"sanDiego.jpg"}
              logoURL={"sanDiego-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"Porto Madero"}
              link={"/empreendimentos/porto-madero"}
              imageURL={"portoMadero.jpg"}
              logoURL={"portoMadero-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"Porto Fino"}
              link={"/empreendimentos/porto-fino"}
              imageURL={"portoFino.jpg"}
              logoURL={"portoFino-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"Varandas do Atlântico"}
              link={"empreendimentos/varandas-do-atlantico"}
              imageURL={"varandasAtlantico.jpg"}
              logoURL={"varandasAtlantico-logo.png"}
            />
          </CustomBuildingBadge>
          <CustomBuildingBadge icon="task_alt" status="sold">
            <GridItem
              name={"Rio Maggiore"}
              link={"empreendimentos/rio-maggiore"}
              imageURL={"rioMaggiore.jpg"}
              logoURL={"rioMaggiore-logo.png"}
            />
          </CustomBuildingBadge>
        </FilterManager>
      </Grid>
    </section>
  );
}

//TODO: Add prop types
//TODO extract component
//TODO: Make component more generic
function BuildingFilter({ filter, setFilter }) {
  const [pressedButton, setPressedButton] = useState(null) as any;

  const handleTouchStart = (event) => {
    setPressedButton(event.target);
  };

  const handleTouchEnd = () => {
    setPressedButton(null);
  };

  const handleTouchMove = (event) => {
    const touchedButton = document
      .elementFromPoint(event.touches[0].clientX, event.touches[0].clientY)
      ?.closest("button");

    if (touchedButton && touchedButton !== pressedButton) {
      setPressedButton(touchedButton);
      setFilter(touchedButton.dataset.filter);
    }
  };

  return (
    <div className="btn-group flex flex-row justify-center w-11/12 mx-auto">
      <button
        className={`btn lg:btn-md btn-sm text-sm no-animation flex items-center ${
          filter === "" &&
          `bg-burgundy-500 hover:bg-burgundy-400 text-white  flex-grow lg:flex-grow-0`
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFilter("");
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        data-filter=""
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="96.000000pt"
          height="96.000000pt"
          viewBox="0 0 96.000000 96.000000"
          preserveAspectRatio="xMidYMid meet"
          className="h-8 w-8 inline-block"
        >
          <g
            transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill="currentcolor"
            stroke="none"
          >
            <path d="M212 669 c-48 -14 -109 -80 -123 -131 -52 -196 172 -338 327 -204 l39 33 -20 37 c-11 20 -22 36 -24 36 -3 0 -21 -16 -41 -35 -45 -44 -93 -54 -143 -30 -104 49 -75 206 41 222 62 8 100 -21 178 -138 37 -55 83 -114 103 -130 95 -78 238 -56 302 48 19 30 24 52 24 103 0 78 -26 127 -88 168 -34 23 -52 27 -108 27 -59 0 -73 -4 -110 -30 -61 -44 -67 -56 -39 -95 l23 -32 16 21 c62 81 176 78 216 -6 49 -103 -56 -207 -159 -158 -26 12 -53 41 -86 89 -91 132 -111 156 -149 182 -44 29 -126 39 -179 23z" />
          </g>
        </svg>

        <span
          className={`${
            !filter ? "" : "hidden lg:block"
          } ml-2 transition-all ease-in-out duration-200`}
        >
          Todos
        </span>
      </button>
      <button
        className={`btn btn-sm lg:btn-md no-animation flex items-center ${
          filter === "new" &&
          `bg-brown-sugar-500 text-white hover:bg-brown-sugar-400  flex-grow lg:flex-grow-0`
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFilter("new");
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        data-filter="new"
      >
        <span
          className={`h-4 w-4 material-symbols-outlined material-symbols-filled inline-block mr-3 relative bottom-1`}
        >
          workspace_premium
        </span>
        <span
          className={`${
            filter === "new" ? "" : "hidden lg:block"
          } ml-2 transition-all ease-in-out duration-200`}
        >
          Lançamentos
        </span>
      </button>
      <button
        className={`btn btn-sm lg:btn-md no-animation flex items-center ${
          filter === "ongoing" &&
          `bg-golden-rod-500 text-white hover:bg-golden-rod-400  flex-grow lg:flex-grow-0`
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFilter("ongoing");
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        data-filter="ongoing"
      >
        <span
          className={`h-4 w-4 material-symbols-outlined material-symbols-filled inline-block mr-3 relative bottom-1`}
        >
          construction
        </span>
        <span
          className={`${
            filter === "ongoing" ? "" : "hidden lg:block"
          } ml-2 transition-all ease-in-out duration-200`}
        >
          Em Andamento
        </span>
      </button>
      <button
        className={`btn btn-sm lg:btn-md no-animation flex items-center ${
          filter === "sold" &&
          `bg-cadet-blue-500 text-white flex-grow lg:flex-grow-0 hover:bg-cadet-blue-400`
        }`}
        onClick={(e) => {
          e.preventDefault();
          setFilter("sold");
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        data-filter="sold"
      >
        <span
          className={`h-4 w-4 material-symbols-outlined material-symbols-filled inline-block mr-3 relative bottom-1`}
        >
          task_alt
        </span>

        <span
          className={`${
            filter === "sold" ? "" : "hidden lg:block"
          } ml-2 transition-all ease-in-out duration-200`}
        >
          Finalizados
        </span>
      </button>
    </div>
  );
}
//TODO: Add prop types
//TODO extract component
export function FilterManager({ children, filter, filteringProp }) {
  const filteredChildren = filter
    ? children.filter((child) => child.props[filteringProp] === filter)
    : children;

  return <>{filteredChildren}</>;
}
