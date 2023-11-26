import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import loadingImg from "/public/loading.svg";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["aboutHeader"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/about_company", {
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
              className="flex flex-col items-start justify-end h-[700px] p px-[30px] py-[60px] w-[100%] rounded-3xl about_header"
              style={{
                backgroundImage: `url(https://back.alfabestservis.uz/storage/${itm.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              key={itm.id}>
              <img src={logo} alt="" />
              <h2 className="text-[#fff] text-[36px] font-bold pt-[10px]">
                {title}
              </h2>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: text }}
              className="text-[#1B2330] text-[17px] font-normal pt-[30px]"></p>
          </div>
        );
      })}
    </>
  );
};

export default Header;
