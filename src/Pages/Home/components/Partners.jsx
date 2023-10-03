import React from "react";
import foto from "../../../assets/foto2.png";
import logo from "../../../assets/logo.svg";

const Partners = ({ lang }) => {
  let title = "Наши партнеры довольны нами";
  let desc =
    " Если вас заинтересовали наши услуги, станьте нашим <br /> партнером и получите премиальные услуги";

  if (lang === "ru") {
    title = "Наши партнеры довольны нами";
    desc =
      " Если вас заинтересовали наши услуги, станьте нашим <br /> партнером и получите премиальные услуги";
  } else {
    title = "Hamkorlarimiz bizdan mamnun";
    desc =
      "Agar siz bizning xizmatlarimizga qiziqsangiz, bizning <br /> hamkorimiz bo'ling va premium xizmatlarni oling";
  }
  return (
    <div
      className="flex flex-col items-start justify-start px-[180px] py-[60px] w-[100%] h-[700px] mb-[60px] partners"
      style={{
        backgroundImage: `url(${foto})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}>
      <img src={logo} alt="" />
      <h2 className="text-[#fff] text-[34px] font-bold pt-[60px]">{title}</h2>
      <div className="w-[400px] h-[2px] bg-white my-[15px]"></div>
      <p className="text-[#fff] text-[20px] font-medium" dangerouslySetInnerHTML={{__html : desc}}></p>
    </div>
  );
};

export default Partners;
