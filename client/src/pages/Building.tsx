import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { NotFound } from "./NotFound";

export function Building() {
  const { link } = useParams();
  const { population } = useContext(AppContext);

  const hasLink = population.find((building: any) => building.link === link);

  return (
    <>
      {hasLink ? (
        <h1 className="text-white mt-40">Hello, {link}!</h1>
      ) : (
        <NotFound />
      )}
    </>
  );
}
