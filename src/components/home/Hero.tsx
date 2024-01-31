"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/notes/Bounded";
import Person from "./threejs/person/Person";
import HomeButtons from "./HomeButtons";

export default function Hero() {
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
          x: 100,
          opacity: 0,
          scale: 1.2,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        },
      );

      tl.fromTo(
        ".beta",
        {
          y: -20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
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
      className="m-auto -mt-10 flex h-[60dvh] items-center justify-center sm:mt-2"
      ref={component}
    >
      <div className="m-auto grid grid-cols-1 md:w-[75dvw] md:grid-cols-2 lg:w-[70dvw] xl:w-[70vw] 2xl:w-[60vw] ">
        <div className="flex items-center justify-center  border-dashed">
          <Person />
        </div>
        <div className="m-auto -mt-[30vmin] select-none sm:-mt-20 md:row-start-1 md:mt-auto ">
          <h1
            className=" m-auto mb-8 flex  overflow-visible truncate
             bg-clip-text text-[20vmin] font-extrabold leading-none tracking-tighter sm:text-[18vmin] md:text-[16vmin]"
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
            className="tag-line -mt-8 ml-1 block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-200
             bg-clip-text text-center  text-[4vmin] font-bold uppercase tracking-[.2em] text-transparent opacity-0 sm:text-[3.65vmin] md:text-[3.15vmin] 
             "
          >
            {"The Curriculum Bot"}
          </span>
          <span
            className="beta ml-3 block bg-clip-text text-center text-[6vmin] font-bold uppercase text-emerald-500 opacity-0 md:text-[4.65vmin]
             "
          >
            {"BETA"}
          </span>
        </div>
      </div>
    </Bounded>
  );
}
