import React from "react";
import { FaGitAlt } from "react-icons/fa";

type cardType = {
  title: string;
  text: string;
  children?: React.ReactNode;
  style?: string;
};
export default function Cards({ title, text, children, style }: cardType) {
  return (
    <article
      className={`w-full p-6 xl:p-8 dark:text-white rounded-[50px] bg-very-light dark:bg-dark text-center shadow-lg h-fit ${style}`}
    >
      {children}
      <h3 className="text-3xl font-medium mt-5">{title}</h3>
      <p className="mt-3 opacity-70">{text}</p>
    </article>
  );
}
