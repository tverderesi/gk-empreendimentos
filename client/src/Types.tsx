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
  link,
  imageURL,
  logoURL,
}: {
  name: any;
  link: any;
  imageURL?: any;
  logoURL?: any;
}) => JSX.Element;

export type OverviewImageType = ({
  item: { image, title, logo },
}: {
  item: { image: string; title: string; logo: string };
}) => JSX.Element;
