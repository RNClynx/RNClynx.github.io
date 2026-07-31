import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import {
  FaTiktok,
  FaPlay,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

export default function TikTok() {
  return (
    <section className="tiktok" id="tiktok">

      <motion.div
        className="tiktokHeader"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span className="sectionTag">
            TIKTOK
          TIKTOK
        </span>

        <p>
          I mostly post Rainbow Six Siege, with the occasional Roblox
          video and random clips that I thought were funny enough to share.
        </p>

      </motion.div>
// //
      <div className="analyticsGrid">

        <TiltCard className="analyticCard">

          <FaPlay className="analyticIcon"/>

          <h3>1.1M+</h3>

          <span>Views</span>

        </TiltCard>

        <TiltCard className="analyticCard">

          <FaUsers className="analyticIcon"/>

          <h3>1K+</h3>

          <span>Followers</span>

        </TiltCard>

        <TiltCard className="analyticCard">

          <FaHeart className="analyticIcon"/>

          <h3>20K+</h3>

          <span>Likes</span>

        </TiltCard>

      </div>

      <motion.a
        href="https://www.tiktok.com/@shilohdynastylover"
        target="_blank"
        rel="noopener noreferrer"
        className="creatorCard"
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >

        <FaTiktok className="creatorLogo"/>

        <h2>@shilohdynastylover</h2>

        <span>
          Mostly R6 clips, Roblox moments,
          and whatever else I find funny enough to post.
          <br /><br />
          Click to check out my profile →
        </span>

      </motion.a>

    </section>
  );
}
