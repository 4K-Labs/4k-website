import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer"

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4k labs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary-bg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
