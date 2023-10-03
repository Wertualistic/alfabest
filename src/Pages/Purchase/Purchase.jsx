import React from "react";
import Content from "./components/Content";
import Post from "./components/Post";

const Purchase = ({ lang }) => {
  return (
    <div className="content">
      <div className="flex flex-col items-start justify-start w-100 px-[180px] purchase">
        <Content lang={lang} />
        <Post lang={lang} />
      </div>
    </div>
  );
};

export default Purchase;
