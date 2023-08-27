import Header from "@/components/Header";
import Banner from "@/sections/banner";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Savings from "@/sections/savings";
import Footer from "@/sections/footer";
import React from "react";
import TypeForm from "@/sections/typeform";
import Testimonials from "@/sections/testimonials";
import Benefits from "@/sections/benefits";
import Phrase from "@/components/Phrase";
import ForgetTheOldWay from "@/sections/forget-the-old-way";
import Experience from "@/sections/experience";
import Target from "@/sections/target";
import Contract from "@/sections/contract";
import Faq from "@/sections/faq";
import Cta from "@/sections/cta";

const darkTheme = {
  primary: "#000",
  secondary: "#faf7f6",
  main: "#888",
  text: "#faf7f6",
  alt: "#ffdd00",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Midas </title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Banner />
        <Phrase />
        <Benefits />
        <ForgetTheOldWay />
        <Experience />
        <Target />
        <Contract />
        <Faq />
        <Cta />
        {/* <Savings /> */}
        {/* <Email /> */}
        {/* <Testimonials /> */}
        {/* <Benefits /> */}
        {/* <TypeForm /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}
