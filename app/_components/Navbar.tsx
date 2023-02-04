"use client";

import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.png";
import LinkI from "./Links/BtnLink";
import { theContext } from "app/_context/theContext";
import setThemeFun from "app/_functions/functions";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Example(props: any) {
  const [activeTab, setTab] = useState<string>("home");
  const [scroll, setScroll] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const context: any = useContext(theContext);
  const segments = useSelectedLayoutSegments();

  useEffect(() => {
    segments.length > 0 ? setTab(segments[0]) : setTab("home");
  }, [segments]);

  useLayoutEffect(() => {
    setThemeFun(context.dispatch);
  }, []);

  useEffect(() => {
    window.onscroll = () => setScroll(scrollY);
  }, []);

  return (
    <nav
      className={`py-4 fixed top-0 z-30 w-full backdrop-blur-sm dark:text-white bg-very-light ${
        scroll > 0 ? "dark:bg-very-dark bg-very-light" : "bg-transparent"
      }`}
    >
      <div className="px-3 items-center flex justify-between lg:container mx-auto">
        <div className="text-xl font-semibold uppercase flex gap-2 items-center">
          <Link
            href={"/"}
            className={`border-2 p-[3px] rounded-full dark:border-white border-black glowII`}
          >
            <Image
              src={logo}
              alt={"brand avatar"}
              width={"100"}
              height={"100"}
              className={`rounded-full w-8 aspect-square animate-wiggle`}
            />
          </Link>

          <span className="flex flex-col">
            <Link href={"/"} className="">
              Codinasion
            </Link>
            <span className="text-xs font-light">
              Codinasion ❤️ Open Source
            </span>
          </span>
        </div>

        <div className=" hidden lg:flex items-center md:gap-2 xl:gap-4 h-full">
          <ul className="flex">
            <li className="group">
              <Link
                className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative ${
                  activeTab === "home"
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={"/"}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative ${
                  activeTab === "events"
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={"/events"}
              >
                EVENTS
              </Link>
            </li>
            <li className="group">
              <Link
                className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative ${
                  activeTab === "repositories"
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={"/repositories"}
              >
                REPOSITORIES
              </Link>
            </li>
            <li className="group">
              <Link
                className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative ${
                  activeTab === "developers"
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={"/developers"}
              >
                DEVELOPERS
              </Link>
            </li>
            <li className="group">
              <Link
                className={`p-3 inline-block px-4 hover:text-black dark:hover:text-white relative ${
                  activeTab === "about"
                    ? "text-black dark:text-white animate-glowTextDark dark:animate-glowTextLight"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                href={"/about"}
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>
          <button
            className="p-2"
            onClick={() => {
              setThemeFun(context.dispatch);
            }}
          >
            {context.values.theme === "dark" ? (
              <FaSun className="w-6" />
            ) : (
              <FaMoon className="w-6" />
            )}
          </button>
          <LinkI
            url={"https://github.com/codinasion"}
            target="_blank"
            style="rounded-tr-none"
          >
            <FaGithub className="group-hover:scale-125" />
            GITHUB
          </LinkI>
        </div>
      </div>
    </nav>
  );
}
