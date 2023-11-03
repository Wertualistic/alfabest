import axios from "axios";
import React, { useEffect, useState } from "react";
import checked from "../../../assets/icons/checked.svg";
import { useQuery } from "@tanstack/react-query";

const System = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["servicesSubCategory1"],
    () => {
      return axios
        .get("https://back.alfabestservis.uz/api/services_subcategory", {
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

  const cards = data.datas.slice(5, 19);
  return (
    <div className="system">
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
              className="flex flex-col items-start justify-start w-[600px] gap-[30px] card"
              key={itm.id}>
              <img
                src={`https://alfabest.napaautomotive.uz/storage/${itm.icon}`}
                alt=""
              />
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default System;
