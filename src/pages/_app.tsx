import "./globals.css";

import localFont from "next/font/local";
import { Ysabeau, Karla, Kalam } from "next/font/google";
import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { MobileNav } from "@/components/MobileNav";
import { BottomRightFooter } from "@/components/BottomRightFooter";

const ysabeau = Ysabeau({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-ysabeau",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

const helveticaNeue = localFont({
  weight: "300",
  src: [
    {
      path: "../fonts/helvetica-neue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/helvetica-neue/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-neue",
});

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const click = new Audio("/pop.mp3");
    click.volume = 0.5;
    void click.play().catch(() => null);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Kshitij Koranne</title>
        <meta
          name="description"
          content="pharmaceutical professional by day, passionate coder by night."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="prefetch" fetchPriority="high" href="/main/cside.webp" />
        <link rel="prefetch" fetchPriority="high" href="/main/dimension.webp" />
        <link rel="prefetch" fetchPriority="high" href="/main/incard.webp" />
        <link rel="prefetch" href="/art/figura_thumbnail.webp" />
        <link rel="prefetch" href="/art/spherus_thumbnail.webp" />
      </Head>
      <div
        className={`${helveticaNeue.variable} ${ysabeau.variable} ${karla.variable} ${kalam.variable} @container/screen h-full w-full font-sans antialiased`}
      >
        {/* Background Wallpaper */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          transition={{
            duration: 2,
            ease: [0.26, 1, 0.6, 1],
          }}
          className="fixed top-0 left-0 z-[-3] h-screen w-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wallpaper.png')",
          }}
        />

        <Nav />
        <MobileNav />
        <BottomRightFooter />

        <motion.main
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: [0.26, 1, 0.6, 1],
          }}
          layout
          className="relative max-sm:h-[100svh] max-sm:overflow-y-auto"
        >
          <AnimatePresence mode="popLayout">
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
        </motion.main>
      </div>
    </>
  );
}
