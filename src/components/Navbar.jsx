import React, { useState } from "react";
import language from "../assets/icons/lang.svg";
import burger from "../assets/icons/burger.svg";
import x from "../assets/icons/x.svg";
import logoBlack from "../assets/logoBlack.svg";
import Menu from "../Pages/Home/components/Menu";
import { NavLink, useLocation } from "react-router-dom";
import telegram from "../assets/icons/telegramb.svg";
import instagram from "../assets/icons/instagramb.svg";
import facebook from "../assets/icons/facebookb.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import loadingImg from "../../public/loading.svg";

const Navbar = ({ lang }) => {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const navbarClass = location.pathname === "/" ? "navbar" : "page-navbar";
  const [active, setActive] = useState(false);
  const [uslugi, setUslugi] = useState(false);

  const changeLang = () => {
    let newLang = lang === "ru" ? "uz" : "ru";
    localStorage.setItem("lang", newLang);
    window.location.reload();
  };

  const { data, isLoading, isError, error } = useQuery(["navbar"], () => {
    return axios
      .get("https://alfabest.napaautomotive.uz/api/home_menu", {
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
  window.onscroll = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  let title1 = "Карьера";
  let title2 = "Закупки";
  let title3 = "О компании";
  let title4 = "Наши партнеры";
  let title5 = "Контакты";
  let title6 = "Сотрудничество";
  let title7 = "Сервисное и бытовое обслуживание";
  let title8 = "Корпоративное питание";
  let title9 = "Транспортные перевозки";
  let title10 = "Инженерно-техническая эксплуатация";
  let title11 = "Услуги";
  let title12 = "Подписывайтесь на нас";

  if (lang === "ru") {
    title1 = "Карьера";
    title2 = "Закупки";
    title3 = "О компании";
    title4 = "Наши партнеры";
    title5 = "Контакты";
    title6 = "Сотрудничество";
    title7 = "Сервисное и бытовое обслуживание";
    title8 = "Корпоративное питание";
    title9 = "Транспортные перевозки";
    title10 = "Инженерно-техническая эксплуатация";
    title11 = "Услуги";
    title12 = "Подписывайтесь на нас";
  } else {
    title1 = "Karyera";
    title2 = "Xarid qilish";
    title3 = "Kompaniya haqida";
    title4 = "Bizning hamkorlarimiz";
    title5 = "Kontaktlar";
    title6 = "Hamkorlik";
    title7 = "Xizmat ko'rsatish va maishiy xizmatlar";
    title8 = "Korporativ ovqatlanish";
    title9 = "Transport";
    title10 = "Muhandislik va texnik ekspluatatsiya";
    title11 = "Xizmatlar";
    title12 = "Bizga obuna bo'ling";
  }

  return (
    <nav
      className={
        navbar
          ? `bg-white shadow-lg fixed top-0 left-0 z-[100000] w-[100vw] ${navbarClass} `
          : `backdrop-blur-[5px] fixed top-0 left-0 z-[100000] w-[100vw] ${navbarClass}`
      }>
      <div
        className={
          navbar
            ? "flex justify-between py-[12px] px-[180px] border-b items-center border-black paad"
            : "flex justify-between py-[12px] px-[180px] border-b items-center border-white paad"
        }>
        <NavLink to="/">
          <img src={logoBlack} alt="logo" className="fill-black" />
        </NavLink>
        <ul className="nav_menu flex gap-[30px]">
          {data.datas?.map((itm) => {
            let title = itm.title_ru;
            if (lang === "ru") {
              title = itm.title_ru;
            } else if (lang === "uz") {
              title = itm.title_uz;
            }
            return (
              <li key={itm.id}>
                <NavLink
                  to={`/${itm.link}`}
                  className={
                    navbar
                      ? "text-base font-semibold text-black"
                      : "text-base font-semibold text-white"
                  }>
                  {title}
                </NavLink>
              </li>
            );
          })}
          <li
            className={
              navbar ? "text-black flex gap-2" : "text-white flex gap-2"
            }>
            <a
              href="/"
              className={navbar ? "text-black" : "text-white"}
              onClick={() => localStorage.setItem("lang", "ru")}>
              Ru
            </a>{" "}
            <p className="text-black">|</p>
            <a
              href="/"
              className={navbar ? "text-black" : "text-white"}
              onClick={() => localStorage.setItem("lang", "uz")}>
              Uz
            </a>
          </li>
        </ul>
        <div className="flex gap-[16px] small">
          <div onClick={() => changeLang()} className="cursor-pointer">
            <img src={language} alt="" />
          </div>
          <div
            className="flex items-center justify-center w-[40px] h-[40px] bg-[#28C79E] rounded-full cursor-pointer"
            onClick={() => setActive(!active)}>
            <img src={active ? x : burger} alt="" />
          </div>
        </div>
        <div className={active ? "nav_active nav_active1" : "nav_active"}>
          <ul>
            <li>
              <NavLink to="/">{title11}</NavLink>{" "}
              <button
                onClick={() => setUslugi(!uslugi)}
                className={uslugi ? "btn" : "button"}>
                +
              </button>
            </li>
            {uslugi && (
              <ul className="flex flex-col gap-[16px] nav_active_ul">
                <li>
                  <NavLink
                    to="/household"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {title7}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/catering"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {title8}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/transportation"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {title9}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/engineering"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {title10}
                  </NavLink>
                </li>
              </ul>
            )}
            <li>
              <NavLink to="/about">{title3}</NavLink>
            </li>
            <li>
              <NavLink to="/carrier">{title1}</NavLink>
            </li>
            <li>
              <NavLink to="/purchase">{title2}</NavLink>
            </li>
            <li>
              <NavLink to="/cooperation">{title6} </NavLink>
            </li>
            <li>
              <NavLink to="/contact">{title5} </NavLink>
            </li>
          </ul>
          <div className="flex flex-col">
            <p className="text-black text-[15px] font-semibold">{title12}</p>
            <div className="flex gap-[20px] pt-[20px]">
              <img src={telegram} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Menu navbar={navbar} lang={lang} />
    </nav>
  );
};

export default Navbar;
