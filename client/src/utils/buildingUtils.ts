export function availabilityCalc(
  building
): { id: string; sold: number; negotiation: number; available: number }[] {
  let towerAvailabilities = [] as any;
  try {
    building.towers.forEach(({ id, name, floors }) => {
      let sold = 0;
      let negotiation = 0;
      let available = 0;
      floors.forEach(({ apartmentAvailability }) => {
        apartmentAvailability.forEach(({ availability }) => {
          switch (availability) {
            case "sold":
              sold++;
              break;
            case "negotiation":
              negotiation++;
              break;
            case "available":
              available++;
              break;
            default:
              throw new Error("Invalid Availability option.");
          }
        });
      });
      towerAvailabilities.push({
        id: id,
        name: name,
        sold: sold,
        negotiation: negotiation,
        available: available,
      });
    });
  } catch (error) {
    console.error(error);
  }

  return towerAvailabilities;
}

export function totalApts(
  building
): { id: string; totalApartments: number; name: string }[] {
  let towerApartments = [] as any;
  try {
    building.towers.forEach(({ id, name, floors }) => {
      let totalApartments = 0;
      floors.forEach(({ apartmentAvailability }) => {
        totalApartments += apartmentAvailability.length;
      });
      towerApartments.push({
        id: id,
        name: name,
        totalApartments: totalApartments,
      });
    });
  } catch (error) {
    console.error(error);
  }

  return towerApartments;
}

export function getMonthYear({ deadline }: { deadline: string }): string {
  const deadlineDt = new Date(deadline);
  const gmtMinusThreeDt = new Date(deadlineDt.valueOf() - 180 * 60 * 1000); // convert to GMT-3
  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const month = monthNames[gmtMinusThreeDt.getMonth()];
  const year = gmtMinusThreeDt.getFullYear();
  return `${month}/${year}`;
}

export function getGoogleMapsLink({ address }: { address: string }) {
  address = address.replace(" ", "+");
  return `https://www.google.com/maps/search/?api=1&query=${address}`;
}
