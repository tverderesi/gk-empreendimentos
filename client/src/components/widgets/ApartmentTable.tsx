import { Apartment } from "../../Types";
import { useState } from "react";
type ApartmentTableProps = {
  apartments: Apartment[];
};

export default function ApartmentTable({ apartments }: ApartmentTableProps) {
  const availableApartments = apartments.filter((apartment) => {
    return apartment.availability !== "sold";
  });
  return (
    <table className="w-full whitespace-nowrap">
      <thead className="bg-primary-blue-200">
        <tr className="text-white">
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Apartamento
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Preço
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Área
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Quartos
          </th>

          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Planta
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200">
        {availableApartments.map((apartment) => (
          <tr key={apartment.apartmentNumber}>
            <td
              className={`"px-6 py-4 whitespace-nowrap text-lg font-medium ${
                apartment.availability === "available"
                  ? "text-cadet-blue-400"
                  : "text-golden-rod-400"
              }`}
            >
              {apartment.apartmentNumber}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              R$ {""}
              {Number(apartment.price)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                .replace(".", ",")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              {apartment.area} {""}m²
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white tracking-wider">
              {apartment.suites} suítes
              {apartment.demiSuites !== "0"
                ? ` + ${apartment.demiSuites} demi-suítes`
                : ""}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              <ApartmentImage apartment={apartment} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ApartmentImage({ apartment }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div onClick={handleClick}>
        <img
          className="h-12 w-12 rounded-md object-cover"
          src={apartment.blueprintURL}
          alt={`Apartamento ${apartment.apartmentNumber}`}
        />
      </div>

      {modalOpen && (
        <div
          className="fixed z-20 inset-0 overflow-y-auto mt-24  lg:mt-28 mx-2 transition-all p-4"
          onClick={handleCloseModal}
        >
          <div className="flex items-center justify-center">
            <div className="bg-[hsl(219,18%,15%)] w-full md:w-1/2 max-h-full p-4 rounded-2xl drop-shadow-2xl">
              <img
                className="mx-auto max-h-full rounded-2xl"
                src={apartment.blueprintURL}
                alt={`Apartamento ${apartment.apartmentNumber}`}
              />
              <button className="fixed top-2 right-2 z-50">
                <span
                  className="material-symbols-outlined material-symbols-outline-override bg-primary text-white rounded-full p-2 shadow-md"
                  onClick={handleCloseModal}
                >
                  close
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
