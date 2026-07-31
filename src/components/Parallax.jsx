import { useEffect, useState } from "react";

export default function Parallax({ children, strength = 25 }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;

      setStyle({
        transform: `translate(${x}px, ${y}px)`,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [strength]);

  return (
    <div
      style={{
        ...style,
        transition: "transform .12s linear",
      }}
    >
      {children}
    </div>
  );
}