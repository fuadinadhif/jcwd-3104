import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Jamal from "./pages/Jamal.tsx";
import Jane from "./pages/Jane.tsx";
import John from "./pages/John.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/jamal" element={<Jamal />} />
          <Route path="/jane" element={<Jane />} />
          <Route path="/john" element={<John />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
