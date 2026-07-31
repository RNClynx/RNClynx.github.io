import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scroll =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);

      setProgress(scroll * 100);
    };

    window.addEventListener("scroll", update);
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="scrollProgress"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}