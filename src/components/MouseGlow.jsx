import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="mouseGlow"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
}