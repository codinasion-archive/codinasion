import React from "react";

export default function Intro() {
  return (
    <div className="container py-32 min-h-[90vh] mx-auto flex flex-col items-center justify-center">
      <h1 className="text-[12vw] xl:text-[10rem] leading-[10vw] xl:leading-[9rem] tracking-wider text-center dark:text-white font-extrabold dark:animate-glowTextLight animate-glowTextDark">
        CODINASION
      </h1>
      <p className="max-w-4xl text-center text-md sm:text-xl text-gray-700 dark:text-gray-300">
        Codinasion <span className="animate-pulse">❤️</span> Open Source
      </p>
      {/* <div className="flex justify-center mt-6 gap-2">
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
      </div> */}
    </div>
  );
}
