import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { PrismicPreview } from '@prismicio/next'
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient, repositoryName } from "@/prismicio";


export const myFont = localFont({src: './dream.ttf'})


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
    // openGraph: {
    //   images: [settings.data.og_image?.url || ""],
    // },
  };
}

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
