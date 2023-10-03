import axios from "axios";
import React, { useEffect, useState } from "react";
import checked from "../../../assets/icons/checked.svg";
import { useQuery } from "@tanstack/react-query";

const System = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["advantage4"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/advantage", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";
  const cards = data.datas.slice(0, 4);

  let title = "Система сводится к трем основным составляющим.";

  if (lang === "ru") {
    title = "Система сводится к трем основным составляющим.";
  } else {
    title = "Tizim uchta asosiy komponentdan iborat.";
  }

  return (
    <div className="system">
      <h2 className="text-[#1B2330] text-[24px] font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-y-[30px] gap-x-[100px] py-[30px] cards">
        {cards?.map((itm) => {
          let text = itm.text_ru;

          if (lang === "ru") {
            text = itm.text_ru;
          } else {
            text = itm.text_uz;
          }
          return (
            <div
              className="flex items-start justify-start w-[600px] gap-[30px] card"
              key={itm.id}>
              <img src={checked} alt="" />
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default System;
