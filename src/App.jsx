import { useState } from "react";
import Loader from "./components/Loader";
import Background from "./components/Background";

function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onFinish={() => setLoaded(true)} />;
  }

  return (
    <>
      <Background />

      <main>

        <section className="hero">

          <p className="system">// SYS.INIT v3.0 ONLINE</p>

          <h1 className="heroTitle">
            LYNX
          </h1>

          <h2 className="heroSubtitle">
            DIGITAL CREATOR
          </h2>

        </section>

      </main>
    </>
  );
}

export default App;