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
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);

  useEffect(() => {
    setDate(dayjs().tz("Asia/Kolkata"));

    const update = () => {
      setDate(dayjs().tz("Asia/Kolkata"));
    };

    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

  const getActivityStatus = () => {
    if (!date) return "";
    const hour = date.hour();
    if (hour >= 23 || hour < 6) return "I am probably sleeping";
    if (hour >= 9 && hour < 17) return "I am working";
    return "I might be building something";
  };

  const status = getActivityStatus();

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

       <div className="group relative flex flex-col items-end">
        {/* Tooltip-like message on hover */}
        <div className="pointer-events-none absolute bottom-full mb-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
           <div className="rounded-md border border-slate-600 bg-slate-800 px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg">
             {status}
           </div>
        </div>

        <p className="text-primary flex cursor-default flex-row items-center gap-1.5 text-sm">
          {date && (
            <>
              <span className="font-medium">{date.format("h:mm A")}</span>
              <span className="bg-primary block size-[3px] rounded-full" />
              <span className="text-tertiary">{date.format("MMM D, YYYY")}</span>
            </>
          )}
        </p>
      </div>
    </motion.footer>
  );
};
