import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Header from "./header";
import LinkI from "./Links/BtnLink";

function About() {
  return (
    <div className="container items-center justify-center flex flex-col gap-5 p-5 mx-auto py-24 min-h-[90vh]">
      <Header
        title="About us"
        subTitle={`Developers from all over the world`}
        style="text-center"
      />
      <p className="text-xl max-w-4xl w-full mx-auto text-center dark:text-white">
      We are a group of developer/programer from all over the world helps others developer problems by our open-source projects. We provide a wide range of programmings and tools in multiple languages which is created by our independent developers. Our all time favorite repo by developers is Program, offer you every type of programming in multiple languages. And codinasion is open-source it means any developer who know programmings can contribute.
      </p>
      <div className="flex justify-center mt-6 gap-2">
        <LinkI
          url={"https://github.com/codinasion"}
          target="_blank"
          style="rounded-tl-none"
        >
          <FaGithub className="group-hover:scale-125" />
          Join Codinasion
        </LinkI>
      </div>
    </div>
  );
}

export default About;
