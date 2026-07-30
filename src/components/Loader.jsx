import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          LYNX OS
        </motion.h1>

        <p>{"> Initializing System..."}</p>

        <div className="bar">
          <div
            className="fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span>{progress}%</span>
      </motion.div>
    </AnimatePresence>
  );
}