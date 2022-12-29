import { css, Global } from "@emotion/react";
import { StrictMode } from "react";
import { HeadProvider, Link } from "react-head";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, NotFound } from "./pages";

const BlobLuma = new URL("./media/blobluma.png", import.meta.url);

const global = css({
  "@media (prefers-color-scheme: dark)": {
    "body": {
      color: "#ffffff",
      backgroundColor: "#030303",
    },
  },
})

const app = css({
  marginTop: "15%",
  textAlign: "center",
  fontFamily: "Courier New, Courier, monospace",
});

export default function App() {
  return (
    <>
      <Global styles={global} />
      <div className="app" css={app}>
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
    </>
  );
}
