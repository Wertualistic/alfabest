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

const Gallery = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["photoGallery"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/photo_gallery", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";

  let number = 3;

  if (window.innerWidth < 768) {
    number = 1;
  } else {
    number = 2.5;
  }

  let title = "Фотогалерея";

  if (lang === "ru") {
    title = "Фотогалерея";
  } else {
    title = "Gallareya";
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-[60px] pb-[60px] pt-[60px] px-[180px] gallery">
        <div className="flex flex-col justify-start items-start w-[690px]">
          <img src={logo} alt="" className="logo" />
          <h2
            className="pt-[10px] text-[34px] text-[#1b2330] font-bold
          ">
            {title}
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          style={{ width: "80vw" }}>
          {data.datas?.map((itm) => {
            return (
              <SwiperSlide key={itm.id}>
                <img
                  src={`https://alfabest.napaautomotive.uz/storage/${itm.image}`}
                  alt=""
                  className="w-[500px] h-[320px] rounded-xl"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
