import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import System from "./System";
import { useQuery } from "@tanstack/react-query";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["servicesCategory2"],
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
  const header = data.datas.slice(0, 1);
  return (
    <>
      {header?.map((itm) => {
        let title = itm.title_ru;
        let text =
          "Мы выполняем работы и оказываем услуги по техническому обслуживанию и ремонту зданий, сооружений, инженерных систем, бытовой техники, столового, прачечного и иного оборудования, используемых в жилых и в административно-бытовых зданиях Заказчика.";
        if (lang === "ru") {
          title = itm.title_ru;
          text =
            "Мы выполняем работы и оказываем услуги по техническому обслуживанию и ремонту зданий, сооружений, инженерных систем, бытовой техники, столового, прачечного и иного оборудования, используемых в жилых и в административно-бытовых зданиях Заказчика.";
        } else {
          title = itm.title_uz;
          text =
            "Biz Buyurtmachining turar-joy va ma'muriy binolarida foydalaniladigan binolar, inshootlar, muhandislik tizimlari, maishiy texnika, oshxona, kir yuvish va boshqa jihozlarga texnik xizmat ko'rsatish va ta'mirlash bo'yicha ishlarni bajaramiz va xizmatlar ko'rsatamiz.";
        }
        return (
          <div key={itm.id}>
            <div
              className="flex flex-col items-start justify-end h-[700px] p px-[30px] py-[60px] w-[100%] rounded-3xl header"
              style={{
                backgroundImage: `url(https://alfabest.napaautomotive.uz/storage/services-categories//December2022//CNYxdBWrdgIt0RAeeyP7.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
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
