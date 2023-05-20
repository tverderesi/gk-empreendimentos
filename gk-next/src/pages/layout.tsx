import { Navbar } from "~/components/widgets/Navbar";

export const metadata = {
  title: "GK Empreendimentos",
  description: "GK Empreendimentos - SC - Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
