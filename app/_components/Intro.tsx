import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import LinkI from "./Link";

export default function Intro() {
  return (
    <div className="container py-32 min-h-[90vh] mx-auto flex flex-col items-center justify-center">
      <h1 className="text-[12vw] xl:text-[10rem] leading-[10vw] xl:leading-[9rem] tracking-wider text-center dark:text-white font-extrabold ">
        CODINASION
      </h1>
      <p className="max-w-4xl text-center text-md sm:text-xl text-black/50 dark:text-white/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        suscipit tempora officiis, atque tempore doloremque ad fuga voluptate
        iusto, earum quisquam facere, quidem omnis pariatur. Quas placeat nulla
        et maiores?
      </p>
      <div className="flex justify-center mt-6 gap-2">
        <LinkI
          url={"https://github.com/codinasion"}
          target="_blank"
          style="rounded-tr-none"
        >
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </LinkI>
        <LinkI
          url={"https://github.com/codinasion"}
          target="_blank"
          style="rounded-tl-none"
        >
          Contribute
          <BiLinkExternal className="group-hover:scale-125" />
        </LinkI>
      </div>
    </div>
  );
}
