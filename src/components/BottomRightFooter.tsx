import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const BottomRightFooter = () => {
  const { pathname } = useRouter();
  const [date, setDate] = useState(() => dayjs().tz("Asia/Kolkata"));

  useEffect(() => {
    const update = () => {
      setDate(dayjs().tz("Asia/Kolkata"));
    };

    const id = setInterval(update, 60 * 1000);

    return () => clearInterval(id);
  }, []);

  // Hide footer on walls page
  if (pathname === "/walls") {
    return null;
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.26, 1, 0.6, 1], delay: 0.5 }}
      className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-3 max-sm:hidden"
    >
      <div className="flex flex-row gap-6">
        <a
          className="text-tertiary hover:text-[#6366F1] cursor-pointer whitespace-nowrap text-sm transition-colors duration-100"
          href="https://github.com/KshitijKoranne"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="text-tertiary hover:text-[#6366F1] cursor-pointer whitespace-nowrap text-sm transition-colors duration-100"
          href="https://x.com/kshitijkoranne"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </div>

      <p className="text-primary flex cursor-default flex-row items-center gap-1.5 text-sm">
        <span className="font-medium">{date.format("h:mm A")}</span>
        <span className="bg-primary block size-[3px] rounded-full" />
        <span className="text-tertiary">
          {date.format("MMM D, YYYY")}
        </span>
      </p>
    </motion.footer>
  );
};
