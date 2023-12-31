import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import System from "./System";
import { useQuery } from "@tanstack/react-query";
import loadingImg from "/public/loading.svg";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["servicesCategory1"],
    () => {
      return axios
        .get("https://back.alfabestservis.uz/api/services_category", {
          headers: {
            "Accept-Language": lang,
          },
        })
        .then((res) => res.data)
        .catch((err) => console.log("fetch error", err));
    }
  );
  if (isError) return console.log("error:", error.message);
  if (isLoading)
    return (
      <div className="loader">
        <img src={loadingImg} alt="" />
      </div>
    );

  const header = data.datas.slice(1, 2);
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
              className="flex flex-col items-start justify-end h-[700px] p px-[30px] py-[60px] w-[100%] rounded-3xl header"
              style={{
                backgroundImage: `url(https://back.alfabestservis.uz/storage/services-categories//December2022//xpxLcb56HYC9lIrkoOYW.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <img src={logo} alt="" />
              <h2 className="text-[#fff] text-[36px] font-bold pt-[10px]">
                {title}
              </h2>
            </div>
            <div className="flex flex-col pt-[60px] pb-[30px]">
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
