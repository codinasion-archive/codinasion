/* eslint-disable react/jsx-no-undef */
"use client";
import { theContext } from "app/_context/theContext";
import { fetchDaves } from "app/_functions/processFetch";
import Link from "next/link";
import React, { lazy, Suspense, useContext } from "react";
import Button from "../Button";
import Header from "../header";
import Loading from "../Loading/Loading";
// import Dev from "./DevCard";
const Dev = lazy(() => import("./DevCard"));

type devsContainerType = {
  forward: boolean;
  header: boolean;
};
export default function Devs({
  forward = true,
  header = true,
}: devsContainerType) {
  const context: any = useContext(theContext);
  const {
    devs: { data },
  } = context.values;

  return data.length >= 0 ? (
    <div className="lg:container mx-auto min-h-[90vh] py-24 px-2 flex justify-center items-end gap-5 flex-col">
      {header && (
        <Header
          title={"Our Contributors"}
          subTitle={"Developers who contributes in our open-source projects"}
          style={"text-right"}
        />
      )}
      <Suspense fallback={<Loading />}>
        <div className="w-full p-2 md:p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9  xl:grid-cols-12 bg-very-light dark:bg-very-dark">
          {data.slice(0, forward ? 30 : -1).map((item: any) => (
            <Dev
              imgUrl={item.avatar_url}
              devName={item.login}
              key={item.id + Math.random() * 5}
            />
          ))}
        </div>
      </Suspense>
      {forward ? (
        <Link
          href={"/developers"}
          className="w-full p-5 rounded-[50px] dark:text-white dark:shadow-darkShadow-lg shadow-lightShadow-lg flex flex-wrap justify-end items-start uppercase dark:hover:text-white hover:text-lightII bg-very-light dark:bg-very-dark"
        >
          Expend...
        </Link>
      ) : (
        <Button
          val={{ devs: context.values.devs, dispatch: context.dispatch }}
          fun={fetchDaves}
        >
          Expend...
        </Button>
      )}
    </div>
  ) : (
    <Loading />
  );
}
