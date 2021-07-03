import React from "react";
import { Title } from "react-head";
import { Link } from "react-router-dom";

import "./pages.css";
import BlobLumaSnow from "./media/abloblumasnow.gif";
import GitHub from "./media/github.svg";
import Mail from "./media/mail.svg";
import Twitter from "./media/twitter.svg";

export function Home() {
  return (
    <>
      <Title>Home - LostLuma</Title>
      <img
        src={BlobLumaSnow}
        width="128"
        height="128"
        alt="Luma lost in the snow!"
      />
      <div className="links">
        <a href="mailto:lilly@lostluma.dev" title="Email">
          <img src={Mail} alt="" />
        </a>
        <a href="https://github.com/LostLuma" title="GitHub">
          <img src={GitHub} alt="" />
        </a>
        <a href="https://twitter.com/LostLumaa" title="Twitter">
          <img src={Twitter} alt="" />
        </a>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <Title>Not Found - LostLuma</Title>
      <div>
        Looks like you took a wrong turn! <Link to="/">Go Home.</Link>
      </div>
    </>
  );
}
