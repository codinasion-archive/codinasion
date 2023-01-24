import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Header from "./header";
import LinkI from "./Link";

function About() {
  return (
    <div className="container items-center justify-center flex flex-col gap-5 p-5 mx-auto py-24 min-h-[90vh]">
      <Header
        title="About us"
        subTitle={`A repository contains all of your project's files and each file's revision history.`}
        style="text-center"
      />
      <p className="text-xl max-w-4xl w-full mx-auto text-center dark:text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
        omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
        tenetur quae esse architecto est debitis, praesentium quisquam
        distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
        quod sed dolore fuga est atque, consectetur, dolores possimus dolorem
        molestias odio doloremque quas explicabo incidunt facere nam quasi amet
        cum odit quo commodi quos. Soluta tempora blanditiis, beatae repellendus
        inventore eveniet provident aliquid veritatis velit neque voluptatem
        dolorem amet quidem odio qui, libero nostrum fugit aspernatur repellat
        odit molestias voluptatibus dicta ex accusantium. Minima obcaecati
        soluta quos consectetur incidunt beatae ullam eius.
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

export default About;
