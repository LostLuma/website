import { css } from "@emotion/react";
import { StrictMode } from "react";
import { HeadProvider, Link } from "react-head";
import { Route, Switch } from "wouter";

import { Home, NotFound } from "./pages";

const BlobLuma = new URL("./media/blobluma.avif?height=64", import.meta.url);

const app = css({
  marginTop: "15%",
  textAlign: "center",
  fontFamily: "Courier New, Courier, monospace",
});

export default function App() {
  return (
    <div css={app}>
      <StrictMode>
          <HeadProvider>
            <Link rel="icon" href={BlobLuma.href} />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </HeadProvider>
      </StrictMode>
    </div>
  );
}
