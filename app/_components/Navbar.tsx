"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsFillSunFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaTwitter, FaDiscord, FaSun, FaMoon } from "react-icons/fa";

import logo from "@/public/logo.png";
import navbarLinks from "@/data/navbarLinks";
import LinkI from "./Link";

// after:w-full after:h-[3px] after:rounded-t-lg after:bg-transparent hover:after:bg-dark after:absolute after:bottom-0 after:left-0

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<boolean>(true);
  const [activeTab, setTab] = useState("home");

  return (
    <nav className="pt-4 fixed top-0 z-30 w-full backdrop-blur-sm dark:text-white">
      <div className="px-2 items-center flex justify-between container mx-auto">
        <Link href={"/"} className="text-3xl font-semibold">
          Codinasion
        </Link>
        <div className="flex items-center gap-4 h-full">
          <ul className="flex">
            <li className="group">
              <Link
                className="p-3 inline-block px-4 hover:text-black dark:hover:text-white relative text-black/80 dark:text-white/80"
                href={"/"}
                onClick={() => setTab("home")}
              >
                HOME
              </Link>
              <span
                className="w-full h-[2px] bg-black dark:bg-white block group-hover:!opacity-100"
                style={{
                  opacity: activeTab === "home" ? 1 : 0,
                }}
              ></span>
            </li>
            <li className="group">
              <Link
                className="p-3 inline-block px-4 hover:text-black dark:hover:text-white relative text-black/80 dark:text-white/80"
                href={"/repositories"}
                onClick={() => setTab("repositories")}
              >
                REPOSITORIES
              </Link>
              <span
                className="w-full group-hover:!opacity-100 h-[2px] bg-black dark:bg-white block"
                style={{
                  opacity: activeTab === "repo" ? 1 : 0,
                }}
              ></span>
            </li>
            <li className="group">
              <Link
                className="p-3 inline-block px-4 hover:text-black dark:hover:text-white relative text-black/80 dark:text-white/80"
                href={"/developers"}
                onClick={() => setTab("dev")}
              >
                DEVELOPERS
              </Link>
              <span
                className="w-full h-[2px] bg-black dark:bg-white block group-hover:!opacity-100"
                style={{
                  opacity: activeTab === "dev" ? 1 : 0,
                }}
              ></span>
            </li>
            <li className="group">
              <Link
                className="p-3 inline-block px-4 hover:text-black dark:hover:text-white relative text-black/80 dark:text-white/80"
                href={"/about"}
                onClick={() => setTab("about")}
              >
                ABOUT
              </Link>
              <span
                className="w-full h-[2px] bg-black dark:bg-white block group-hover:!opacity-100"
                style={{
                  opacity: activeTab === "about" ? 1 : 0,
                }}
              ></span>
            </li>
          </ul>
          <span className="w-[2px] h-6 rounded-full dark:bg-white/50 bg-black/50"></span>
          <button
            className="p-2"
            onClick={() => {
              setTheme(!theme);
              if (!theme) {
                console.log(document.documentElement.classList.remove("dark"));
              } else {
                console.log(document.documentElement.classList.add("dark"));
              }
            }}
          >
            {theme ? <FaMoon className="w-6" /> : <FaSun className="w-6" />}
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

  // return (
  //   <>
  //     {/* <Announcement /> */}
  //     <div className="px-6 py-6 lg:px-8">
  //       <div>
  //         <nav
  //           className="flex h-9 items-center justify-between"
  //           aria-label="Global"
  //         >
  //           <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
  //             <Link href="/" className="-m-1.5 p-1.5" aria-label="Codinasion">
  //               <span className="sr-only">Codinasion</span>
  //               <Image
  //                 src={logo}
  //                 alt="Logo"
  //                 height={32}
  //                 width={32}
  //                 className="rounded-full"
  //               />
  //             </Link>
  //             <Link href="/" className="-m-1.5 p-1.5" aria-label="Codinasion">
  //               <span className="sr-only">Codinasion</span>
  //               <span className="inline-block font-bold text-2xl pl-2">
  //                 Codinasion
  //               </span>
  //             </Link>
  //           </div>
  //           <div className="flex lg:hidden">
  //             <button
  //               type="button"
  //               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  //               onClick={() => setMobileMenuOpen(true)}
  //             >
  //               <span className="sr-only">Open main menu</span>
  //               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  //             </button>
  //           </div>
  //           {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
  //             {navbarLinks.map((item) => (
  //               <Link
  //                 key={item.name}
  //                 href={item.href}
  //                 className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
  //               >
  //                 {item.name}
  //               </Link>
  //             ))}
  //           </div> */}
  //           <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
  //             <Link
  //               href="https://github.codinasion.org/"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //             >
  //               <FaGithub className="inline-block font-bold text-xl" />
  //             </Link>
  //             <Link
  //               href="https://twitter.codinasion.org/"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //             >
  //               <FaTwitter className="inline-block font-bold text-xl" />
  //             </Link>
  //             <Link
  //               href="https://discord.codinasion.org/"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="inline-block rounded-lg mx-2 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //             >
  //               <FaDiscord className="inline-block font-bold text-xl" />
  //             </Link>
  //           </div>
  //         </nav>
  //         <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  //           <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
  //             <div className="flex h-9 items-center justify-between">
  //               <div className="flex">
  //                 <Link
  //                   href="/"
  //                   className="-m-1.5 p-1.5"
  //                   aria-label="Codinasion"
  //                 >
  //                   <span className="sr-only">Codinasion</span>
  //                   <Image
  //                     src={logo}
  //                     alt="Logo"
  //                     height={32}
  //                     width={32}
  //                     className="rounded-full"
  //                   />
  //                 </Link>
  //                 <Link
  //                   href="/"
  //                   className="-m-1.5 p-1.5"
  //                   aria-label="Codinasion"
  //                 >
  //                   <span className="sr-only">Codinasion</span>
  //                   <span className="inline-block font-bold text-2xl pl-2">
  //                     Codinasion
  //                   </span>
  //                 </Link>
  //               </div>
  //               <div className="flex">
  //                 <button
  //                   type="button"
  //                   className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  //                   onClick={() => setMobileMenuOpen(false)}
  //                 >
  //                   <span className="sr-only">Close menu</span>
  //                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  //                 </button>
  //               </div>
  //             </div>
  //             <div className="mt-6 flow-root">
  //               <div className="-my-6 divide-y divide-gray-500/10">
  //                 {/* <div className="space-y-2 py-6">
  //                   {navbarLinks.map((item) => (
  //                     <Link
  //                       key={item.name}
  //                       href={item.href}
  //                       className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
  //                     >
  //                       {item.name}
  //                     </Link>
  //                   ))}
  //                 </div> */}
  //                 <div className="py-6">
  //                   <Link
  //                     href="https://github.codinasion.org/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     className="inline-block rounded-lg mx-4 px-3 my-4 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //                   >
  //                     <FaGithub className="inline-block font-bold text-xl" />
  //                     <span className="px-1">Github</span>
  //                     <span className="sr-only">Github</span>
  //                   </Link>
  //                   <Link
  //                     href="https://twitter.codinasion.org/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     className="inline-block rounded-lg mx-4 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //                   >
  //                     <FaTwitter className="inline-block font-bold text-xl" />
  //                     <span className="px-1">Twitter</span>
  //                     <span className="sr-only">Twitter</span>
  //                   </Link>
  //                   <Link
  //                     href="https://discord.codinasion.org/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     className="inline-block rounded-lg mx-4 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
  //                   >
  //                     <FaDiscord className="inline-block font-bold text-xl" />
  //                     <span className="px-1">Discord</span>
  //                     <span className="sr-only">Discord</span>
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           </Dialog.Panel>
  //         </Dialog>
  //       </div>
  //     </div>
  //   </>
  // );
}
