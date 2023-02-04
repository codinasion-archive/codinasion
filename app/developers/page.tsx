"use client";
import Devs from "app/_components/DevsComp/Devs";
import TestimonialContainer from "app/_components/TestimonialComp/TestimonialContainer";

export default function Page() {
  return (
    <div className="relative z-10">
      <Devs forward={false} header={false} />
      <TestimonialContainer />
    </div>
  );
}
