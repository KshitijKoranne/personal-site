import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PLANT_STAGES = [
  { emoji: "🌱", name: "Seed", threshold: 0 },
  { emoji: "🌿", name: "Sprout", threshold: 5 },
  { emoji: "🌸", name: "Bloom", threshold: 15 },
  { emoji: "🌺", name: "Full Bloom", threshold: 30 },
  { emoji: "🌻", name: "Sunflower", threshold: 50 },
] as const;

const STORAGE_KEY = "plant-pet-clicks";

export const PlantPet = () => {
  const [clicks, setClicks] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Initialize audio and load clicks from localStorage
  useEffect(() => {
    setMounted(true);
    const popAudio = new Audio("/pop.mp3");
    popAudio.volume = 0.3;
    setAudio(popAudio);

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsedClicks = parseInt(saved, 10);
      if (!isNaN(parsedClicks)) {
        setClicks(parsedClicks);
      }
    }
  }, []);

  // Save clicks to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, clicks.toString());
    }
  }, [clicks, mounted]);

  const getCurrentStage = () => {
    for (let i = PLANT_STAGES.length - 1; i >= 0; i--) {
      if (clicks >= PLANT_STAGES[i].threshold) {
        return i;
      }
    }
    return 0;
  };

  const currentStageIndex = getCurrentStage();
  const currentStage = PLANT_STAGES[currentStageIndex];
  const nextStage = PLANT_STAGES[currentStageIndex + 1];
  const clicksToNext = nextStage ? nextStage.threshold - clicks : 0;

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Ignore audio play errors (e.g., user hasn't interacted yet)
      });
    }
  };

  const tooltipText = nextStage
    ? `${currentStage.name} - ${clicksToNext} clicks to ${nextStage.name}!`
    : `${currentStage.name} - Max level reached!`;

  const isMaxLevel = !nextStage;

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicks(0);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="relative flex items-center gap-2">
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-4xl cursor-pointer select-none"
        aria-label="Click to grow the plant"
      >
        <motion.span
          key={currentStageIndex}
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {currentStage.emoji}
        </motion.span>
      </motion.button>
      {isMaxLevel && (
        <motion.button
          onClick={handleRestart}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-sm cursor-pointer select-none text-tertiary hover:text-primary"
          aria-label="Restart plant growth"
          title="Start over"
        >
          ↻
        </motion.button>
      )}
      {showTooltip && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-2 bg-stone-50 border border-primary/10 rounded-md px-3 py-1.5 shadow-lg whitespace-nowrap z-50"
        >
          <p className="text-primary text-xs">{tooltipText}</p>
        </motion.div>
      )}
    </div>
  );
};
