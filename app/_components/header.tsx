import React from "react";

type header = {
  title: string;
  subTitle: string;
  style?: string;
};
function Header({ title, subTitle, style }: header) {
  return (
    <header className={` ${style}`}>
      <h2 className="text-3xl md:text-4xl uppercase font-bold dark:text-white">{title}</h2>
      <p className="text-gray-500">{subTitle}</p>
    </header>
  );
}

export default Header;
