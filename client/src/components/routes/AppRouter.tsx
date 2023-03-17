import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";

import { NotFound } from "../../pages/NotFound";
import ClientHome from "../layout/ClientHome";

import { PageLayout } from "../layout/PageLayout";
import { Building } from "../../pages/Building";

export function AppRouter() {
  if (process.env.NODE_ENV === "production") {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ClientHome />}
            errorElement={<NotFound />}
          />
          <Route
            path="/tabelas"
            element={<PageLayout />}
            errorElement={<NotFound />}
          >
            <Route
              path="/tabelas/"
              element={<Home />}
              errorElement={<NotFound />}
            />
          </Route>
        </Routes>
      </Router>
    );
  } else if (window.location.host.split(".")[0] === "tabelas") {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />} errorElement={<NotFound />}>
            <Route path="/" element={<Home />} errorElement={<NotFound />} />
            <Route
              path="/:link"
              //prettier-ignore
              element={<Building />}
              errorElement={<NotFound />}
            />
            <Route
              path="*"
              element={<NotFound />}
              errorElement={<NotFound />}
            />
          </Route>
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
