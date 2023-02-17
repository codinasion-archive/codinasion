import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { GoRepoForked } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import LinkI from "../Link";

type repoCardType = {
  imgUrl: string;
  title: string;
  desc: string;
  repoUrl: string;
  style?: string;
};
export default function RepoCard({
  imgUrl,
  title,
  desc,
  repoUrl,
  style,
}: repoCardType) {
  return (
    <div className={`flex mx-auto gap-10 ${style}`}>
      <Image
        src={imgUrl}
        width={"400"}
        height={"400"}
        alt={`${title} repo preview`}
        className="w-[50%] aspect-square rounded-[50px] object-cover dark:shadow-darkShadow-lg shadow-lightShadow-lg"
      />
      <div className="w-[50%] aspect-square rounded-[50px] flex flex-col items-start gap-3 p-2 justify-center text-black dark:text-white">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <ul className="flex gap-2">
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
        <p className="w-[90%] opacity-80 text-xl">{desc}</p>
        <LinkI
          url={`https://github.com/${repoUrl}`}
          style="rounded-tl-none mt-2"
        >
          Contribute
          <BiLinkExternal className="group-hover:scale-125" />
        </LinkI>
      </div>
    </div>
  );
}
