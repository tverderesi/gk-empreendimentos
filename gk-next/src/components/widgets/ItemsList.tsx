import Link from "next/link";
import { ItemsListType } from "../../Types";

export const ItemsList: ItemsListType = ({ population, handleClick }) => {
  return (
    <>
      {population.map((item: any) => {
        return (
          <Link
            key={item.link}
            href={`/${item.link}`}
            className="text-2xl uppercase py-5 text-white tracking-wider font-light"
            onClick={handleClick}
          >
            {item.title}
          </Link>
        );
      })}
    </>
  );
};
