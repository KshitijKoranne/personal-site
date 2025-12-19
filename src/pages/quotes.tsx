import { PageContent } from "@/components/PageContent";
import { PageWrapper } from "@/components/PageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface Quote {
  id: string;
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  {
    id: "1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: "2",
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    id: "3",
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    id: "4",
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    id: "5",
    text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    id: "6",
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    id: "7",
    text: "I think it is possible for ordinary people to choose to be extraordinary.",
    author: "Elon Musk",
  },
  {
    id: "8",
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    id: "9",
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    id: "10",
    text: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
  },
];

function QuoteItem({
  quote,
  isHearted,
  onToggleHeart,
}: {
  quote: Quote;
  isHearted: boolean;
  onToggleHeart: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3 py-3"
    >
      <div className="flex-1">
        <p className="leading-relaxed break-words">
          &quot;{quote.text}&quot; — {quote.author}
        </p>
      </div>
      <motion.button
        onClick={onToggleHeart}
        className="flex-shrink-0 mt-0.5"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isHearted ? "#ef4444" : "none"}
          stroke={isHearted ? "#ef4444" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={
            isHearted
              ? {
                  scale: [1, 1.3, 1],
                  transition: { duration: 0.3 },
                }
              : {}
          }
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

export default function Quotes() {
  const [heartedQuotes, setHeartedQuotes] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load hearted quotes from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("heartedQuotes");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setHeartedQuotes(new Set(parsed));
      } catch (e) {
        console.error("Failed to parse hearted quotes:", e);
      }
    }
    setMounted(true);
  }, []);

  // Save hearted quotes to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "heartedQuotes",
        JSON.stringify(Array.from(heartedQuotes))
      );
    }
  }, [heartedQuotes, mounted]);

  const toggleHeart = (quoteId: string) => {
    setHeartedQuotes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(quoteId)) {
        newSet.delete(quoteId);
      } else {
        newSet.add(quoteId);
      }
      return newSet;
    });
  };

  // Sort quotes: hearted ones first (maintaining their original order), then unhearted ones
  const sortedQuotes = [...QUOTES].sort((a, b) => {
    const aHearted = heartedQuotes.has(a.id);
    const bHearted = heartedQuotes.has(b.id);

    if (aHearted && !bHearted) return -1;
    if (!aHearted && bHearted) return 1;
    return 0;
  });

  return (
    <PageWrapper>
      <PageContent>
        <div className="flex h-full flex-col gap-6 text-sm">
          <div className="flex flex-col">
            <p className="mb-2">
              i had a habit of collecting quotes in my childhood which i still
              find inspiring. some quotes which are good in my opinion are
              collected here.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            <AnimatePresence mode="popLayout">
              {sortedQuotes.map((quote) => (
                <QuoteItem
                  key={quote.id}
                  quote={quote}
                  isHearted={heartedQuotes.has(quote.id)}
                  onToggleHeart={() => toggleHeart(quote.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  );
}
