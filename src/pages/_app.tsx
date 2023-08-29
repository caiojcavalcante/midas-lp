import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto, Montserrat } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
section {
  scroll-margin-top: 80px;

}
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    background-color: #000;
    color: #000;
  }
  font-family: "Montserrat", sans-serif;
  h1 {
    font-weight: 700;
  }
  h1, h2, h3, h4,p {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fd0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
`;

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={montserrat.className}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
