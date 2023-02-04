import React from "react";
import { FunctionExpression } from "typescript";

type buttonType = {
  style?: string;
  children: React.ReactNode;
  val: any;
  fun: (devs: any, dispatch: any)=> Promise<void>;
};

export default function Button({
  style,
  children,
  fun,
  val,
}:buttonType) {
  // console.log(val)
  return (
    <button
      className={`w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase hover:text-lightII dark:hover:text-darkII bg-very-light dark:bg-very-dark focus:bg-dark ${style}`}
      onClick={() => fun(val.devs, val.dispatch)}
    >
      {children}
    </button>
  );
}
