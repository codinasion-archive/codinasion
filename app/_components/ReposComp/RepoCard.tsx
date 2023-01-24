"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { GoRepoForked } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import LinkI from "../Link";

type repoCardType = {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
  order?: number[];
};
export default function RepoCard({
  id,
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
  order
}: repoCardType) {
  return (
    <div className={`grid grid-cols-12 mx-auto gap-2 md:gap-8 xl:gap-10 ${style}`}>
      <Image
        src={imgUrl}
        width={"400"}
        height={"400"}
        alt={`${title} repo preview`}
        className={`col-span-12 md:col-span-4 xl:col-span-6 w-full aspect-square rounded-[50px] object-cover dark:shadow-darkShadow-lg shadow-lightShadow-lg ${order&&order.includes(id)?'md:order-1':'md:order-[0]'}`}
        // style={{order: order&&order.includes(id)?1:0}}
      />
      <div className="col-span-12 md:col-span-8 xl:col-span-6 rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <ul className="flex gap-2 text-sm">
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <AiOutlineStar />
            200+
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <GoRepoForked />
            350+
          </li>
          <li className="flex border-2 dark:shadow-darkShadow-sm shadow-lightShadow-sm items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black">
            <HiUserGroup />
            400+
          </li>
        </ul>
        <p className="lg:w-[90%] opacity-80 text-lg md:text-xl">{desc}</p>
        <LinkI
          url={`https://github.com/${repoUrl}`}
          style="rounded-tl-none mt-2 w-full sm:w-fit"

        >
          Contribute
          <BiLinkExternal className="group-hover:scale-125" />
        </LinkI>
      </div>
    </div>
  );
}
