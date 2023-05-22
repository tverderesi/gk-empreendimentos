import { BackgroundImage } from "~/components/atoms/BackgroundImage";
import { Footer } from "~/components/widgets/Footer";
import { Navbar } from "~/components/widgets/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 overflow-y-auto relative h-auto  w-screen min-h-[calc(100vh-6rem)]">
        {children}
      </main>
      <Footer />
      <BackgroundImage />
    </>
  );
}
