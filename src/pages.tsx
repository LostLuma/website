import { css } from "@emotion/react";
import { Meta, Title } from "react-head";
import { Link } from "wouter";

const BlobLumaSnow = new URL("./media/abloblumasnow.avif", import.meta.url);
const GitHub = new URL("./media/github.svg", import.meta.url);
const Mail = new URL("./media/mail.svg", import.meta.url);
const YouTube = new URL("./media/youtube.svg", import.meta.url);

const holder = css({
  padding: "2.5em",
});

const link = css({
  padding: "0.75em",
  "&:focus, &:hover": {
    filter: "invert(0.5) sepia(1) hue-rotate(305deg) saturate(10)",
  },
  "@media (prefers-color-scheme: dark)": {
    filter: "invert(1)",
  },
});

export function Home() {
  return (
    <>
      <Title>Home - LostLuma</Title>
      <Meta name="description" content="Lilly's little internet homepage" />
      <img
        src={BlobLumaSnow.href}
        width="128"
        height="128"
        alt="A yellow Luma from Super Mario Galaxy being snowed in."
      />
      <div css={holder}>
        <a href="https://youtube.com/@LostLuma" title="YouTube" css={link}>
          <img src={YouTube.href} alt="" />
        </a>
        <a href="https://github.com/LostLuma" title="GitHub" css={link}>
          <img src={GitHub.href} alt="" />
        </a>
        <a href="mailto:lilly@lostluma.net" title="Email" css={link}>
          <img src={Mail.href} alt="" />
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
