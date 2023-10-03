import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import axios from "axios";
import foto from "../../../assets/photo.png";
import Vacansy from "./Vacansy";
import { useQuery } from "@tanstack/react-query";
import loadingImg from "/public/loading.svg";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["carrier"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/carrier", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading)
    return (
      <div className="loader">
        <img src={loadingImg} alt="" />
      </div>
    );
  return (
    <>
      {data.datas?.map((itm) => {
        let title = itm.title_ru;
        let image_title = itm.image_title_ru;
        let content = itm.content_ru;
        if (lang === "ru") {
          title = itm.title_ru;
          image_title = itm.image_title_ru;
          content = itm.content_ru;
        } else {
          title = itm.title_uz;
          image_title = itm.image_title_uz;
          content = itm.content_uz;
        }
        return (
          <div key={itm.id}>
            <div
              className="flex flex-col items-start justify-end h-[700px] px-[30px] pb-[30px] w-[80vw] rounded-3xl carrier_header"
              style={{
                backgroundImage: `url(${foto})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}>
              <img src={logo} alt="" />
              <h2 className="text-[#fff] text-[36px] font-bold pt-[10px]">
                {image_title}
              </h2>
            </div>
            <div className="flex flex-col py-[60px]">
              <div className="flex justify-between items-start carrier_header_content">
                <div className="flex flex-col">
                  <img src={logo} alt="" width={20} />
                  <h2 className="text-[#1B2330] text-[34px] font-bold pt-[10px] w-[395px]">
                    {title}
                  </h2>
                </div>
                <div className="flex flex-col w-[700px] carrier_head">
                  <p
                    dangerouslySetInnerHTML={{ __html: content }}
                    className="text-[#1B2330] text-[17px] font-normal pt-[30px]"></p>
                  <Vacansy lang={lang} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Header;
