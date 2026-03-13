import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
  );
}
