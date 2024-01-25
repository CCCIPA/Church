"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/notes/Bounded";
import Shapes from "./threejs/Shapes";

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
    <Bounded className="" ref={component}>
      <div className="-mt-35 grid h-[80dvmax] md:w-[80dvw] grid-cols-1 p-10 md:-mt-44 md:grid-cols-2">
        <Shapes className="h-[60dvmax] -mt-35 w-[100dvw]" />
        <div className="col-start-1 m-auto select-none md:row-start-1 h-[20dvmax]">
          <h1
            className=" m-auto -mt-9 mb-8 flex text-[100px] font-extrabold leading-none tracking-tighter md:mt-auto md:text-[100px] lg:text-[150px]"
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
             bg-clip-text text-center text-[20px] font-bold uppercase tracking-[.2em] text-transparent opacity-0
             lg:text-[clamp(1.5rem,3vmin,3rem)]"
          >
            {"The Curriculum Bot"}
          </span>
          <span
            className="beta ml-3 block bg-clip-text text-center text-[40px] font-bold uppercase text-emerald-500 opacity-0
             lg:text-[clamp(1.5rem,3.2vmin,3.2rem)]"
          >
            {"BETA"}
          </span>
        </div>
      </div>
    </Bounded>
  );
}
