import React from "react";
import { Title } from "react-head";
import { Link } from "react-router-dom";

import "./pages.css";
import BlobLumaSnow from "./media/abloblumasnow.gif";
import GitHub from "./media/github.svg";
import Mail from "./media/mail.svg";
import YouTube from "./media/youtube.svg";

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
        <a href="https://youtube.com/@LostLuma" title="YouTube">
          <img src={YouTube} alt="" />
        </a>
        <a href="https://github.com/LostLuma" title="GitHub">
          <img src={GitHub} alt="" />
        </a>
        <a href="mailto:lilly@lostluma.net" title="Email">
          <img src={Mail} alt="" />
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
