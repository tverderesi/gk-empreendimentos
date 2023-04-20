import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { GridItemType } from "../../Types";

export const GridItem: GridItemType = ({
  name,
  link,
  imageURL = "",
  logoURL = "",
  className = "",
}) => {
  const transformedName = name
    .toLowerCase()
    .normalize("NFD")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return (
    <Link to={`${link}`} className={`grid-item ${className}`}>
      {imageURL ? (
        <div className="absolute top-0   w-full h-full ">
          <img
            src={`/buildings/${transformedName}/${imageURL}`}
            alt={name}
            className="p-0 absolute  w-full h-full justify-self-center self-center object-cover  rounded-xl drop-shadow-xl"
          />
          <div className="pt-2 absolute bottom-0 bg-gradient-to-t from-slate-900/90 border-0 to-transparent rounded-xl rounded-t-none">
            <img
              src={`/buildings/${transformedName}/${logoURL}`}
              alt={name}
              className="w-full mx-auto mb-5  px-5"
            />
          </div>
        </div>
      ) : (
        <>
          <p className="z-[1] absolute  uppercase text-xl md:text-3xl lg:text-4xl tracking-wider lg:leading-relaxed font-semibold px-5">
            {name}
          </p>
          <Logo shadow={true} className="z-[0] p-6 opacity-10 relative" />
        </>
      )}
    </Link>
  );
};
