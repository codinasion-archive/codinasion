import React from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "app/_components/Loading/Loading";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineArrowBackIos, MdOutlineMyLocation } from "react-icons/md";
import LinkI from "app/_components/Links/BtnLink";
import Button from "app/_components/Button";

const imgUrl =
  "https://images.unsplash.com/photo-1605557626569-8e90be178386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

export default async function Page({ params }: any) {
  const fetchData = await fetch(`https://api.github.com/users/${params.dev}`);
  const res = await fetchData.json();

  return fetchData.status === 200 ? (
    <div className="p-2 md:p-10 lg:p-16 justify-center flex flex-col md:flex-row gap-3 md:gap-5 lg:container mx-auto bg-gradient-to-tr from-light via-very-light to-very-light dark:from-darkII dark:via-very-dark relative dark:to-very-dark bg-darkII rounded-2xl lg:rounded-[50px] my-20 mb-2">
      <LinkI
        url={"/developers"}
        style={`md:self-start order-5 md:absolute md:top-5 md:left-5`}
      >
        <MdOutlineArrowBackIos />
        Back
      </LinkI>
      <div className="w-[20%] md:w-[300px]">
        <Image
          src={res.avatar_url}
          alt="dev profile picture"
          width="400"
          height="400"
          className={`md:w-full aspect-square rounded-full object-cover shadow-lightShadow-md dark:shadow-darkShadow-md md:shadow-lightShadow-lg md:dark:shadow-darkShadow-lg`}
        />
      </div>
      <article
        className={`dark:text-white pt-0 md:pt-20 w-full md:w-[60%] lg:w-[40%]`}
      >
        <h1 className={`text-2xl font-semibold`}>
          {res.name}{" "}
          {res.type === "Organization" && (
            <span className="text-sm text-green-500 font-light">(org)</span>
          )}
        </h1>
        <h2 className={`text-gray-500`}>{res.login}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{res.bio}</p>
        <table
          className={`w-full bg-light/50 dark:bg-dark/50 rounded-xl mt-2 md:mt-5 text-left`}
        >
          <thead>
            <tr>
              <th className={`p-5 pb-0`}>Repo</th>
              <th className={`p-5 pb-0`}>Followers</th>
              <th className={`p-5 pb-0`}>Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`p-5 pt-1`}>{res.public_repos}</td>
              <td className={`p-5 pt-1`}>{res.followers}</td>
              <td className={`p-5 pt-1`}>{res.following}</td>
            </tr>
          </tbody>
        </table>
        <div
          className={`w-full rounded-xl mt-2 md:mt-5 p-3 gap-3 text-left grid grid-cols-3`}
        >
          {res.location != null && (
            <address
              className={`col-span-3 sm:col-span-1 group flex gap-2 items-center`}
            >
              <MdOutlineMyLocation className={`group-hover:scale-125`} />
              {res.location}
            </address>
          )}
          {res.blog !== null && (
            <LinkI
              url={res.blog}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-2 !p-0 border-none w-fit !shadow-none`}
            >
              <GiEarthAsiaOceania className={`group-hover:scale-125`} />
              Website
            </LinkI>
          )}
          {res.twitter_username !== null && (
            <LinkI
              url={`http://twitter.com/${res.twitter_username}`}
              target="_blank"
              style={`!bg-transparent col-span-3 sm:col-span-1 !p-0 border-none w-fit !shadow-none`}
            >
              <FaTwitter className={`group-hover:scale-125`} />
              Twitter
            </LinkI>
          )}
          <LinkI
            url={`https://github.com/${res.login}`}
            target="_blank"
            style={`!bg-transparent !p-0 col-span-3 sm:col-span-2 border-none w-fit !shadow-none`}
          >
            <FaGithub className={`group-hover:scale-125`} /> GitHub
          </LinkI>
        </div>
      </article>
    </div>
  ) : (
    <Loading />
  );
}
