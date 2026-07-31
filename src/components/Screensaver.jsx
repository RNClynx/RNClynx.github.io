import { useEffect, useRef, useState } from "react";

export default function Screensaver() {

  const [active, setActive] = useState(false);

  const logoRef = useRef(null);

  const position = useRef({
    x: 100,
    y: 100,
  });

  const velocity = useRef({
    x: 3,
    y: 3,
  });


  useEffect(()=>{

    function startScreensaver(){
      setActive(true);
    }

    window.addEventListener(
      "startScreensaver",
      startScreensaver
    );

    return ()=>{
      window.removeEventListener(
        "startScreensaver",
        startScreensaver
      );
    };

  },[]);


  useEffect(()=>{

    if(!active) return;


    const move = setInterval(()=>{

      const logo = logoRef.current;

      if(!logo) return;


      const width = logo.offsetWidth;
      const height = logo.offsetHeight;


      let x = position.current.x + velocity.current.x;
      let y = position.current.y + velocity.current.y;


      if(
        x <= 0 ||
        x + width >= window.innerWidth
      ){

        velocity.current.x *= -1;

      }


      if(
        y <= 0 ||
        y + height >= window.innerHeight
      ){

        velocity.current.y *= -1;

      }


      position.current = {
        x,
        y
      };


      logo.style.transform =
      `translate(${x}px, ${y}px)`;


    },16);


    return ()=>clearInterval(move);


  },[active]);


  if(!active) return null;


  return(
    <div className="screensaver">

      <div
        ref={logoRef}
        className="dvdLogo"
      >
        LYNX
      </div>


      <button
        onClick={()=>setActive(false)}
      >
        EXIT SCREENSAVER
      </button>

    </div>
  );

}