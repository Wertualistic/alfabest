import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["services"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/home_service", {
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
    <div className="grid grid-cols-2 grid-rows-2 py-[60px] gap-[60px] gap-x-[100px] services">
      {data.datas?.map((itm) => {
        let title = itm.title_ru;
        if (lang === "ru") {
          title = itm.title_ru;
        } else {
          title = itm.title_uz;
        }
        return (
          <div
            className="flex p-[30px] w-[600px] shadow-xl rounded-xl bg-white services_card"
            key={itm.id}>
            <div className="flex flex-col justify-between h-[auto] ">
              <h2 className="text-[24px] text-[#1B2330] font-semibold">
                {title}
              </h2>
              <Link
                to={`/${itm.link}`}
                className="text-[17px] text-[#1B2330] font-medium">
                Подробно →
              </Link>
            </div>
            <img
              src={`https://alfabest.napaautomotive.uz/storage/${itm.icon}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Services;
