"use client";
import { testimonialList } from "@/data/Obj/obj";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialContainer() {
  const [testimonialId, setTestimonialId] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (testimonialId >= testimonialList.length) {
        setTestimonialId(1);
      } else {
        setTestimonialId(testimonialId + 1);
      }
    }, 5000);
  }, [testimonialId]);

  return (
    <div className="">
      <div className="container mx-auto p-2 md:p-5">
        <Header title={"Testimonial"} subTitle={"Some words from our users"} />
      </div>
      <div className="bg-very-light dark:bg-very-dark">
        <div className="container mx-auto grid grid-cols-12 py-5">
          <div className="col-span-12 md:col-span-11">
            {testimonialList.map(
              (item) =>
                item.id === testimonialId && (
                  <TestimonialCard
                    imgUrl={item.imgUrl}
                    name={item.name}
                    profession={item.profession}
                    text={item.text}
                    style={`grayscale testimonial ${item.style}`}
                    key={Math.random() * 50 + item.name}
                  />
                )
            )}
          </div>
          <div className="col-span-12 flex md:col-span-1 md:flex-col mt-5 md:mt-0 justify-center items-center gap-2 ">
            {testimonialList.map((item) => (
              <span
                key={item.name + testimonialId}
                className={`w-5 aspect-square shadow-lg dark:glowI rounded-full border block bg-lightII dark:bg-dark border-black dark:border-white ${
                  testimonialId === item.id ? "glowI" : ""
                }`}
                style={{ opacity: testimonialId === item.id ? 1 : 0.5 }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
