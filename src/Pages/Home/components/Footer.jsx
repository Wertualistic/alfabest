import React from "react";
import logo from "../../../assets/logo.svg";
import telegram from "../../../assets/icons/telegram.svg";
import instagram from "../../../assets/icons/instagram.svg";
import facebook from "../../../assets/icons/facebook.svg";
import napa from "../../../assets/icons/napa.svg";
import { Link } from "react-router-dom";

const Footer = ({ lang }) => {
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
  let title11 = "Подписывайтесь на нас";
  let title12 = "Помощь";
  let title13 = "Стань частью команды";

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
    title11 = "Подписывайтесь на нас";
    title12 = "Помощь";
    title13 = "Стань частью команды";
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
    title11 = "Bizga obuna bo'ling";
    title12 = "Yordam";
    title13 = "Jamoaning bir qismiga aylaning";
  }

  return (
    <div className="flex flex-col px-[180px] py-[60px] bg-[#1B2330] w-100 footer">
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
                {title1}
              </Link>
            </li>
            <li>
              <Link
                to="/purchase"
                className="text-white text-[15px] font-semibold">
                {title2}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-[15px] font-semibold">
                {title3}
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="text-white text-[15px] font-semibold">
                {title4}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-[15px] font-semibold">
                {title5}
              </Link>
            </li>
            <li>
              <Link
                to="/cooperation"
                className="text-white text-[15px] font-semibold">
                {title6}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[16px]">
            <li>
              <Link
                to="/household"
                className="text-white text-[15px] font-semibold">
                {title7}
              </Link>
            </li>
            <li>
              <Link
                to="/catering"
                className="text-white text-[15px] font-semibold">
                {title8}
              </Link>
            </li>
            <li>
              <Link
                to="/transportation"
                className="text-white text-[15px] font-semibold">
                {title9}
              </Link>
            </li>
            <li>
              <Link
                to="/engineering"
                className="text-white text-[15px] font-semibold">
                {title10}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[15px] font-semibold">{title11}</p>
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
          <p className="text-white text-[15px] font-semibold">{title12}</p>
          <p className="text-white text-[15px] font-semibold">{title13}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
