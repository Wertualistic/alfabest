import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";

const Cooperation = ({ lang }) => {
  return (
    <div className="content">
      <div className="flex flex-col items-start justify-start w-100 px-[180px] cooperation">
        <Header lang={lang} />
        <Contact lang={lang} />
      </div>
    </div>
  );
};

export default Cooperation;