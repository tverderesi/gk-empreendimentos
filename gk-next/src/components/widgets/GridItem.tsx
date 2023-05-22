import Logo from "../atoms/Logo";
import slugify from "slugify";
import { GridItemType } from "../../Types";
import Image from "next/image";

export const GridItem: GridItemType = ({
  name,
  imgSrc,
  logoSrc,
  className = "",
}) => {
  const transformedName = name
    .toLowerCase()
    .normalize("NFD")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  const createSlug = (name: string) => {
    return `/empreendimentos/${slugify(name, {
      trim: true,
      lower: true,
    })} `;
  };
  return (
    <a href={createSlug(name)} className={`grid-item ${className}`}>
      {imgSrc ? (
        <div className="absolute top-0   w-full h-full ">
          <Image
            src={imgSrc}
            alt={name}
            className="p-0 absolute  w-full h-full justify-self-center self-center object-cover  rounded-xl drop-shadow-xl"
          />
          <div className=" w-full pt-2 absolute bottom-0 bg-gradient-to-t from-slate-900/90 border-0 to-transparent rounded-xl rounded-t-none">
            <Image src={logoSrc} alt={name} className="mx-auto mb-5  px-5" />
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
    </a>
  );
};
