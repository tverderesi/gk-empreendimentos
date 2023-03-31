import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import { NotFound } from "../pages/NotFound";
import ClientHome from "../components/layout/ClientHome";

import { PageLayout } from "../components/layout/PageLayout";
import { Building } from "../pages/Building";
import { ThirdParty } from "../pages/ThirdParty";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientHome />} errorElement={<NotFound />} />
        <Route
          path="/tabelas"
          element={<PageLayout />}
          errorElement={<NotFound />}
        >
          <Route
            path="/tabelas/terceiros"
            element={<ThirdParty />}
            errorElement={<NotFound />}
          />
          <Route
            path="/tabelas/"
            element={<Home />}
            errorElement={<NotFound />}
          />
          <Route
            path="/tabelas/:link"
            //prettier-ignore
            element={<Building />}
            errorElement={<NotFound />}
          />

          <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
      </Routes>
    </Router>
  );
}
