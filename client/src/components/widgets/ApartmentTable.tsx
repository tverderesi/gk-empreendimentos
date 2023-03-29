import { Apartment } from "../../Types";

type ApartmentTableProps = {
  apartments: Apartment[];
};

export default function ApartmentTable({ apartments }: ApartmentTableProps) {
  const availableApartments = apartments.filter((apartment) => {
    return apartment.availability === "available";
  });
  return (
    <table className="w-full whitespace-nowrap">
      <thead className="bg-primary-blue-200">
        <tr className="text-white">
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Apartamento
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Área
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Suítes/Demi-suítes
          </th>
          <th className="px-6 py-3 text-lg font-medium text-left uppercase tracking-wider">
            Planta
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200">
        {availableApartments.map((apartment) => (
          <tr key={apartment.apartmentNumber}>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-cadet-blue-400">
              {apartment.apartmentNumber}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              {apartment.area}m²
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              {apartment.suites} suítes + {apartment.demiSuites} demi-suítes
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
              <img
                className="h-12 w-12 rounded-md object-cover"
                src={apartment.blueprintURL}
                alt={`Apartamento ${apartment.apartmentNumber}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
