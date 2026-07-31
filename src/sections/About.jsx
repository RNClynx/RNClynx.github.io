import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import {
  FaGamepad,
  FaCode,
  FaTiktok,
  FaGhost,
} from "react-icons/fa";

const favorites = [
  {
    emoji: "♡",
    title: "Favorite Game",
    value: "Rainbow Six Siege",
  },
  {
    emoji: "♫",
    title: "On Repeat",
    value: "Shiloh Dynasty",
  },
  {
    emoji: "🥤",
    title: "Favorite Drink",
    value: "White Monster & Diet Dr Pepper",
  },
  {
    emoji: "😴",
    title: "Current Problem",
    value: "Stressed Out",
  },
];

const cards = [
  {
    icon: <FaGamepad />,
    title: "Gaming",
    text: "Rainbow Six Siege, Roblox, Counter-Strike, and whatever my friends convince me to install.",
  },
  
  {
    icon: <FaTiktok />,
    title: "Content",
    text: "Mostly r6 related content :p",
  },
  {
    icon: <FaGhost />,
    title: "Ghosting",
    text: "Not ignoring you I'm just bad at texting.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">

      {/* LEFT SIDE */}

      <motion.div
        className="aboutLeft"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <div className="favoritesGrid">

          {favorites.map((item) => (

            <div
              key={item.title}
              className="favoriteCard"
            >

              <div className="favoriteEmoji">
                {item.emoji}
              </div>

              <span className="favoriteTitle">
                {item.title}
              </span>

              <h4>{item.value}</h4>

            </div>

          ))}

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="aboutRight"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <span className="sectionTag">
          ABOUT ME
        </span>

        <h2>
          a little about me
        </h2>

        <p>
          Hii! I go by <strong>Lynx</strong> online. It's been my gamertag for
          years, and there's actually a whole story behind how I got the name,
          so feel free to ask me about it.
          <br /><br />
          I also love Shiloh Dynasty. My favorite song is <strong>Novacaine</strong>, and
          it's the first song you'll hear when visiting my website(pc only).
          <br /><br />
          :p
        </p>

      </motion.div>

      {/* BOTTOM CARDS */}

      <div className="aboutCards">

        {cards.map((card) => (

          <TiltCard
            key={card.title}
            className="aboutCard"
          >

            <div className="aboutIcon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>

          </TiltCard>

        ))}

      </div>

    </section>
  );
}