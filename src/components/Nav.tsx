import { cn } from "@/util/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlantPet } from "./PlantPet";
import AmbientMusic from "./AmbientMusic";

const PAGES = {
  home: "/",
  blog: "/blog",
  walls: "/walls",
  quotes: "/quotes",
  "about-me": "/about-me",
} as const;

export const Nav = () => {
  const { pathname } = useRouter();

  return pathname !== "/blog/[slug]" ? (
    <>
      <div
        key="nav"
        className="font-karla text-tertiary fixed top-10 left-10 z-[100] hidden flex-row gap-6 pb-3 text-sm sm:flex"
      >
        {Object.entries(PAGES).map(([name, href]) => (
          <Link
            href={href}
            key={name}
            className={cn("hover:text-[#6366F1] transition-colors duration-100", {
              "text-primary hover:text-[#6366F1] font-medium":
                href === "/" ? pathname === href : pathname.includes(href),
            })}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="fixed top-10 right-10 z-[100] hidden sm:flex items-center gap-4">
        <AmbientMusic />
        <PlantPet />
      </div>
    </>
  ) : null;
};
