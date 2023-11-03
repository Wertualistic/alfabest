import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Menu({ navbar, lang }) {
  const { data, isLoading, isError, error } = useQuery(["menu"], () => {
    return axios
      .get("https://back.alfabestservis.uz/api/home_content", {
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
    <div
      className={
        navbar
          ? "py-[12px] px-[180px] border-black border-b menuuu"
          : "py-[12px] px-[180px] border-white border-b menuuu"
      }>
      <ul className="flex items-center justify-between">
        {data.datas?.map((itm) => {
          let title = itm.text_ru;
          if (lang === "ru") {
            title = itm.text_ru;
          } else if (lang === "uz") {
            title = itm.text_uz;
          }
          return (
            <li key={itm.id}>
              <NavLink
                to={`/${itm.home_service_link}`}
                className={
                  navbar
                    ? "text-[18px] font-bold text-black"
                    : "text-[18px] font-bold text-white"
                }>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
