import Link from "next/link";
import React from "react";
import Header from "../header";
import Dev from "./Dev";

const imgUrl = `https://images.unsplash.com/photo-1606952222415-e1cf6bc7d0d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`;

export default function DevsContainerI() {
  return (
    <div className="container mx-auto min-h-[90vh] py-24 px-2 flex justify-center items-end gap-5 flex-col">
      <Header
        title={"Our Contributors"}
        subTitle={"Developers who contributes in our open-source projects"}
        style="text-right"
      />
      <div className="w-full p-2 md:p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-very-light dark:bg-very-dark">
        {Array.from(Array(40).keys()).map((item) => (
          <Dev
            imgUrl={imgUrl}
            devName={"0ME9A"}
            key={Math.random() * 20 + item}
          />
        ))}
      </div>
      <Link
        href={"/developers"}
        className="w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase dark:hover:text-white hover:text-lightII bg-very-light dark:bg-very-dark"
      >
        Expend...
      </Link>
    </div>
  );
}
