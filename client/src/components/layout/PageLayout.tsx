import { Outlet } from "react-router-dom";
import { BackgroundImage } from "../atoms/BackgroundImage";

import { Footer } from "../atoms/Footer";
import { Navbar } from "../widgets/Navbar";

export function PageLayout() {
  return (
    <div className="pt-24 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden overflow-y-scroll w-screen min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-10.5rem)]">
        <Outlet />
      </main>
      <Footer />
      <BackgroundImage />
    </div>
  );
}
