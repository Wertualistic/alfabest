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
import { useTranslation } from "react-i18next";

const Navbar = ({ lang }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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

  const changeLanguageRu = () => {
    localStorage.setItem("lang", "ru");
    changeLanguage("ru");
  };

  const changeLanguageUz = () => {
    localStorage.setItem("lang", "uz");
    changeLanguage("uz");
  };

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
              onClick={() => changeLanguageRu()}>
              Ru
            </a>{" "}
            <p className="text-black">|</p>
            <a
              href="/"
              className={navbar ? "text-black" : "text-white"}
              onClick={() => changeLanguageUz()}>
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
              <NavLink to="/">{t("title14")}</NavLink>{" "}
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
                    {t("title7")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/catering"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {t("title8")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/transportation"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {t("title9")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/engineering"
                    className="text-white text-[15px] font-semibold opacity-[0.5]">
                    {t("title10")}
                  </NavLink>
                </li>
              </ul>
            )}
            <li>
              <NavLink to="/about">{t("title3")}</NavLink>
            </li>
            <li>
              <NavLink to="/carrier">{t("title1")}</NavLink>
            </li>
            <li>
              <NavLink to="/purchase">{t("title2")}</NavLink>
            </li>
            <li>
              <NavLink to="/cooperation">{t("title6")} </NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t("title5")} </NavLink>
            </li>
          </ul>
          <div className="flex flex-col">
            <p className="text-black text-[15px] font-semibold">
              {t("title12")}
            </p>
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
