import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import System from "./System";
import { useQuery } from "@tanstack/react-query";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["servicesCategory3"],
    () => {
      return axios
        .get("https://alfabest.napaautomotive.uz/api/services_category", {
          headers: {
            "Accept-Language": lang,
          },
        })
        .then((res) => res.data)
        .catch((err) => console.log("fetch error", err));
    }
  );
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  const header = data.datas.slice(3, 4);
  return (
    <>
      {header?.map((itm) => {
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
          <div key={itm.id}>
            <div
              className="flex flex-col items-start justify-end h-[700px] px-[30px] py-[60px] w-[100%] rounded-3xl header"
              style={{
                backgroundImage: `url(https://alfabest.napaautomotive.uz/storage/${itm.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              key={itm.id}>
              <img src={logo} alt="" />
              <h2 className="text-[#fff] text-[36px] font-bold pt-[10px]">
                {title}
              </h2>
            </div>
            <div className="flex flex-col pt-[60px] pb-[30px] head_content">
              <h2 className="text-[#1B2330] text-[24px] font-bold pt-[10px]">
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="text-[#1B2330] text-[17px] font-normal pt-[30px]"></p>
            </div>
          </div>
        );
      })}
      <System lang={lang} />
    </>
  );
};

export default Header;
