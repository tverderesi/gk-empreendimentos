export function BackgroundImage({ className }: { className?: string }) {
  return (
    <img
      src={"/media/lumina_overlay.png"}
      className={`object-cover opacity-20 brightness-[30%] fixed bottom-0 h-1/2 ${className}`}
      alt="Edifício Lumina"
    />
  );
}
