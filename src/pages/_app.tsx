import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
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
    background-color: #000;
    color: #000;
  }
  h1 {
    font-weight: 700;
  }
  h1, h2, h3, h4,p {
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
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main style={montserrat.style} className={montserrat.className}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
