import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import axios from "axios";
import AimCategory from "./AimCategory";
import { useQuery } from "@tanstack/react-query";

const Aim = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["aim"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/aim", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex items-center justify-between gap-[64px] px-[180px] py-[60px] aim_main">
      <div className="left flex flex-col w-[400px]">
        <img src={logo} alt="" width={20} />
        {data.datas?.map((itm) => {
          let title = itm.title_ru;
          let desc = itm.text_ru;
          if (lang === "ru") {
            title = itm.title_ru;
            desc = itm.text_ru;
          } else {
            title = itm.title_uz;
            desc = itm.text_uz;
          }

          return (
            <div key={itm.id}>
              <h2 className="text-[#1B2330] text-[34px] font-bold pt-[10px]">
                {title}
              </h2>
              <p className="text-[#1B2330] text-[17px] font-normal pt-[30px]">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
      <div className="right">
        <AimCategory lang={lang} />
      </div>
    </div>
  );
};

export default Aim;
