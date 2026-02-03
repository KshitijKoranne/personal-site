import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ComponentPropsWithRef, useRef, useState } from "react";

interface BlogItem {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const POSTS: BlogItem[] = [
  {
    slug: "shipping-beats-hype",
    title: "shipping beats hype. why small tools win.",
    description: "why building small tools matters more than chasing the next big idea.",
    date: "3 Feb 2026",
  },
  {
    slug: "moltbot-2026",
    title: "the year 2026 exploded with AI agents – meet Moltbot",
    description: "the wild story of Clawdbot's viral rise, chaotic rebrand, and what it means for the future of AI assistants.",
    date: "28 Jan 2026",
  },
  {
    slug: "mole-mac-app",
    title: "Discovering 'Mole': The Minimal Cleaner My Mac Needed",
    description: "my review of a deep cleaning CLI tool that combines the best of CleanMyMac and AppCleaner.",
    date: "28 Dec 2025",
  },
  {
    slug: "trends-dec-2025",
    title: "Living in 2025: The Year AI Agents Took Over",
    description: "reflecting on the rise of the 'silent web' and how agentic workflows changed everything.",
    date: "18 Dec 2025",
  },
  {
    slug: "ai-tools-reflection",
    title: "are AI tools making us lazy thinkers?",
    description: "exploring whether AI tools help or hurt our thinking abilities.",
    date: "23 Oct 2025",
  },
];

export default function Blog() {
  type BlogRef = HTMLAnchorElement | null;
  const [blogRefs] = useState<BlogRef[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredTab = blogRefs[hoveredIndex ?? -1]?.getBoundingClientRect();
  const hoverPadding = ["1.5rem", "0.8rem"];
  const blogPostsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper>
      <PageContent>
        <div className="flex h-full flex-col gap-6 text-sm">
          <p>
            place to empty my mind here and review technology on the way.
          </p>

          <div className="bg-tertiary h-[1px] w-full max-w-sm brightness-175" />

          <motion.div
            ref={blogPostsContainerRef}
            className="relative flex max-w-sm flex-col gap-3"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {POSTS.length > 0 ? (
              POSTS.map((post, i) => (
                <BlogPostItem
                  ref={(el) => {
                    blogRefs[i] = el;
                  }}
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  onPointerEnter={() => setHoveredIndex(i)}
                />
              ))
            ) : (
              <>
                <div className="bg-tertiary/10 border-tertiary/15 text-tertiary flex h-24 w-full items-center justify-center rounded-lg border border-dashed">
                  Nothing here... yet.
                </div>
              </>
            )}

            <AnimatePresence>
              {hoveredTab ? (
                <motion.div
                  className="bg-tertiary/8 absolute -z-1 rounded-lg"
                  initial={{
                    top: `calc(${
                      hoveredTab.top -
                      blogPostsContainerRef.current!.getBoundingClientRect().top
                    }px - (${hoverPadding[1]} / 2))`,
                    left: `calc(-${hoverPadding[0]} / 2)`,
                    width: `calc(${hoveredTab.width}px + ${hoverPadding[0]})`,
                    height: `calc(${hoveredTab.height}px + ${hoverPadding[1]})`,
                    opacity: 0,
                  }}
                  animate={{
                    top: `calc(${
                      hoveredTab.top -
                      blogPostsContainerRef.current!.getBoundingClientRect().top
                    }px - (${hoverPadding[1]} / 2))`,
                    left: `calc(-${hoverPadding[0]} / 2)`,
                    width: `calc(${hoveredTab.width}px + ${hoverPadding[0]})`,
                    height: `calc(${hoveredTab.height}px + ${hoverPadding[1]})`,
                    opacity: 1,
                  }}
                  exit={{
                    top: `calc(${
                      hoveredTab.top -
                      blogPostsContainerRef.current!.getBoundingClientRect().top
                    }px - (${hoverPadding[1]} / 2))`,
                    left: `calc(-${hoverPadding[0]} / 2)`,
                    width: `calc(${hoveredTab.width}px + ${hoverPadding[0]})`,
                    height: `calc(${hoveredTab.height}px + ${hoverPadding[1]})`,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.26, 1, 0.6, 1],
                  }}
                />
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}

export const BlogPostItem = ({
  slug,
  title,
  date,
  description,
  ...rest
}: {
  slug: string;
  title: string;
  date: string;
  description: string;
} & ComponentPropsWithRef<"a">) => (
  <Link
    href={`/blog/${slug}`}
    className="group flex cursor-pointer flex-col text-left"
    {...rest}
  >
    <h5 className="text-primary font-medium">{title}</h5>
    <p className="text-secondary max-w-full truncate">{description}</p>
    <p className="text-secondary mt-1 font-light italic">{date}</p>
  </Link>
);
