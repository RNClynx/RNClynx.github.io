import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "> initializing...",
  "> loading interface...",
  "> checking systems...",
  "> online."
];

export default function Loader({ onFinish }) {
  const [line, setLine] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (line >= bootSequence.length) {
      setReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setLine((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [line]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1
          className="loaderTitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LYNX
        </motion.h1>

        <div className="loaderTerminal">
          {bootSequence.slice(0, line).map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {text}
            </motion.p>
          ))}

          {!ready && <span className="cursor">█</span>}

          {ready && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="loaderReady"
            >
              <p>Best experienced with sound.</p>

              <button
                className="loaderButton"
                onClick={onFinish}
              >
                ENTER
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}