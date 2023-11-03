import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo1.svg";
import foto from "../../../assets/foto.png";
import location from "../../../assets/icons/location.svg";
import map from "../../../assets/icons/map.svg";
import food from "../../../assets/icons/food.svg";
import employee from "../../../assets/icons/employee.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AboutCompany = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["aboutCompany"], () => {
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
  if (isLoading) return "";

  let btn = "Узнать больше";
  let kv = "кв.м²";
  let title1 = "Площади объектов <br /> благоустройства";
  let title2 = "Площади объектов <br /> клининга";
  let title3 = "Питающихся";
  let title4 = "Сотрудников";

  return (
    <div className="flex flex-col px-[180px] py-[60px] about">
      {data.datas?.map((itm) => {
        let title = itm.home_title_ru;
        let desc = itm.home_text_ru;
        if (lang === "ru") {
          title = itm.home_title_ru;
          desc = itm.home_text_ru;
          btn = "Узнать больше";
          kv = "кв.м²";
          title1 = "Площади объектов <br /> благоустройства";
          title2 = "Площади объектов <br /> клининга";
          title3 = "Питающихся";
          title4 = "Сотрудников";
        } else if (lang === "uz") {
          title = itm.home_title_uz;
          desc = itm.home_text_uz;
          btn = "Ko'proq";
          kv = "kv.m²";
          title1 = "Ob'ektlarni obodonlashtirish <br /> sohalari";
          title2 = "Tozalash inshootlari <br /> joylari";
          title3 = "Oziqlantirish";
          title4 = "Xodimlar";
        }
        return (
          <div
            className="flex items-center justify-between about_company"
            key={itm.id}>
            <div>
              <img
                src={`https://alfabest.napaautomotive.uz/storage/${itm.home_image}`}
                alt=""
                className="img"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-[689px] about_content">
              <img src={logo} alt="" />
              <h2 className="text-[#1B2330] text-[34px] font-bold pt-[10px]">
                {title}
              </h2>
              <p
                className="text-[17px] text-[#1B2330] font-normal pt-8"
                dangerouslySetInnerHTML={{ __html: desc }}></p>
              <Link
                to="/about"
                className="py-[15px] px-[20px] text-[16px] font-semibold mt-[30px] bg-[#28C79E] rounded-[45px] text-white">
                {btn}
              </Link>
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap justify-between pt-16 gap-[30px] about_cards">
        <div className="flex flex-col">
          <div
            className="flex items-center
          ">
            <img src={location} alt="" />
            <h3 className="text-[30px] font-medium ml-3 text-[#1B2330] flex items-center">
              +320.000{" "}
              <span className="text-[18px] font-normal pl-1">{kv}</span>
            </h3>
          </div>
          <p
            className="text-[#8B8B8B] text-[18px] font-normal"
            dangerouslySetInnerHTML={{ __html: title1 }}></p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={map} alt="" />
            <h3 className="text-[30px] font-medium ml-3 text-[#1B2330] flex items-center">
              +70.000 <span className="text-[18px] font-normal pl-1">{kv}</span>
            </h3>
          </div>
          <p
            className="text-[#8B8B8B] text-[18px] font-normal"
            dangerouslySetInnerHTML={{ __html: title2 }}></p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={food} alt="" />
            <h3 className="text-[30px] font-medium ml-3 text-[#1B2330] flex items-center">
              +1000
            </h3>
          </div>
          <p className="text-[#8B8B8B] text-[18px] font-normal">{title3}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={employee} alt="" />
            <h3 className="text-[30px] font-medium ml-3 text-[#1B2330] flex items-center">
              +500
            </h3>
          </div>
          <p className="text-[#8B8B8B] text-[18px] font-normal">{title4}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
