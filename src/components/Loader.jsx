import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootSequence = [
  "> loading website...",
  "> loading audio...",
  "> welcome, lynx."
];

const logo = `
██╗     ██╗   ██╗███╗   ██╗██╗  ██╗
██║     ╚██╗ ██╔╝████╗  ██║╚██╗██╔╝
██║      ╚████╔╝ ██╔██╗ ██║ ╚███╔╝
██║       ╚██╔╝  ██║╚██╗██║ ██╔██╗
███████╗   ██║   ██║ ╚████║██╔╝ ██╗
╚══════╝   ╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═╝
`;

export default function Loader({ onFinish }) {
  const [line, setLine] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (line >= bootSequence.length) {
      setTimeout(() => setReady(true), 350);
      return;
    }

    const timer = setTimeout(() => {
      setLine((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [line]);

  useEffect(() => {
    if (!ready) return;

    const handleKey = () => onFinish();

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [ready, onFinish]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={ready ? onFinish : undefined}
    >
      <pre className="loaderAscii">
        {logo}
      </pre>

      <p className="loaderVersion">
        v1.0
      </p>

      <div className="loaderDivider" />

      <div className="loaderTerminal">

        {bootSequence.slice(0, line).map((text, index) => (

          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {text}
            <span className="loaderCheck"> ✓</span>
          </motion.p>

        ))}

        {ready && (
          <motion.div
            className="loaderContinue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="cursor">█</span>
            <span> Press any key to continue</span>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}