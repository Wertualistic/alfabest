import React from "react";
import logo from "../assets/logo.svg";
import telegram from "../assets/icons/telegram.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import napa from "../assets/icons/napa.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col px-[180px] py-[60px] bg-[#1B2330] w-100 footer">
      <div className="flex justify-between items-start w-100 border-b border-[#313944] pb-20 footer_content">
        <div className="flex justify-between gap-[80px] footer_content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="flex flex-col gap-[16px]">
            <li>
              <Link
                to="/carrier"
                className="text-white text-[15px] font-semibold">
                {t("title1")}
              </Link>
            </li>
            <li>
              <Link
                to="/purchase"
                className="text-white text-[15px] font-semibold">
                {t("title2")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-[15px] font-semibold">
                {t("title3")}
              </Link>
            </li>
            <li>
              <Link
                to="/cooperation"
                className="text-white text-[15px] font-semibold">
                {t("title4")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-[15px] font-semibold">
                {t("title5")}
              </Link>
            </li>
            <li>
              <Link
                to="/cooperation"
                className="text-white text-[15px] font-semibold">
                {t("title6")}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[16px]">
            <li>
              <Link
                to="/household"
                className="text-white text-[15px] font-semibold">
                {t("title7")}
              </Link>
            </li>
            <li>
              <Link
                to="/catering"
                className="text-white text-[15px] font-semibold">
                {t("title8")}
              </Link>
            </li>
            <li>
              <Link
                to="/transportation"
                className="text-white text-[15px] font-semibold">
                {t("title9")}
              </Link>
            </li>
            <li>
              <Link
                to="/engineering"
                className="text-white text-[15px] font-semibold">
                {t("title10")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[15px] font-semibold">{t("title11")}</p>
          <div className="flex gap-[20px] pt-[20px]">
            <img src={telegram} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-7">
        <img src={napa} alt="" />
        <div className="flex gap-[20px]">
          <p className="text-white text-[15px] font-semibold">{t("title12")}</p>
          <p className="text-white text-[15px] font-semibold">{t("title13")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
