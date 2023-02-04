"use client";
import Box from "app/_components/LayoutsComp/Box";
import BasicLink from "app/_components/Links/BasicLink";
import LinkI from "app/_components/Links/BtnLink";
import Loading from "app/_components/Loading/Loading";
import Link from "next/dist/client/link";
import Image from "next/image";
import React, { useEffect, useReducer, useState } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import {
  FaBalanceScale,
  FaEye,
  FaGithub,
  FaRegHandshake,
  FaStar,
} from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { IoClose, IoTelescope } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { dateFun, fetchData, imgUrl } from "app/_functions/functions";

type initialStateType = {
  aside: boolean;
  repoData: string[] | null;
};
type actionType = {
  type: string;
  payload: any;
};

const initialState: initialStateType = {
  aside: false,
  repoData: null,
};

const reducer: any = (state: any, action: actionType) => {
  switch (action.type) {
    case "ASIDE":
      return { ...state, aside: !action.payload };
    case "DATA":
      return {
        ...state,
        repoData: action.payload.data,
      };
    default:
      return state;
  }
};
export default function Page({ params }: any) {
  const [state, dispatch]: [initialStateType | any, (e: actionType) => void] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const url = `https://api.github.com/repos/codinasion/${params.repo}`;
    const processData = async () => {
      const data = await fetchData(url);
      dispatch({
        type: "DATA",
        payload: { data },
      });
    };

    processData();
  }, [params]);

  return state.repoData !== null ? (
    <div className="bg-very-light dark:bg-very-dark">
      <div className="lg:container mx-auto pt-0 pb-2 space-y-3">
        <div className="relative">
          <Image
            src={imgUrl}
            height="2000"
            width={"2000"}
            alt="repo avatar"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="flex gap-3 relative h-auto">
          <div
            className="p-2 w-full lg:col-span-3 pb-52 md:!blur-0"
            style={{ filter: `blur(${state.aside ? "5px" : 0})` }}
          >
            <header className={``}>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase py-2 font-bold dark:text-white">
                  {state.repoData.name}
                </h1>
                <IoMdMore
                  className="text-white md:hidden hover:scale-125 cursor-pointer text-2xl"
                  onClick={() =>
                    dispatch({ type: "ASIDE", payload: state.aside })
                  }
                />
              </div>
              <hr className="border-gray-500/50" />
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {state.repoData.description}
              </p>
            </header>
            <article className={`mt-5`}>
              <h2 className="text-xl font-semibold dark:text-white">
                {`Contribution`}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                If you&apos;re looking for a way to contribute, you can scan
                through our existing issues for something to work on. We want to
                make contributing to this project as easy and transparent as
                possible, and we are grateful to the community for contributing
                bug fixes and improvements. Read our{" "}
                <BasicLink
                  href={
                    "https://github.com/codinasion/program/blob/master/CONTRIBUTING.md"
                  }
                  target="_blank"
                >
                  Contributing Guide
                </BasicLink>{" "}
                how you can take part in improving.
              </p>
            </article>
            <article className={`mt-5`}>
              <h2 className="text-xl font-semibold dark:text-white">
                {`Join us in discussions`}
              </h2>
              {/* <hr className="border-gray-500/50"/> */}
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {`We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like help troubleshooting a PR, have a great new idea, or want to share something amazing, join us in the `}
                <BasicLink
                  href="https://github.com/orgs/codinasion/discussions"
                  target={"_blank"}
                >
                  Discussions
                </BasicLink>
                .
              </p>
            </article>
            <figure className="text-white mt-10 flex flex-col md:flex-row gap-5 items-center">
              <Image
                src={"/img/octocat.png"}
                width={"600"}
                height={"600"}
                alt="Thanks avatar"
                className={
                  "w-full h-[150px] md:h-auto md:max-w-[300px] md:w-[30%] object-cover md:aspect-square rounded-2xl shadow-lightShadow-md dark:shadow-darkShadow-md"
                }
              />
              <figcaption className="w-full">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Thanks for contributing 💜
                </h2>
                <hr className="border-gray-500/50 my-2" />
                <p className="text-gray-700 dark:text-gray-300">
                  Thanks for all your contributions and efforts
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We thank you being part of our ✨ commUnity ✨ !
                </p>
              </figcaption>
            </figure>
          </div>
          <div
            className="lg:p-5 absolute md:block md:relative right-0 top-0 w-full bg-very-light dark:bg-very-dark sm:w-[500px] h-fit overflow-y-auto lg:col-span-1 md:!scale-100 md:!opacity-100 dark:text-white origin-top-right"
            style={{
              transform: `scale(${state.aside ? 1 : 0})`,
              opacity: state.aside ? 1 : 0,
            }}
          >
            <div className="p-2 space-y-2 relative">
              <IoClose
                className="text-white absolute right-2 top-2 md:hidden hover:scale-125 cursor-pointer text-2xl"
                onClick={() =>
                  dispatch({ type: "ASIDE", payload: state.aside })
                }
              />
              <span className="flex gap-2 items-center">
                <FaStar />
                {state.repoData.stargazers_count} Stars
              </span>
              <span className="flex gap-2 items-center">
                <BiGitRepoForked />
                {state.repoData.forks} Forks
              </span>
              <span className="flex gap-2 items-center">
                <FaEye />
                {state.repoData.watchers} Watching
              </span>
            </div>
            <div className="p-2 gap-2 grid">
              <Link
                href={state.repoData.homepage}
                className="group flex gap-2 items-center"
                target={"_blank"}
              >
                <GiEarthAmerica className="group-hover:scale-125" /> Website
              </Link>
              <Link
                href={`https://github.com/codinasion/${state.repoData.name}`}
                className="group flex gap-2 items-center"
                target={"_blank"}
              >
                <FaGithub className="group-hover:scale-125" /> GitHub
              </Link>
              <Link
                href={`https://github.com/codinasion/${state.repoData.name}/blob/master/README.md`}
                className="group flex gap-2 items-center"
                target={"_blank"}
              >
                <IoTelescope className="group-hover:scale-125" /> ReadMe
              </Link>

              <Link
                href={`https://github.com/codinasion/${state.repoData.name}/blob/master/LICENSE.md`}
                className="group flex gap-2 items-center"
                target={"_blank"}
              >
                <FaBalanceScale className="group-hover:scale-125" /> License
              </Link>
              <Link
                href={`https://github.com/codinasion/${state.repoData.name}/blob/master/CODE_OF_CONDUCT.md`}
                className="group flex gap-2 items-center"
                target={"_blank"}
              >
                <FaRegHandshake className="group-hover:scale-125" /> Code of
                conduct
              </Link>
            </div>
            <Box title="Topic">
              <ul className="flex flex-wrap gap-1">
                {state.repoData.topics.map((item: string) => (
                  <li
                    key={Math.random() * 59 + "langs"}
                    className="p-2 text-sm py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Box>

            <Box title="Last Update">
              <span className="block text-sm opacity-50">
                {dateFun("2023-01-21T16:52:34Z")}
              </span>
            </Box>

            <Box title="Contributor">
              <div className="flex flex-wrap">
                <p className="text-red-500">Requires authentication by admin</p>

                {/* {Array.from(Array(20).keys()).map((item) => (
                <BasicDev
                  imgUrl={imgUrl}
                  devName={"0ME9A"}
                  key={Math.random() * 20 + item}
                />
              ))}
              <BasicLink
                href={"/developers/codinasion"}
                style="h-full pt-5 p-2 text-sm"
              >
                Expend
              </BasicLink> */}
              </div>
            </Box>

            <Box title={""}>
              <LinkI
                url={`https://github.com/codinasion/${state.repoData.name}`}
                target="_blank"
              >
                <FaGithub className="group-hover:scale-125" />
                Contribute
              </LinkI>
              <LinkI url={`https://github.com/codinasion`} target="_blank">
                <FaGithub className="group-hover:scale-125" />
                Join Codinasion
              </LinkI>
            </Box>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
