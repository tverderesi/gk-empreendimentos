export default function Logo({ className = "", shadow = false }) {
  return (
    <>
      <img
        src={shadow ? `/logos/logo_shadow.png` : `/logos/logo.png`}
        alt="GK Empreendimentos"
        className={className}
      />
    </>
  );
}
