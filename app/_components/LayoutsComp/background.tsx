"use client";
import { theContext } from "app/_context/theContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function Background() {
  const context:any = useContext(theContext)
  
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-10 border-b-[.5rem] dark:border-white border-black bg-gradient-to-tr from-very-light to-lightII dark:from-very-dark dark:to-darkII">
      <Image
        src={
          context.values.theme === "dark"
            ? "/svg/darkBlob.svg"
            : "/svg/lightBlob.svg"
        }
        alt="backgroundImg"
        width="350"
        height="350"
        className="scale-150 rotate-[30deg] absolute -top-[100px] -left-[100px]"
      />
      <Image
        src={
          context.values.theme === "dark"
            ? "/svg/darkBlob.svg"
            : "/svg/lightBlob.svg"
        }
        alt="background blob"
        width="350"
        height="350"
        className="hidden sm:block scale-50 sm:scale-100 md:scale-125 lg:scale-150 rotate-[30deg] absolute bottom-[20%] right-[20%]"
      />
    </div>
  );
}
