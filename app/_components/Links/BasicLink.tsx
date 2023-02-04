import Link from "next/link";
import React, { Children } from "react";

type bLinkType = {
  href: string;
  target?: string;
  children: React.ReactNode;
  style?: string;
};

export default function BasicLink({
  href,
  target = "_self",
  children,
  style,
}: bLinkType) {
  return (
    <Link href={href} target={target} className={`underline hover:opacity-50 text-black dark:text-white ${style}`}>
      {children}
    </Link>
  );
}
