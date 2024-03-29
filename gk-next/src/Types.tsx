import { StaticImageData } from "next/image";

export type DropdownType = ({
  population,
  handleClick,
}: {
  population: any;
  handleClick: any;
}) => JSX.Element;

export type MobileMenuType = ({
  handleBlur,
  handleClick,
  handleMenuToggle,
}: {
  handleBlur: () => void;
  handleClick: () => void;
  handleMenuToggle: () => void;
}) => JSX.Element;

export type ItemsListType = ({
  population,
  handleClick,
}: {
  population: any;
  handleClick: any;
}) => JSX.Element;

export type GridItemType = ({
  name,
  imgSrc,
  logoSrc,
  className,
}: {
  name: string;
  imgSrc: StaticImageData;
  logoSrc: StaticImageData;
  className?: string;
}) => JSX.Element;

export type OverviewImageType = ({
  item: { image, title, logo },
  className,
}: {
  item: { image: string; title: string; logo: string };
  className?: string;
}) => JSX.Element;

export type Apartment = {
  ID: string;
  tower: string;
  floor: string;
  apartmentNumber?: string;
  availability: string;
  area: string;
  suites: string;
  demiSuites: string;
  blueprintURL: string;
  price: string;
};

export type TowerAvailability = {
  [tower: string]: { [availability: string]: number };
};

export interface Building {
  building: boolean;
  title: string;
  link: string;
  image: string;
  logo: string;
  address: string;
  deadline: string;
  apartments: Apartment[];
}

export type TowerApartmentCounts = Record<string, number>;

export type CarouselImage = {
  src: StaticImageData;
  alt: string;
  title?: string | undefined;
  text?: string | undefined;
  link?: string | undefined;
};
