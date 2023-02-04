"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { GoRepoForked } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { IoTelescope } from "react-icons/io5";
import LinkI from "../Links/BtnLink";

type status = {
  forks: number;
  stars: number;
  watchers: number;
};
type repoCardType = {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  order?: number[];
  status: status;
};

export default function RepoCardII({
  id,
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  order,
  status,
}: repoCardType) {
  return (
    <div
      className={`grid grid-cols-12 rounded-[50px] p-2 hover:bg-very-light dark:hover:bg-very-dark mx-auto gap-2 md:gap-8 xl:gap-10 ${style}`}
    >
      <Image
        src={imgUrl}
        width={"400"}
        height={"400"}
        alt={`${title} repo preview`}
        className={`col-span-12 lg:col-span-3 w-full aspect-video lg:aspect-square rounded-[50px] object-cover dark:shadow-darkShadow-lg shadow-lightShadow-lg ${
          order && order.includes(id) ? "md:order-1" : "md:order-[0]"
        }`}
      />
      <div className="container col-span-12 md:col-span-9 rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <ul className="flex gap-2 text-sm">
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <AiOutlineStar />
            {status.stars}
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <GoRepoForked />
            {status.forks}
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <HiUserGroup />
            {status.watchers}
          </li>
        </ul>
        <p className="lg:w-[90%] opacity-80">{desc}</p>
        <div className="flex gap-2 mt-2 lg:gap-5">
          <LinkI
            url={`/repositories/${repoUrl}`}
            style="rounded-tl-none w-full sm:w-fit"
          >
            <IoTelescope className="group-hover:scale-125" />
            ReadMe
          </LinkI>
          <LinkI
            url={`https://github.com/codinasion/${repoUrl}`}
            target="_blank"
            style="w-full sm:w-fit"
          >
            Contribute
            <BiLinkExternal className="group-hover:scale-125" />
          </LinkI>
        </div>
      </div>
    </div>
  );
}
