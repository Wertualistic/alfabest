import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import foto from "../../../assets/foto1.png";
import "./index.css";
import { useQuery } from "@tanstack/react-query";

const History = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["history"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/history", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";

  let title = "История";

  if (lang === "ru") {
    title = "История";
  } else {
    title = "Tarix";
  }

  return (
    <div className="flex flex-col items-start px-[180px] py-[60px] history">
      <img src={logo} alt="" />
      <h2 className="text-[34px] font-bold text-[#1B2330]">{title}</h2>
      <div className="flex items-start item gap-[120px] history_content">
        <img src={foto} alt="" width={"500px"} className="pt-[30px]" />
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper ">
          {data.datas?.map((itm) => {
            let desc = itm.text_ru;
            lang === "ru" ? (desc = itm.text_ru) : (desc = itm.text_uz);
            return (
              <SwiperSlide key={itm.id}>
                <h2 className="text-[#1B2330] text-[45px] font-bold">
                  {itm.year}
                </h2>
                <p
                  dangerouslySetInnerHTML={{ __html: desc }}
                  className="text-[#1B2330] text-[17px] font-normal pt-[20px]"></p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default History;
