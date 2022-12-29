import { Title } from "react-head";
import { Link } from "react-router-dom";

import "./pages.css";

const BlobLumaSnow = new URL("./media/abloblumasnow.gif", import.meta.url);
const GitHub = new URL("./media/github.svg", import.meta.url);
const Mail = new URL("./media/mail.svg", import.meta.url);
const YouTube = new URL("./media/youtube.svg", import.meta.url);

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
