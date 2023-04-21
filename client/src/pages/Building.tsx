import { useParams, useNavigate } from "react-router-dom";
import { usePageTitle } from "../utils/webisteUtils";

export function Building() {
  const { building } = useParams();
  usePageTitle(
    `${
      building
        ? building.charAt(0).toUpperCase() + building?.slice(1) + " - "
        : ""
    }GK Empreedimentos`
  );
  return (
    <div>
      <BackButton /> {building} Building
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <button onClick={handleClick}>Back</button>;
}
