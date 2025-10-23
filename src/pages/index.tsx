import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <PageContent>
        <div className="text-primary flex h-full flex-col gap-6 text-sm max-md:pb-14">
          <div className="flex flex-col">
            <p className="mb-2">
              I&apos;m a pharmaceutical professional by day and a passionate coder by night. I love being part of the global coding revolution — building tools, experimenting with ideas, and turning late-night curiosity into real projects.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">my principles</h3>
            <div className="ml-3 flex flex-col gap-3">
              <div>
                <p className="font-medium">Create more than you consume.</p>
                <p className="text-tertiary text-xs">— The act of building shapes both the world and the builder.</p>
              </div>
              <div>
                <p className="font-medium">Balance isn&apos;t found — it&apos;s built.</p>
                <p className="text-tertiary text-xs">— Between logic and creativity, between work and passion.</p>
              </div>
              <div>
                <p className="font-medium">Progress over perfection.</p>
                <p className="text-tertiary text-xs">— Every unfinished project is still a step forward in understanding.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">experience</h3>

            <div className="text-primary relative ml-3 flex flex-col gap-1.5">
              <div className="flex flex-col">
                <p>
                  <span className="font-medium">Generating AI slop</span>{" "}
                  <span className="font-normal italic">(2024 - present)</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">python</span>{" "}
                  <span className="font-normal italic">(2021 - present)</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">P.G. in Pharmaceutical Sciences</span>
                </p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-medium">Bachelors of Pharmacy</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="leading-none font-bold">projects</h3>

            <div className="ml-3 flex flex-col gap-3">
              <div>
                <p className="font-medium">
                  <a
                    href="https://aztools.in"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AZ Tools
                  </a>
                </p>
                <p className="text-tertiary text-xs">— More than 100 free no-login tools</p>
              </div>
              <div>
                <p className="font-medium">
                  <a
                    href="https://wastemytime.fun"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    wastemytime.fun
                  </a>
                </p>
                <p className="text-tertiary text-xs">— Fun & Interactive time wasting activities</p>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}

const LinkPreview = ({
  href,
  preview,
  children,
}: {
  href: string;
  preview: string;
  children: React.ReactNode;
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div>
      <AnimatePresence>
        {showPreview ? (
          <motion.a
            initial={{ scale: 0.98, x: -4, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={{
              scale: 0.98,

              x: -4,
              opacity: 0,
              transition: { delay: 0.015 },
            }}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onMouseOver={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            transition={{
              duration: 0.25,
              ease: [0.26, 1, 0.6, 1],
            }}
            className="group fixed left-54 z-10 max-w-64 min-w-64 overflow-clip rounded-[8px] border border-black/20 bg-[#E7E5E4] p-0.5 shadow-lg transition-colors duration-100 hover:bg-[#efebe9] max-sm:hidden"
            style={{
              marginTop: `calc(-${
                linkRef.current?.getBoundingClientRect().height ?? 0
              }px)`,
            }}
          >
            <Image
              src={preview}
              alt={`Screenshot of ${href}'s landing`}
              width={512}
              height={272}
              className="bg-tertiary overflow-clip rounded-[6px]"
            />

            <p className="text-tertiary w-full rounded-full px-1.5 pt-1 text-center text-xs font-medium transition-colors duration-100 group-hover:text-blue-700">
              {href.split("://")[1]}
            </p>
          </motion.a>
        ) : null}
      </AnimatePresence>

      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        onMouseOver={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        className="group relative flex w-full max-w-44 flex-col whitespace-nowrap"
      >
        {children}
      </a>
    </div>
  );
};
