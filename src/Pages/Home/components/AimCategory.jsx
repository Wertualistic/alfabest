import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AimCategory = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["aimCategory"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/aim_category", {
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
        let desc = itm.text_ru;
        if (lang === "ru") {
          desc = itm.text_ru;
        } else {
          desc = itm.text_uz;
        }
        return (
          <div
            className="flex items-center justify-between border-b w-100 p-4 aim_category_itm"
            key={itm.id}>
            <h2 className="text-[20px] text-black font-semibold">0{itm.id}</h2>
            <p
              className="w-[516px] ml-10 mr-[200px] text-[18px] text-[#1B2330] font-normal"
              dangerouslySetInnerHTML={{ __html: desc }}></p>
            <img
              src={`https://alfabest.napaautomotive.uz/storage/${itm.image}`}
              alt=""
            />
          </div>
        );
      })}
    </>
  );
};

export default AimCategory;
