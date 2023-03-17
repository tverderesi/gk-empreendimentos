import { useState } from "react";
import { DropdownType } from "../../Types";
import { ItemsList } from "../widgets/ItemsList";

export const ElementDropdown: DropdownType = ({ population, handleClick }) => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <>
      <div
        className="text-2xl uppercase py-5 text-white tracking-wider font-light flex flex-row items-center"
        onClick={(e) => {
          e.preventDefault();
          setDropOpen(!dropOpen);
        }}
      >
        Empreendimentos
        <svg
          className={`ml-2 fill-current transition-all ${
            dropOpen ? "state-rotate" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
      <div className={`${dropOpen ? "" : "hidden"} flex flex-col items-center`}>
        <ItemsList population={population} handleClick={handleClick} />
      </div>
    </>
  );
};
