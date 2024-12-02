import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Appetizer from "./pages/Appetizer.tsx";
import Beverage from "./pages/Beverage.tsx";
import Dessert from "./pages/Dessert.tsx";
import App from "./App.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route index element={<App />} /> */}
          <Route path="/" element={<App />} />
          <Route path="/appetizer" element={<Appetizer />} />
          <Route path="/beverage" element={<Beverage />} />
          <Route path="/dessert" element={<Dessert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
