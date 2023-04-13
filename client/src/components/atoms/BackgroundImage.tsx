export function BackgroundImage({ className }: { className?: string }) {
  return (
    <img
      src={"/media/lumina_overlay.png"}
      className={`object-cover opacity-20 brightness-[30%] absolute bottom-0 h-[50vh] left-0 ${className} -z-10`}
      alt="Edifício Lumina"
    />
  );
}
