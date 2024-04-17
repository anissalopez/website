import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const myFont = localFont({src: './dream.ttf'})



export const metadata: Metadata = {
  title: "Anissa Lopez Personal Website",
  description: "Anissa Lopez personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='bg-brown'>
      
      <body className={clsx("relative min-h-screen")}>
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>

      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
