import { Outlet } from "react-router-dom";
import { BackgroundImage } from "../atoms/BackgroundImage";

import Navbar from "../widgets/Navbar";
import { Footer } from "../atoms/Footer";

export function PageLayout() {
  return (
    <div className="pt-24 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden overflow-y-scroll w-screen min-h-[calc(100vh-22rem)] md:min-h-[calc(100vh-12rem)]">
        <Outlet />
      </main>
      <Footer />
      <BackgroundImage />
    </div>
  );
}
