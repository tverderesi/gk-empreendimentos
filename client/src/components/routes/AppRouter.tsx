import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";

import { NotFound } from "../../pages/NotFound";
import Navbar from "../widgets/Navbar";
import { PageLayout } from "../layout/PageLayout";
import GenericRoute from "./GenericRoute";

export function AppRouter() {
  const host = window.location.host;
  const subdomain = host.split(".")[0];
  console.log(typeof subdomain);
  if (subdomain === "tabelas")
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />} errorElement={<NotFound />}>
            <Route path="/" element={<Home />} errorElement={<NotFound />} />
            <Route
              path="*"
              element={<NotFound />}
              errorElement={<NotFound />}
            />
          </Route>
        </Routes>
      </Router>
    );
  else
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
        </Routes>
      </Router>
    );
}
