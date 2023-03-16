import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function GridItem({
  name,
  link,
  imageURL = "",
  logoURL = "",
}: {
  name: any;
  link: any;
  imageURL?: any;
  logoURL?: any;
}) {
  const { dispatch } = useContext(AppContext);

  const handleClick = (e: React.SyntheticEvent) => {
    dispatch({
      type: "GET_LINK",
      payload: e.currentTarget.getAttribute("href")?.slice(1),
    });
  };
  return (
    <Link
      to={`/${link}`}
      className={`transition-all relative col-1 p-3 h-36 w-36 lg:h-72 lg:w-72  bg-cadetblue-600 flex items-center text-primary-content justify-center rounded-xl drop-shadow-lg  text-center`}
      onClick={handleClick}
    >
      {imageURL ? (
        <div className="absolute top-0   w-full h-full ">
          <img
            src={imageURL}
            alt={name}
            className="p-0 absolute  w-full h-full justify-self-center self-center object-cover   rounded-xl drop-shadow-xl"
          />
          <div className="pt-2 absolute bottom-0 bg-gradient-to-t from-slate-900/90 border-0 to-transparent rounded-xl rounded-t-none">
            <img src={logoURL} alt={name} className="w-4/5 mx-auto mb-5 " />
          </div>
        </div>
      ) : (
        <>
          <p className="z-[1] absolute  uppercase text-xl lg:text-4xl tracking-wider lg:leading-relaxed font-semibold px-5">
            {name}
          </p>
          <Logo
            shadow={true}
            className="z-[0] h-[90%] lg:h-auto lg:w-[70%] opacity-10 relative"
          />
        </>
      )}
    </Link>
  );
}
