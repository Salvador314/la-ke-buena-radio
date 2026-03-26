import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Ke Buena Radio",
  description: "Escucha La Ke Buena en vivo. Disfruta de la mejor programación, locutores destacados y las últimas noticias de la comunidad en Garden City. ¡Sintonízanos ya!",
};

export default function GlobalLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
        </html>
    )
}