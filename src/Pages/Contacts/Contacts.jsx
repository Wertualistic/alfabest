import React, { useState } from "react";
import Left from "./components/Left";

const Contacts = ({ lang }) => {
  return (
    <div className="content">
      <div className="flex items-center justify-between w-100 px-[180px] contacts">
        <Left lang={lang} />
        <div className="right">
          <img
            className="rounded-2xl"
            src="https://back.alfabestservis.uz/storage/contact-infos//December2022//N1D3vsLYwse6XO9dpymj.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
