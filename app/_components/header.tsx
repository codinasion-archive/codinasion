import React from "react";

type header = {
  title: string;
  subTitle: string;
  style?: string;
};
function Header({ title, subTitle, style }: header) {
  return (
    <header className={` ${style}`}>
      <h2 className="text-4xl uppercase font-bold dark:text-white">{title}</h2>
      <p className="text-black/50 mt-2 dark:text-white/50">{subTitle}</p>
    </header>
  );
}

export default Header;
