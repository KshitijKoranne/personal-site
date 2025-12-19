import { cn } from "@/util/utils";
import { motion } from "motion/react";
import { useRouter } from "next/router";
import { HomeIcon } from "./Icons";

const PAGES = {
  home: "/",
  blog: "/blog",
  walls: "/walls",
  quotes: "/quotes",
  software: "/software",
  "about-me": "/about-me",
} as const;

export const MobileNav = () => {
  const router = useRouter();
  const { pathname } = router;

  const navigate = (href: string) => {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "instant" });
    router.push(href);
  };

  return (
    <>
      <motion.div
        layout
        className="font-karla text-tertiary border-tertiary/20 fixed bottom-6 left-1/2 z-100 max-w-[95vw] -translate-x-1/2 rounded-full border bg-light/80 backdrop-blur-md p-1.5 text-sm shadow-xl shadow-black/20 sm:hidden overflow-x-auto no-scrollbar"
      >
        <div className="flex flex-row items-center justify-center gap-1 px-1">
          {Object.entries(PAGES).map(([name, href]) => {
            const isActive =
              href === "/" ? pathname === href : pathname.includes(href);

            return (
              <button
                key={name}
                onTouchStart={() => router.prefetch(href)}
                onTouchEnd={() => navigate(href)}
                onClick={() => navigate(href)}
                className={cn(
                  "hover:text-[#6366F1] pointer-events-auto relative px-2 py-1.5 transition-all duration-100 [-webkit-touch-callout:none] select-none active:scale-90 whitespace-nowrap flex items-center justify-center",
                  {
                    "text-primary hover:text-[#6366F1] font-medium": isActive,
                  },
                )}
              >
                {name === "home" ? (
                  <HomeIcon className="h-4 w-4" />
                ) : name === "about-me" ? (
                  "about"
                ) : (
                  name
                )}

                {isActive ? (
                  <motion.span
                    layoutId="highlight"
                    style={{
                      position: "absolute",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.26, 1, 0.6, 1],
                    }}
                    className="bg-tertiary/10 border-tertiary/10 top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border -z-1"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
