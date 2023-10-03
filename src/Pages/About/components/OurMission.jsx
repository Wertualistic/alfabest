import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import { useQuery } from "@tanstack/react-query";

const OurMission = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["ourMission"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/mission", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";
  return (
    <>
      {data.datas?.map((itm) => {
        let title = itm.title_ru;
        let text = itm.text_ru;
        let subtitle = itm.subtitle_ru;
        if (lang === "ru") {
          title = itm.title_ru;
          text = itm.text_ru;
          subtitle = itm.subtitle_ru;
        } else {
          title = itm.title_uz;
          text = itm.text_uz;
          subtitle = itm.subtitle_uz;
        }
        return (
          <div
            className="flex justify-between items-center gap-[60px] py-[60px] mission"
            key={itm.id}>
            <div className="flex flex-col justify-start items-start w-[690px] mission">
              <img src={logo} alt="" />
              <h2
                className="pt-[10px] text-[34px] text-[#1b2330] font-bold
              ">
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="text-[17px] text-[#1b2330] font-normal pt-[20px]"></p>
            </div>
            <p className="text-[30px] font-bold text-[#1B2330] w-[250px]">
              {subtitle}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default OurMission;
