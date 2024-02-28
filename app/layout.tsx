import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer"


//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4k labs",
  description:
    "4KLabs is an R&D laboratory at Addis Ababa University under the computer science Department specializing in the areas of AI, Robotics, IoT, and Software Development. In 4K Labs curiosity drives innovation (Robotics.Things.Dev)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-bg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
