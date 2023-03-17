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
