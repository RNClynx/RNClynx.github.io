import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Specs", id: "specs" },
  { name: "TikTok", id: "tiktok" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbarScroll" : ""}`}>
      <a href="#home" className="logo">
        <FaCode className="logoIcon" />
        <span>LYNX</span>
      </a>

      <nav>
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.name}
          </a>
        ))}
      </nav>

      <a
        href="https://discord.gg/Y9vCFBsjSZ"
        target="_blank"
        rel="noopener noreferrer"
        className="contactBtn"
      >
        Join Discord
      </a>
    </header>
  );
}