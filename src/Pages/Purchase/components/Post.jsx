import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = ({ lang }) => {
  const { data, isLoading, isError, error } = useQuery(["purchasePost"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/purchase_post", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log("fetch error", err));
  });
  if (isError) return console.log("error:", error.message);
  if (isLoading) return "";
  return (
    <>
      {data.datas.map((itm) => {
        let title = itm.title_ru;
        let text = itm.text_ru;
        if (lang === "ru") {
          title = itm.title_ru;
          text = itm.text_ru;
        } else {
          title = itm.title_uz;
          text = itm.text_uz;
        }
        return (
          <>
            <div
              key={itm.id}
              className="w-[500px] pt-[15px] pb-[15px] purchase_content">
              <h2 className="text-[#000] text-[18px] font-normal">{title}</h2>
              <p
                className="text-[#000] text-[18px] font-normal pt-[30px]"
                dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Post;
