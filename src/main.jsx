import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import EventCards from "./components/EventCards";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="evraklar" element={<Main />}>
            <Route index element={<Navigate to="duzenlenenler" />} />
            <Route path="duzenlenenler" element={<EventCards />} />
            <Route path="onay-bekleyenler" element={<EventCards />} />
            <Route path="onaylanmis" element={<EventCards />} />
          </Route>
          <Route path="etkinlikler" element={<Main />}>
            <Route index element={<Navigate to="duzenlenenler" />} />
            <Route path="duzenlenenler" element={<EventCards />} />
            <Route path="onay-bekleyenler" element={<EventCards />} />
            <Route path="onaylanmis" element={<EventCards />} />
          </Route>
          <Route path="profili-duzenle" element={<div>Profili duzenle</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
