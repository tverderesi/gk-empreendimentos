import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";

import { NotFound } from "../../pages/NotFound";

import { PageLayout } from "../layout/PageLayout";

export function AppRouter() {
  let subdomain = "";

  if (process.env.NODE_ENV === "production") {
    subdomain = "tabelas";
  } else {
    const host = window.location.host;
    subdomain = host.split(".")[0];
  }

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
