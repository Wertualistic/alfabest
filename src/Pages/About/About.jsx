import React from "react";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import Partners from "../Home/components/Partners";
import Banners from "./components/banners";
import Gallery from "./components/Gallery";
import History from "../Home/components/History";

const About = ({ lang }) => {
  return (
    <div className="content">
      <div className="flex flex-col items-start justify-start w-100 px-[180px] about_main">
        <Header lang={lang} />
        <OurMission lang={lang} />
        <Services lang={lang} />
        <OurTeam lang={lang} />
      </div>
        <Partners lang={lang} />
        <Banners />
        <Gallery lang={lang} />
        <History lang={lang} />
    </div>
  );
};

export default About;
