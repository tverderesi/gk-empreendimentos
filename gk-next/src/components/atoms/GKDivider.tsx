import Logo from "./Logo";

export function GKDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`divider before:bg-white after:bg-white ${className}`}>
      <Logo className="h-8" />
    </div>
  );
}
