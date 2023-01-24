import Image from "next/image";
import { useEffect, useState } from "react";

type testimonialType = {
  imgUrl: string;
  name: string;
  profession: string;
  text: string;
  style?: string;
};
export default function TestimonialCard({
  imgUrl,
  name,
  profession,
  text,
  style,
}: testimonialType) {

  const [state, setState] = useState(0)

  return (
    <div className={`grid grid-cols-12 p-2 gap-6 md:gap-0 container mx-auto left-[500px] ${style}`}>
      <div className={"md:col-span-5 col-span-12 w-28 md:w-full rounded-[50px] aspect-square"}>
        <Image
          src={imgUrl}
          width="400"
          height={"400"}
          alt={`Testimonial by ${name}`}
          className="md:scale-75 object-cover w-full aspect-square rounded-[50px] shadow-lightShadow-xl dark:shadow-darkShadow-xl"
        />
      </div>
      <article className="col-span-12 md:col-span-7 px-2 pr-[10%] flex text-black dark:text-white flex-col justify-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h3 className="opacity-50">{profession}</h3>
        <p className="opacity-90 mt-2">{text}</p>
      </article>
    </div>
  );
}
