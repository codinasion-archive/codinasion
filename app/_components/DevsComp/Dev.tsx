import Image from "next/image";
import Link from "next/link";
import React from "react";

type DevType = {
  imgUrl: string;
  devName: string;
};
export default function Dev({ imgUrl, devName }: DevType) {
  return (
    <Link
      href={`/developers/${devName}`}
      className="space-y-1 p-2 hover:shadow-lg border-2 border-transparent hover:border-darkII relative group dark:shadow-dark rounded-2xl overflow-hidden w-full hover:bg-light dark:hover:bg-dark"
    >
      <Image
        src={imgUrl}
        alt={`${devName} profile avatar`}
        width={"100"}
        height={"100"}
        className={`w-[80px] aspect-square rounded-full group-hover:shadow-2xl mx-auto object-cover  scale-90 group-hover:scale-100 group-hover:brightness-125`}
      />
      <p className="opacity-90 hover:opacity-100 relative text-center">
        {devName}
      </p>
    </Link>
  );
}
