import Image from "next/image";

export function BackgroundImage({ className = "" }: { className?: string }) {
  return (
    <Image
      src={`/media/lumina_overlay.png`}
      className={`object-cover opacity-20 brightness-[30%] absolute bottom-0 h-[50vh] left-0 -z-10 ${className}`}
      alt="Edifício Lumina"
      fill
    />
  );
}
