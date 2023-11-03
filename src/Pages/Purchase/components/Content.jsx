import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "../../About/components/Gallery";
import { useQuery } from "@tanstack/react-query";
import loadingImg from "/public/loading.svg";

const Content = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["purchase"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/purchase", {
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
          <>
            <div key={itm.id}>
              <h2 className="text-[#1B2330] text-[45px] font-bold">{title}</h2>
              <p className="text-[#1B2330] text-[18px] font-normal pt-[30px]">
                {text}
              </p>
            </div>
            <Gallery lang={lang} />
          </>
        );
      })}
    </>
  );
};

export default Content;
