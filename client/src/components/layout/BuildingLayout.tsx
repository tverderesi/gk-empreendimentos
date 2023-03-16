import Navbar from "../widgets/Navbar";

export default function BuildingLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <main className="flex my-auto min-h-[calc(100vh-6rem)]">{children}</main>
    </>
  );
}
