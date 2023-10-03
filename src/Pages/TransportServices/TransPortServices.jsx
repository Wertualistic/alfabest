import React from "react";
import Header from "./components/Header";
import Partners from "../Home/components/Partners";
import Advantages from "./components/Advantages";
import Gallery from "../About/components/Gallery";

const TransPortServices = ({ lang }) => {
  return (
    <div className="content">
      <div className="flex flex-col items-start justify-start w-100 px-[180px] divvv">
        <Header lang={lang} />
      </div>
      <Partners lang={lang} />
      <Advantages lang={lang} />
      <Gallery lang={lang} />
    </div>
  );
};

export default TransPortServices;
