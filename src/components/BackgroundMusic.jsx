import React, { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";

// If you have a file, put it at src/assets/music/arcade-loop.mp3
// Otherwise the component will not attempt to play.
import bg from "../assets/music/Imagine-Dragons-Enemy.mp3";

export default function BackgroundMusic() {
  const soundRef = useRef(null);
  const [muted, setMuted] = useState(true); // start muted for UX

  useEffect(() => {
    let s;
    try {
      s = new Howl({ src: [bg], loop: true, volume: 0.35 });
      soundRef.current = s;
      // do not auto-play loudly on load; keep muted unless user unmutes
      if (!muted) s.play();
    } catch (err) {
      // missing file or error - fail silently
      console.warn("Background music not available:", err);
    }
    return () => {
      if (soundRef.current) soundRef.current.unload();
    };
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.mute(muted);
      if (!muted && !soundRef.current.playing()) soundRef.current.play();
    }
  }, [muted]);

  return (
    <div className="music-control-wrapper">
      <motion.button
        className="music-btn"
        onClick={() => setMuted((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: muted
            ? "0 0 15px rgba(0,245,255,0.2)"
            : "0 0 25px rgba(0,245,255,0.6)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: muted ? 0 : 360 }}
          transition={{
            duration: 3,
            repeat: muted ? 0 : Infinity,
            ease: "linear"
          }}
        >
          {muted ? (
            // Muted icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            // Unmuted icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </motion.div>

        {/* Pulse rings when playing */}
        {!muted && (
          <>
            <motion.div
              className="music-pulse-ring"
              animate={{
                scale: [1, 1.4],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="music-pulse-ring"
              animate={{
                scale: [1, 1.4],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
          </>
        )}
      </motion.button>
    </div>
  );
}