import axios from "axios";
import React, { useEffect, useState } from "react";
import VacansyCategory from "./VacansyCategory";
import { useQuery } from "@tanstack/react-query";

const Vacansy = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["vacansy"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/vacansy", {
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
        if (lang === "ru") {
          title = itm.title_ru;
        } else {
          title = itm.title_uz;
        }
        return (
          <div className="flex flex-col py-[30px]" key={itm.id}>
            <h2 className="text-[#1B2330] text-[18px] font-semibold">
              {title}
            </h2>
            <a
              href={itm.link}
              className="text-[#3D62E3] text-[18px] font-normal">
              {itm.link}
            </a>
          </div>
        );
      })}
      <VacansyCategory lang={lang} />
    </>
  );
};

export default Vacansy;
