import { OverviewImageType } from "../../Types";

export const OverviewImage: OverviewImageType = ({
  item: { image, title, logo },
  className = "",
}) => {
  console.log(process.env);
  return (
    <div
      key="overviewCardImage"
      className={`relative md:w-1/4 z-[2] rounded-xl flex flex-col self-center align-center drop-shadow-xl outline outline-1 outline-slate-900 ${className}`}
    >
      <img alt={`${title}`} className=" object-cover z-[1] rounded-xl " />

      <div className="h-full relative z-[3]">
        <div className="absolute bottom-0 w-[100%] bg-gradient-to-t from-slate-900/100 to-transparent rounded-lg rounded-t-none">
          <img
            src={`${logo}`}
            alt={`${title}`}
            className="object-cover w-[80%] mb-4 lg:mb-5 mx-auto "
          />
        </div>
      </div>
    </div>
  );
};
