import React from "react";

const ContactInfo = () => {
  return <>
    <div className="flex flex-col p-[30px] mt-[30px] w-[750px] bg-[#F2FCF9] rounded-2xl contactInfo">
        <div className="flex flex-col">
            <label className="text-[#8D9197] text-[14px] font-normal">Телефон</label>
            <div className="flex gap-[30px]">
                <p className="text-[#1B2330] text-[16px] font-normal">+998 99 002 22 23</p>
                <p className="text-[#1B2330] text-[16px] font-normal">+998 93 222 12 32</p>
            </div>
        </div>
        <div className="flex flex-col pt-[15px]">
            <label className="text-[#8D9197] text-[14px] font-normal">Адрес</label>
            <p className="text-[#1B2330] text-[16px] font-normal">Город Ташкент ул. Шота Руставели, 156</p>
        </div>
    </div>
  </>;
};

export default ContactInfo;
