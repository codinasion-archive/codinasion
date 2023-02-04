import React from "react";

type backgroundIIIType = {
  children: React.ReactNode;
  style?: string;
};
export default function BackgroundIII({ children, style }: backgroundIIIType) {
  return (
    <div
      className={`relative bg-gradient-to-br from-transparent mt-10 via-very-light to-light dark:via-very-dark dark:to-dark ${style}`}
    >
      {children}
    </div>
  );
}
