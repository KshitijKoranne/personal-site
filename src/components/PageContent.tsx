import { PAGE_TRANSITION } from "@/util/const";
import { cn } from "@/util/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";

export const PageContent = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function PageContent({ children, ...props }, ref) {

    return (
      <motion.div
        className={cn(
          "max-xs:p-8 sticky top-0 flex h-min w-full flex-col p-10 max-sm:relative max-sm:min-h-min max-sm:overflow-y-auto max-sm:!pt-10 max-sm:pb-32 sm:max-w-lg sm:min-w-md sm:pt-16",
          props.className,
        )}
      >
        <motion.h1
          layoutId="header"
          layout="position"
          className="text-primary xs:mt-4 mt-0 mb-1 text-3xl font-bold"
          style={{ fontFamily: "var(--font-kalam)" }}
        >
          kshitij koranne <span className="text-tertiary font-sans font-normal text-xl">(kskendsup)</span>
        </motion.h1>

        <motion.div
          ref={ref}
          initial={PAGE_TRANSITION.initial}
          animate={PAGE_TRANSITION.animate}
          exit={PAGE_TRANSITION.exit}
          transition={PAGE_TRANSITION.transition}
          {...props}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  },
);
