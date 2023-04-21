import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TableHome } from "../pages/TableHome";

import { NotFound } from "../pages/NotFound";

import { PageLayout } from "../components/layout/PageLayout";
import { BuildingTable } from "../pages/BuildingTable";
import { ThirdParty } from "../pages/ThirdParty";
import { About } from "../pages/About";
import Home from "../pages/Home";
import { Buildings } from "../pages/Buildings";
import { Building } from "../pages/Building";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />} errorElement={<NotFound />}>
          <Route path="/" element={<Home />} errorElement={<NotFound />} />
          <Route
            path="/sobre"
            element={<About />}
            errorElement={<NotFound />}
          />
          <Route
            path="/empreendimentos"
            element={<Buildings />}
            errorElement={<NotFound />}
          />
          <Route
            path="/empreendimentos/:buildingName"
            element={<Building />}
            errorElement={<NotFound />}
          />
        </Route>

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
            element={<TableHome />}
            errorElement={<NotFound />}
          />
          <Route
            path="/tabelas/:link"
            //prettier-ignore
            element={<BuildingTable />}
            errorElement={<NotFound />}
          />

          <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
      </Routes>
    </Router>
  );
}
