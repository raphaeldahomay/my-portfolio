import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutMeSection from "../components/about_me";
import Projects from "../components/projects";
import Interest from "../components/interest";
import Footer from "../components/footer";
import Head from "next/head";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RPLD</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col items-center gap-8`}>
        <Navbar />
        <Hero />
        <Projects />
        <AboutMeSection />
        <Interest />
        <Footer />
      </div>
    </>
  );
}
