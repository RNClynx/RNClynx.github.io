import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Parallax from "../components/Parallax";
import pfp from "../assets/pfp.png";

import {
  FaTiktok,
  FaGamepad,
  FaCode,
  FaUsers,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="heroContent">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="heroTag">
            ● ONLINE
          </span>

          <h1 className="heroTitle">
            LYNX
          </h1>

          <TypeAnimation
            sequence={[
             "currently addicted to r6",
             2500,
             "fueled by white monster and diet dr pepper",
             2500,
            ]}
            speed={55}
            repeat={Infinity}
            wrapper="h2"
            className="heroSubtitle"
          />

          <p className="heroDescription">
            <br />
            I'm usually either streaming R6, playing Roblox with my
            friends, or doing something random {":)"}
          </p>

        </motion.div>

      </div>

      <Parallax strength={18}>

        <motion.div
          className="heroPanel"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >

          <div className="heroProfile">

            <img
              src={pfp}
              alt="Lynx"
              className="heroPfp"
            />

            <div className="heroStatusDot"></div>

            <h3>Lynx</h3>

            <p className="profileAlias">
              aka. @69lynx • @shilohdynastylover
            </p>

          </div>

          <div className="statsGrid">

            <div className="statCard">

              <FaTiktok className="statIcon" />

              <h2>1.1M+</h2>

              <p>Views</p>

            </div>

            <div className="statCard">

              <FaUsers className="statIcon" />

              <h2>1K+</h2>

              <p>Followers</p>

            </div>

            <div className="statCard">

              <FaGamepad className="statIcon" />

              <h2>10+</h2>

              <p>Years Gaming</p>

            </div>

            <div className="statCard">

              <FaCode className="statIcon" />

              <h2>5+</h2>

              <p>Languages</p>

            </div>

          </div>

        </motion.div>

      </Parallax>

    </section>
  );
}