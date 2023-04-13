import { Outlet } from "react-router-dom";
import { BackgroundImage } from "../atoms/BackgroundImage";

import Navbar from "../widgets/Navbar";

export function PageLayout() {
  return (
    <div className="pt-24 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden overflow-y-scroll w-screen min-h-[calc(100vh-12rem)]">
        <Outlet />
      </main>
      <footer className="custom-footer">
        <p className="mx-auto w-full">
          Av. Vereador Manoel José dos Santos, 1.310, Sala 14, Bombinhas - SC
          <span className="block sm:inline">
            gkengenharia@gmail.com (47)3264-0018
          </span>
        </p>
      </footer>
      <BackgroundImage />
    </div>
  );
}
