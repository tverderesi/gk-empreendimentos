import { CarouselImage } from "~/Types";

export default function useLeftScroll(
  items: any[]
): (idx: number, direction: "left" | "right") => void {
  return (idx, direction) => {
    const container = document.getElementById("carousel");
    const targetId =
      direction === "left"
        ? `slide${idx === 0 ? items.length : idx}`
        : `slide${idx + 1 === items.length ? 1 : idx + 2}`;

    const targetElement = document.getElementById(targetId)?.offsetLeft;

    container?.scrollTo(targetElement ? targetElement : 0, 0);
  };
}
