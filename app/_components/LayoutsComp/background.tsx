import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <div className="w-full h-[90vh] fixed top-0 left-0 z-10 border-b-[.5rem] dark:border-white border-black bg-gradient-to-tr from-very-light to-lightII dark:from-very-dark dark:to-darkII">
      <Image
        src={"/svg/darkBlob.svg"}
        alt="backgroundImg"
        width="350"
        height="350"
        className="scale-150 rotate-[30deg] absolute -top-[100px] -left-[100px]"
      />
      <Image
        src={"/svg/darkBlob.svg"}
        alt="backgroundImg"
        width="350"
        height="350"
        className="scale-150 rotate-[30deg] absolute bottom-[20%] right-[20%]"
      />
    </div>
  );
}
