import { siteMap, SocialMedia, topRepos } from "@/data/navbarLinks";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import LinkI from "../Links/BtnLink";
import Langs from "./Langs";

export default function FooterContainer() {
  return (
    <div className={`bg-light dark:bg-darkII relative z-20`}>
      <Langs />
      <footer className="lg:container mx-auto grid grid-cols-12 gap-5 py-16 p-2 md:p-5">
        <div className="col-span-12 md:col-span-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white ">
              CODINASION
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              earum hic magni, voluptatibus harum iusto accusantium. Odit
              voluptatem nobis cum. Possimus nobis, fuga doloribus fugit unde
              similique corrupti nihil!`}
            </p>
          </div>
          <LinkI
            url={`https://github.com/codinasion`}
            style="rounded-tl-none mt-5 w-full sm:w-fit"
          >
            Contribute
            <BiLinkExternal className="group-hover:scale-125" />
          </LinkI>
        </div>
        <ul className="col-span-12 md:col-span-3 dark:text-white">
          <li className="font-semibold">Site Map</li>
          {siteMap &&
            siteMap.map((item) => (
              <li
                key={Math.random() * 50 + item.name}
                className="text-gray-700 dark:text-gray-300"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
        </ul>
        <ul className="col-span-12 md:col-span-3 dark:text-white">
          <li className="font-semibold">Top Repos</li>
          {topRepos &&
            topRepos.map((item) => (
              <li
                key={Math.random() * 50 + item.name}
                className="text-gray-700 dark:text-gray-300"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
        </ul>
        <div className="py-5 text-white border-t col-span-12 flex text-3xl gap-2">
          {SocialMedia &&
            SocialMedia.map((item) => (
              <Link
                key={Math.random() * 50 + "social"}
                href={item.href}
                className="hover:scale-125"
              >
                {item.name.toLowerCase() === "github" && <FaGithub />}
                {item.name.toLowerCase() === "twitter" && <FaTwitter />}
                {item.name.toLowerCase() === "discord" && <FaDiscord />}
              </Link>
            ))}
        </div>
      </footer>
    </div>
  );
}
