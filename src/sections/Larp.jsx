import { motion } from "framer-motion";
import { useState } from "react";

const commands = {
  help: `Available Commands

fortune
screensaver
hack pentagon
sudo become-billionaire
sudo touch-grass
npm install girlfriend
clear
shutdown`,

  fortune: () => {
    const fortunes = [
      "Great opportunities come to those who prepare quietly.",
      "The path becomes clear after the first step.",
      "Today's effort becomes tomorrow's success.",
      "Do not fear slow progress. Fear standing still.",
      "Your greatest strength is your persistence.",
      "The answer you seek is already within reach.",
      "A calm heart makes wise decisions.",
      "Fortune favors those who remain curious.",
      "The moon shines brightest after the darkest night.",
      "A closed door protects you from the wrong path.",
      "Trust the process, even when progress feels invisible.",
      "The strongest bamboo bends with the wind.",
      "A quiet mind sees possibilities others overlook.",
      "Small victories lead to great achievements.",
      "The next sunrise brings a new opportunity."
    ];

    return fortunes[Math.floor(Math.random() * fortunes.length)];
  },

  screensaver: `Starting screensaver...`,

  achievement: `Achievements

[ ] Corner Hit
[ ] Power User
[ ] Grass Toucher

Completion: 0%`,

  "sudo become-billionaire": `ERROR

Missing dependency:

job`,

  "sudo touch-grass": `Attempting...

ERROR
`,

  "npm install girlfriend": `error...ugly

Try:

looksmaxxing`,

  "hack pentagon": `Initializing exploit...

████████████████████ 100%

Access granted...

...

Just kidding.

The FBI has been notified.

Your IP:
127.0.0.1

Have a nice day :)`,

  shutdown: `...`,
};

export default function Larp() {
  const [history, setHistory] = useState([
    "LYNX TERMINAL v1.0",
    "",
    'Type "help" to get started.',
    "",
  ]);

  const [input, setInput] = useState("");

  function runCommand(e) {
    if (e.key !== "Enter") return;

    const cmd = input.trim();

    if (cmd === "clear") {
      setHistory([
        "LYNX TERMINAL v1.0",
        "",
        'Type "help" to get started.',
        "",
      ]);
      setInput("");
      return;
    }

    let output = commands[cmd];

    if (typeof output === "function") {
      output = output();
    }

    if (cmd === "screensaver") {
      window.dispatchEvent(new Event("startScreensaver"));
    }

    if (cmd === "shutdown") {
      setHistory((prev) => [
        ...prev,
        "> shutdown",
        commands.shutdown,
      ]);

      setInput("");

      setTimeout(() => {
        document.body.innerHTML = `
          <style>
            body{
              margin:0;
              background:#000;
              color:#00ff88;
              font-family:monospace;
            }

            .shutdown{
              height:100vh;
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
              gap:30px;
              animation:fade .8s;
            }

            button{
              background:#111;
              color:#00ff88;
              border:1px solid #00ff88;
              padding:15px 40px;
              font-size:18px;
              cursor:pointer;
              transition:.25s;
            }

            button:hover{
              background:#00ff88;
              color:#000;
            }
                          @keyframes fade{
              from{opacity:0;}
              to{opacity:1;}
            }
          </style>

          <div class="shutdown">

            <h1> HALTED</h1>

            <p>Reason: User initiated shutdown.</p>

            <button onclick="location.reload()">
              REBOOT SYSTEM
            </button>

          </div>
        `;
      }, 1200);

      return;
    }

setHistory((prev) => [
  ...prev,
  `> ${cmd}`,
  output || `Command not found: ${cmd}`,
]);

    setInput("");
  }

  return (
    <section className="larp" id="larp">
      <motion.div
        className="terminal"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="terminalHeader">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

          <p>LYNX TERMINAL</p>
        </div>

        <div className="terminalBody">
          {history.map((line, i) => (
            <pre key={i}>{line}</pre>
          ))}

          <div className="terminalInput">
            <span>"{">"}"</span>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={runCommand}
              autoComplete="off"
              spellCheck={false}
              placeholder='Try "help"...'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}