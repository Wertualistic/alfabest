import React from "react";
import Header from "./components/Header";
import AboutCompany from "./components/AboutCompany";
import Aim from "./components/Aim";
import History from "./components/History";
import Partners from "./components/Partners";

function Home({ lang }) {
  return (
    <>
      <Header lang={lang} />
      <AboutCompany lang={lang} />
      <Aim lang={lang} />
      <Partners lang={lang} />
      <History lang={lang} />
    </>
  );
}

export default Home;
