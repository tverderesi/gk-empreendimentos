import { Apartment, TowerAvailability } from "../Types";
export function availabilityCalc({
  apartments,
}: {
  apartments: Apartment[];
}): TowerAvailability {
  const result: TowerAvailability = {};

  try {
    // Count the number of apartments per tower
    const apartmentCountByTower = countApartmentsPerTower({ apartments });

    apartments.forEach((apartment) => {
      const { tower, availability } = apartment;

      if (!result[tower]) {
        result[tower] = {
          available: 0,
          sold: 0,
          negotiation: 0,
        };
      }

      if (availability === "available") {
        result[tower].available++;
      } else if (availability === "sold") {
        result[tower].sold++;
      } else if (availability === "negotiation") {
        result[tower].negotiation++;
      } else {
        throw new Error(`Invalid availability type: ${availability}`);
      }
    });

    // Check if the total number of apartments in each tower matches the sum of availabilities
    for (const tower in apartmentCountByTower) {
      const count = apartmentCountByTower[tower];
      const availabilityCount =
        result[tower].available +
        result[tower].sold +
        result[tower].negotiation;

      if (count !== availabilityCount) {
        throw new Error(`Mismatch in apartment count for tower ${tower}`);
      }
    }
  } catch (err) {
    console.error("An error occurred during availability calculation:", err);
    throw err; // rethrow the error so it can be handled by the caller
  }

  return result;
}

export type TowerApartmentCounts = {
  [towerName: string]: number;
};

export function countApartmentsPerTower({
  apartments,
}: {
  apartments: { tower: string }[];
}): TowerApartmentCounts {
  const towerCounts: TowerApartmentCounts = {};

  try {
    apartments.forEach((apartment) => {
      if (!towerCounts[apartment.tower]) {
        towerCounts[apartment.tower] = 1;
      } else {
        towerCounts[apartment.tower]++;
      }
    });

    return towerCounts;
  } catch (error) {
    console.error("Error counting apartments per tower:", error);
    return {};
  }
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

export function formatSuites({ suites, demiSuites }): string {
  const suitesText =
    suites > 0 ? `${suites} Suíte${suites > 1 ? "s" : ""}` : "";
  const demiSuitesText =
    demiSuites > 0
      ? `${demiSuites} Demi-Suíte${demiSuites > 1 ? "s" : ""}`
      : "";
  return [suitesText, demiSuitesText].filter(Boolean).join(" + ");
}
