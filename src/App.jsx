import { useState } from "react";

import Loader from "./components/Loader";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import MouseGlow from "./components/MouseGlow";
import Hero from "./components/Hero";
import About from "./sections/About";
import Gaming from "./sections/Gaming";
import TikTok from "./sections/TikTok";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Stars from "./components/Stars";
import Divider from "./components/Divider";
import Larp from "./sections/Larp";
import Screensaver from "./components/Screensaver";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onFinish={() => setLoaded(true)} />;
  }

  return (
    <>
      {/* Hidden YouTube Music */}
      <iframe
        width="1"
        height="1"
        style={{
          position: "fixed",
          opacity: 0,
          pointerEvents: "none",
          left: "-9999px",
          top: "-9999px",
        }}
        src="https://www.youtube.com/embed/videoseries?list=PLXMJ3bNRvRu4&autoplay=1&loop=1"
        title="Background Music"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />

      <Background />
      <Stars />
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <Screensaver />

      <main>
        <Hero />

        <Divider />

        <About />

        <Divider />

        <Gaming />

        <Divider />

        <TikTok />

        <Divider />

        <Larp />

        <Divider />

        <Contact />
      </main>
    </>
  );
}

export default App;