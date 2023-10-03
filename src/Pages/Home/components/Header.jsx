import React, { useEffect, useState } from "react";
import vector from "../../../assets/Vector.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Header({ lang }) {
  const { data, isLoading, isError, error } = useQuery(["homeContent"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/home_content", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;

  const pagination = {
    clickable: true,
  };

  let title =
    lang === "ru"
      ? "Корпоративного питания и инженерно-технической эксплуатации"
      : "Korporativ ovqatlanish va muhandislik-texnik foydalanish";

  let btn = "Узнать больше";
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper">
        {data.datas?.map((itm) => {
          let title = itm.text_ru;
          if (lang === "ru") {
            title = itm.text_ru;
            btn = "Узнать больше";
          } else {
            title = itm.text_uz;
            btn = "Ko'proq";
          }
          return (
            <>
              <SwiperSlide key={itm.id}>
                <div
                  className="px-[180px] pb-[60px] home w-100 h-[250px] relative top-0 left-0 z-10"
                  style={{
                    backgroundImage: `url(https://alfabest.napaautomotive.uz/storage/${itm.img})`,
                  }}>
                  <div className="contentIn">
                    <img src={vector} alt="" />
                    <h1 className="text-[45px] font-bold text-white leading-[60px] mt-[15px]">
                      {title}
                    </h1>
                    <button className="py-[15px] px-[20px] text-[16px] font-semibold mt-[30px] bg-[#28C79E] rounded-[45px] text-white">
                      {btn}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <div className="contentOut w-[239px] p-[15px]">
        <h1 className="text-[18px] font-bold text-black leading-[20px] mt-[15px]">
          {title}
        </h1>
        <button className="py-[15px] px-[20px] text-[16px] font-semibold mt-[30px] bg-[#28C79E] rounded-[45px] text-white w-[163px]">
          {btn}
        </button>
      </div>
    </>
  );
}

export default Header;
