import axios from "axios";
import React, { useEffect, useState } from "react";
import servis from "../../../assets/servis.png";
import ContactInfo from "./ContactInfo";
import { useQuery } from "@tanstack/react-query";
import loadingImg from "/public/loading.svg";

const Left = ({ lang }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [Error, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError, error } = useQuery(["contact"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/contact_page", {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setIsError(false);
  };

  const newForm = {
    full_name: fullName,
    phone: phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://back.alfabestservis.uz/api/contact", newForm, {
        headers: {
          "Accept-Language": "ru",
        },
      })
      .then((response) => {
        console.log("Contact added successfully");
        setIsSuccess(true);
        setIsError(false);
        setFullName("");
        setPhone("");
        openModal();
      })
      .catch((err) => {
        console.error("Failed to add contact", err);
        setIsSuccess(false);
        setIsError(true);
        openModal();
      });
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  let label2 =
    lang === "ru" ? "Введите свое полное имя" : "Toʻliq ismingizni kiriting";
  let label3 =
    lang === "ru"
      ? "Введите свой номер телефона"
      : "Telefon raqamingizni kiriting";
  let placeholder = lang === "ru" ? "Имя, фамилия" : "Ism, Familiya";
  let button = lang === "ru" ? "Отправить" : "Yuborish";
  const wrong1 = lang === "ru" ? "Ошибка" : "Xatolik";
  const wrong2 =
    lang === "ru"
      ? "Пожалуйста, заполните пробелы"
      : "Iltimos, bo'sh maydonlarni to'ldiring";
  const servis1 =
    lang === "ru"
      ? "Ваша заявка успешно отправлена."
      : "Siz muvofaqqiyatli ro'yxatdan o'tdingiz.";
  const servis2 =
    lang === "ru"
      ? "Мы свяжемся с вами в ближайшее время"
      : "Siz bilan yaqin vaqt ichida bog'lanamiz.";
  return (
    <>
      <div className="flex flex-col items-start justify-start w-[651px] form">
        {data.datas?.map((itm) => {
          return (
            <div key={itm.id}>
              <h2 className="text-[#000] text-[36px] font-bold pt-[10px]">
                {itm.title_ru}
              </h2>
              <p
                className="text-[#1B2330] text-[17px] font-normal pt-[20px]"
                dangerouslySetInnerHTML={{ __html: itm.text_ru }}></p>
            </div>
          );
        })}
        <form className="flex flex-col gap-[15px] pt-[30px]">
          <div className="input flex flex-col">
            <label className="text-[#1B2330] text-[15px] font-normal">
              {label2}
            </label>
            <input
              placeholder={placeholder}
              type="text"
              className="w-[396px] rounded-2xl px-[15px] py-[12px] border border-[#1B2330] mt-[10px] bg-transparent"
              value={fullName}
              onChange={handleFullName}
              required
            />
          </div>
          <div className="input flex flex-col">
            <label className="text-[#1B2330] text-[15px] font-normal">
              {label3}
            </label>
            <input
              placeholder="+998"
              type="text"
              className="w-[396px] rounded-2xl px-[15px] py-[12px] border border-[#1B2330] mt-[10px] bg-transparent"
              value={phone}
              onChange={handlePhone}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-[30px] py-[15px] border-none flex items-center justify-center bg-[#28C79E] rounded-2xl w-[143px] text-white">
            {button}
          </button>
        </form>
        <ContactInfo />
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isSuccess ? (
              <div className="succes">
                <div className="succestop">
                  <div>
                    <p className="servis1">{servis1}</p>
                    <p className="servis2">{servis2}</p>
                  </div>
                  <div>
                    <button className="suc-btn" onClick={closeModal}>
                      X
                    </button>
                  </div>
                </div>
                <img className="servis" src={servis} alt="rasm" />
              </div>
            ) : (
              <div className="succes">
                <div className="succestop">
                  <div>
                    <p className="wrong1">{wrong1}</p>
                    <p className="wrong2">{wrong2}</p>
                  </div>
                  <div>
                    <button className="suc-btn" onClick={closeModal}>
                      X
                    </button>
                  </div>
                </div>
                <img className="servis" src={servis} alt="rasm" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Left;
