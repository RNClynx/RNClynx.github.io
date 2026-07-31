import { motion } from "framer-motion";

const cards = [
  ["STATUS", "ONLINE"],
  ["NETWORK", "SECURE"],
  ["FPS", "240"],
];

export default function HUD() {
  return (
    <>
      {cards.map((card, i) => (
    <motion.div
    key={card[0]}
  className={`hudCard hud${i + 1}`}
>

          <span>{card[0]}</span>

          <h2>{card[1]}</h2>

        </motion.div>
      ))}
    </>
  );
}