import { FaArrowUp, FaEnvelope, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="footer" id="contact">

      <div className="footerContent">

        <h2>LYNX</h2>

        <p>
          Thanks for stopping by :)
        </p>

        <div className="footerLinks">

          <a href="mailto:contact@69lynx.com">
            <FaEnvelope />
            contact@69lynx.com
          </a>

          <a
            href="https://discord.gg/Y9vCFBsjSZ"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
            Join my Discord
          </a>

        </div>

        <small>
          © 2026 LYNX
        </small>

      </div>

      <button
        className="backTop"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}