import "./globals.css";
import Navbar from "./_components/Navbar";
import { Rubik } from "@next/font/google";
import Background from "./_components/LayoutsComp/background";
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
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`dark:bg-very-dark bg-purple-100  ${rubik.className}`}>
        <Background />
        <Navbar />
        <main className="relative z-20">{children}</main>
      </body>
    </html>
  );
}
