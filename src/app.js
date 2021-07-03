import React, { StrictMode } from "react";
import { HeadProvider, Link } from "react-head";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.css";
import BlobLuma from "./media/blobluma.png";
import { Home, NotFound } from "./pages";

export default function App() {
  return (
    <div className="app">
      <StrictMode>
        <BrowserRouter>
          <HeadProvider>
            <Link rel="icon" href={BlobLuma} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </HeadProvider>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}
