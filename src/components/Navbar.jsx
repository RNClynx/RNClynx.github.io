import { useState, useEffect } from "react";
import {
    FaBars,
    FaTimes,
    FaCode,
    FaDiscord
} from "react-icons/fa";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (

        <header className={`navbar ${scrolled ? "navbarScroll" : ""}`}>

            <a href="#" className="logo">

                <FaCode className="logoIcon" />

                <span>LYNX</span>

            </a>

            <nav className={menuOpen ? "navOpen" : ""}>

                <a href="#about" onClick={closeMenu}>About</a>

                <a href="#specs" onClick={closeMenu}>Specs</a>

                <a href="#tiktok" onClick={closeMenu}>TikTok</a>

                <a href="#larp" onClick={closeMenu}>Terminal</a>

                <a href="#contact" onClick={closeMenu}>Contact</a>

            </nav>

            <div className="navRight">

                <a
                    href="https://discord.gg/FFS4BB9EUM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discordNav"
                    aria-label="Join Discord"
                >
                    <FaDiscord />
                </a>

                <button className="contactBtn">
                    Contact
                </button>

                <button
                    className="menuButton"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

        </header>

    );

}