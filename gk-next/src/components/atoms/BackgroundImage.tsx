import lumina_overlay from "~/assets/media/lumina_overlay.png";
import Image from "next/image";

export function BackgroundImage() {
  return (
    <Image
      src={lumina_overlay}
      className="opacity-20 brightness-[30%] fixed bottom-0 left-0 w-[100vw] h-[calc(100vw/1.876)] lg:w-[75vw] lg:h-[calc(75vw/1.876)] -z-10"
      alt="Edifício Lumina"
    />
  );
}
