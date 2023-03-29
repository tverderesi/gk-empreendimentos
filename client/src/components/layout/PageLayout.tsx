import { Outlet } from "react-router-dom";
import { BackgroundImage } from "../atoms/BackgroundImage";

import Navbar from "../widgets/Navbar";

export function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <BackgroundImage />
      </footer>
    </>
  );
}
