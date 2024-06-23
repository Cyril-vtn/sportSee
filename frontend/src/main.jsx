import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "./Layout";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/:id"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {/* <Route index element={<App />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
