import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const VacansyCategory = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["vacansyCategory"],
    () => {
      return axios
        .get("https://alfabest.napaautomotive.uz/api/vacansy_category", {
          headers: {
            "Accept-Language": lang,
          },
        })
        .then((res) => res.data)
        .catch((err) => console.log("fetch error", err));
    }
  );
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";
  return (
    <>
      {data.datas?.map((itm) => {
        let title = itm.title_ru;
        let text = itm.text_ru;
        if (lang === "ru") {
          title = itm.title_ru;
          text = itm.text_ru;
        } else {
          title = itm.title_uz;
          text = itm.text_uz;
        }
        return (
          <div
            className="flex items-center gap-[70px] border-b pb-[10px] vacansy_cate"
            key={itm.id}>
            <h2 className="text-[20px] text-[#28C79E] font-semibold">
              0{itm.id}
            </h2>
            <div className="flex flex-col">
              <h2 className="text-[#1B2330] text-[18px] font-semibold">
                {title}
              </h2>
              <p className="text-[#8B8B8B0 text-[17px] font-normal]">{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VacansyCategory;
