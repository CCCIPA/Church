"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/notes/Bounded";
import Shapes from "./Shapes";


export default function Hero () {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          delay: 0.5,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        },
      );

      tl.fromTo(
        ".tag-line",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        },
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
     
      ref={component}
    >
      <div className="grid min-h-[70dvh] grid-cols-1 bg-slate-900 lg:grid-cols-2">
        <Shapes />
        <div className="col-start-1 m-auto select-none lg:row-start-1">
          <h1
            className=" mb-8 flex text-[120px] font-extrabold leading-none tracking-tighter lg:text-[clamp(3rem,16vmin,16rem)]"
            aria-label={"Cur" + "" + "Bot"}
          >
            <span className="block text-slate-300 ">
              {renderLetters("Cur", "first")}
            </span>
            <span className=" block text-slate-500 ">
              {renderLetters("Bot", "last")}
            </span>
          </h1>
          <span
            className="tag-line -mt-8 ml-2 block bg-gradient-to-tr from-yellow-500 via-yellow-200
             to-yellow-200 bg-clip-text text-[24px] font-bold uppercase tracking-[.2em] text-transparent opacity-0
             lg:text-[clamp(1.5rem,3.2vmin,3.2rem)]"
          >
            {"The Curriculum Bot"}
          </span>
        </div>
      </div>
    </Bounded>
  );
};


