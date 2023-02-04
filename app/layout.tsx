"use client";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Rubik } from "@next/font/google";
import Background from "./_components/LayoutsComp/background";
import FooterContainer from "./_components/FooterComp/FooterContainer";
import { useEffect, useReducer } from "react";
import { theContext } from "./_context/theContext";
import reducer from "./_context/theReducer";
import initialState from "./_context/theInitial";
import { fetchDaves } from "./_functions/processFetch";
const rubik = Rubik({
  weight: ["300", "400", "600", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => {
      fetchDaves(values.devs, dispatch);
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <head />
      <body className={`dark:bg-very-dark bg-purple-100  ${rubik.className}`}>
        <theContext.Provider value={{ values, dispatch }}>
          <Background />
          <Navbar />
          <main className="relative z-20">{children}</main>
          <FooterContainer />
        </theContext.Provider>
      </body>
    </html>
  );
}
