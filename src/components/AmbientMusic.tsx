import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface Track {
  id: string;
  name: string;
  file: string;
  attribution: string;
}

const tracks: Track[] = [
  {
    id: 'ambient-1',
    name: 'Ambient 1',
    file: '/ambient1.mp3',
    attribution: 'Music by <a href="https://pixabay.com/users/original_soundtrack-50153119/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=412767" target="_blank" rel="noreferrer noopener">Viacheslav Starostin</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=412767" target="_blank" rel="noreferrer noopener">Pixabay</a>'
  },
  {
    id: 'ambient-2',
    name: 'Ambient 2',
    file: '/ambient2.mp3',
    attribution: 'Music by <a href="https://pixabay.com/users/lkoliks-48415707/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=331731" target="_blank" rel="noreferrer noopener">Mykola Odnoroh</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=331731" target="_blank" rel="noreferrer noopener">Pixabay</a>'
  }
];

export default function AmbientMusic() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTrackSelect = (track: Track) => {
    if (currentTrack?.id === track.id) {
      // Same track - toggle play/pause
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Different track - switch and play
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.file;
        audioRef.current.play();
      }
    }
  };

  const togglePlayPause = () => {
    if (!currentTrack) return;

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        {/* Music Icon Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ambient music menu"
        >
          <Image
            src="/music.png"
            alt="Music"
            width={32}
            height={32}
            style={{ filter: 'brightness(0)' }}
          />
        </motion.button>

        {/* Play/Pause Button (only show when track is selected) */}
        {currentTrack && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={togglePlayPause}
            className="text-xl cursor-pointer select-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
{isPlaying ? '⏸' : '⏵'}
          </motion.button>
        )}
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 min-w-[280px] z-50"
          >
            <div className="text-sm font-medium mb-2 text-gray-900">
              Ambient Music
            </div>

            <div className="space-y-3">
              {tracks.map((track) => (
                <div key={track.id} className="space-y-1">
                  <button
                    onClick={() => {
                      handleTrackSelect(track);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      currentTrack?.id === track.id
                        ? 'bg-blue-100 text-blue-900'
                        : 'hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{track.name}</span>
                      {currentTrack?.id === track.id && isPlaying && (
                        <span className="text-xs">♪</span>
                      )}
                    </div>
                  </button>

                  <div
                    className="text-[10px] text-gray-600 px-3 leading-tight"
                    dangerouslySetInnerHTML={{ __html: track.attribution }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
