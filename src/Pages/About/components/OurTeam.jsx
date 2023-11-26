import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import "./style.css";
import { useQuery } from "@tanstack/react-query";

const OurTeam = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["ourTeam"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/team", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";

  let number = 5;

  if (window.innerWidth < 768) {
    number = 2;
  } else {
    number = 5;
  }

  let title = "Наша команда";

  if (lang === "ru") {
    title = "Наша команда";
  } else {
    title = "Bizning Jamoa";
  }
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-[60px] py-[60px] team">
        <div className="flex flex-col justify-start items-start w-[690px] team_top">
          <img src={logo} alt="" />
          <h2
            className="pt-[10px] text-[34px] text-[#1b2330] font-bold
          ">
            {title}
          </h2>
        </div>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          style={{ width: "80vw" }}>
          {data.datas?.map((itm) => {
            let position = itm.position_ru;
            if (lang === "ru") {
              position = itm.position_ru;
            } else {
              position = itm.position_uz;
            }
            return (
              <SwiperSlide key={itm.id}>
                <img
                  src={`https://back.alfabestservis.uz/storage/${itm.photo}`}
                  alt=""
                />
                <h2 className="text-[18px] text-[#1B2330] font-bold pt-4">
                  {itm.full_name}
                </h2>
                <span className="text-[16px] text-[#8D9197] font-normal">
                  {position}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default OurTeam;
