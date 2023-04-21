import { Outlet } from "react-router-dom";
import { BackgroundImage } from "../atoms/BackgroundImage";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Footer } from "../atoms/Footer";
import { Navbar } from "../widgets/Navbar";

export function PageLayout() {
  const { menuOpen } = useContext(AppContext);
  return (
    <div
      className={`pt-24 h-screen ${
        menuOpen ? "overflow-y-clip" : "overflow-y-scroll"
      }  scroll-snap scroll-snap-center w-screen`}
    >
      <Navbar />
      <main className="relative  w-screen min-h-[calc(100vh-6rem)]">
        <Outlet />
        <BackgroundImage />
      </main>

      <Footer />
    </div>
  );
}
