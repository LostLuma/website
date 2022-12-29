import { StrictMode } from "react";
import { HeadProvider, Link } from "react-head";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";
import { Home, NotFound } from "./pages";

const BlobLuma = new URL("./media/blobluma.png", import.meta.url);

export default function App() {
  return (
    <div className="app">
      <StrictMode>
        <BrowserRouter>
          <HeadProvider>
            <Link rel="icon" href={BlobLuma.href} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HeadProvider>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}
