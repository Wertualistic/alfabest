import axios from "axios";
import React, { useEffect, useState } from "react";
import checked from "../../../assets/icons/checked.svg";
import logo from "../../../assets/logo1.svg";
import { useQuery } from "@tanstack/react-query";

const Advantages = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["advantage"], () => {
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
  if (isLoading) return <h1>Loading...</h1>;

  const cards = data.datas.slice(1, 8);

  let title = "Наши преимущества.";

  if (lang === "ru") {
    title = "Наши преимущества";
  } else {
    title = "Bizning afzalliklarimiz";
  }
  return (
    <div className="px-[180px] advanteges">
      <img src={logo} alt="" />
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

export default Advantages;
