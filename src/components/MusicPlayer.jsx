import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaMusic,
} from "react-icons/fa";

const PLAYLIST_ID = "PLXMJ3bNRvRu4";

const songs = {
  // We'll fill these in later with your actual video IDs.
};

export default function MusicPlayer() {

  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState("Loading...");

  useEffect(() => {

    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";

    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = createPlayer;

  }, []);

  function createPlayer() {

    playerRef.current = new window.YT.Player(containerRef.current, {

      height: "1",
      width: "1",

      playerVars: {

        autoplay: 1,
        controls: 0,
        disablekb: 1,
        rel: 0,
        modestbranding: 1,

        listType: "playlist",
        list: PLAYLIST_ID,

      },

      events: {

        onReady(event) {

          event.target.playVideo();

          setReady(true);

        },

        onStateChange(event) {

          setPlaying(
            event.data === window.YT.PlayerState.PLAYING
          );

          const data = event.target.getVideoData();

          if (data?.video_id && songs[data.video_id]) {

            setCurrentSong(
              songs[data.video_id]
            );

          }

        }

      }

    });

  }

  function togglePlay() {

    if (!ready) return;

    if (playing) {

      playerRef.current.pauseVideo();

    } else {

      playerRef.current.playVideo();

    }

  }

  function nextSong() {

    if (ready) {

      playerRef.current.nextVideo();

    }

  }

  function previousSong() {

    if (ready) {

      playerRef.current.previousVideo();

    }

  }

  return (
    <>

      <div
        ref={containerRef}
        style={{
          position: "fixed",
          left: "-99999px",
          top: "-99999px",
        }}
      />

      <div className="musicPlayer">

        <div className="musicTop">

          <FaMusic />

          <div>

            <small>
              NOW PLAYING
            </small>

            <p>
              {currentSong}
            </p>

          </div>

        </div>

        <div className="musicButtons">

          <button onClick={previousSong}>
            <FaBackward />
          </button>

          <button onClick={togglePlay}>

            {playing
              ? <FaPause />
              : <FaPlay />
            }

          </button>

          <button onClick={nextSong}>
            <FaForward />
          </button>

        </div>

      </div>

    </>
  );

}