import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import axios from "axios";
import checked from "../../../assets/icons/checked.svg";
import { useQuery } from "@tanstack/react-query";

const Header = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["cooperation"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/cooperation", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      {data.datas?.map((itm) => {
        let title = itm.title_ru;
        let text =
          lang === "ru"
            ? "Компания Альфа-бест будет рада сотрудничеству с промышленными предприятиями, торговыми центрами, компаниями крупного и среднего бизнеса в области комплексного оказания услуг"
            : `"Alfa-best" kompaniyasi sanoat korxonalari, savdo markazlari, yirik va o'rta biznes bilan kompleks xizmatlar ko'rsatish sohasida hamkorlik qilishdan mamnun bo'ladi.`;
        let title1 =
          lang === "ru"
            ? "Основные преимущества перехода на аутсорсинг"
            : "Autsorsingga o'tishning asosiy afzalliklari";
        let title2 =
          lang === "ru"
            ? "Сокращение издержек за счет оптимизации процессов"
            : "Jarayonni optimallashtirish orqali xarajatlarni kamaytirish";
        let title3 =
          lang === "ru"
            ? "Адаптированные под ваши потребности меню и услуги"
            : "Sizning ehtiyojlaringizga moslashtirilgan menyu va xizmatlar";
        let title4 =
          lang === "ru"
            ? "Улучшение качества услуг за счет привлечения квалифицированного опытного подрядчика"
            : "Malakali, tajribali pudratchini jalb qilish orqali xizmatlar sifatini oshirish";
        let title5 =
          lang === "ru"
            ? "Концентрация усилий управленческой команды на основной деятельности"
            : "Boshqaruv jamoasining sa'y-harakatlarini asosiy faoliyatga jamlash";
        if (lang === "ru") {
          title = itm.title_ru;
        } else {
          title = itm.title_uz;
        }
        return (
          <div key={itm.id}>
            <div
              className="flex flex-col items-start justify-end h-[700px] px-[30px] pb-[30px] w-[80vw] rounded-3xl cooperation_header"
              style={{
                backgroundImage: `url(https://alfabest.napaautomotive.uz/storage/cooperations//December2022//dG8B4y3o2DUhuC2FW49j.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              key={itm.id}>
              <img src={logo} alt="" />
              <h2 className="text-[#fff] text-[36px] font-bold pt-[10px]">
                {title}
              </h2>
            </div>
            <div className="flex flex-col py-[60px] cooperation_content">
              <p className="text-[#1B2330] text-[17px] font-normal pt-[30px]">
                {text}
              </p>
              <div className="flex flex-col pt-[60px]">
                <img src={logo} alt="" width={20} />
                <h2 className="text-[#1B2330] text-[34px] font-bold pt-[10px]">
                  {title1}
                </h2>
                <div className="grid grid-cols-2 grid-rows-2 gap-8 pt-[30px] cooperation_cards">
                  <div className="flex items-start gap-[30px]">
                    <img src={checked} alt="" />
                    <h2 className="text-[#1B2330] text-[20px] font-medium">
                      {title2}
                    </h2>
                  </div>
                  <div className="flex items-start gap-[30px]">
                    <img src={checked} alt="" />
                    <h2 className="text-[#1B2330] text-[20px] font-medium">
                      {title3}
                    </h2>
                  </div>
                  <div className="flex items-start gap-[30px]">
                    <img src={checked} alt="" />
                    <h2 className="text-[#1B2330] text-[20px] font-medium">
                      {title4}
                    </h2>
                  </div>
                  <div className="flex items-start gap-[30px]">
                    <img src={checked} alt="" />
                    <h2 className="text-[#1B2330] text-[20px] font-medium">
                      {title5}
                    </h2>
                  </div>
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
