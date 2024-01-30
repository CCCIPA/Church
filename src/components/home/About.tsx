"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/notes/Bounded";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";

export default function About() {
  const email = "curbotdev@gmail.com.";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 500); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const buttonClasses = `bg-${isCopied ? "white" : "blue-500"} text-${
    isCopied ? "black" : "white"
  }  transition-all duration-500 ease-in-out  tracking-[.1em] underline`;

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
          scale: 1,
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
      className="m-auto -mt-[18vmin] flex items-center justify-center bg-slate-800 p-10 sm:mt-0 md:-mt-[32vmin]"
      ref={component}
    >
      {/* <h1
          className=" m-auto -mt-9 mb-8 flex text-[90px] font-extrabold leading-none tracking-tighter lg:text-[150px]"
          aria-label={"Cur" + "" + "Bot"}
        >
          <span className="block text-slate-300 ">
            {renderLetters("Cur", "first")}
          </span>
          <span className=" block text-slate-500 ">
            {renderLetters("Bot", "last")}
          </span>
        </h1> */}
      <span
        className=" ml-3 block bg-clip-text text-center text-[6vmin] font-bold uppercase text-white
         sm:text-[5.65vmin] md:text-[4.65vmin]"
      >
        {"ABOUT"}
      </span>
      <span
        className=" ml-1 mt-10 block w-[90dvw] bg-clip-text text-center 
             text-[4vmin] font-extralight tracking-[.1em] text-transparent
             text-white sm:text-[3.65vmin] md:w-[60dvw] md:text-[2.65vmin]"
      >
        {`Hey there! I'm Stephen, the developer behind CurBot. The main focus of this website is a feature that's still in development
        – a chatbot which utilizes unique content from our progam. My starting point would be ECNG 1009. I am
         eager to collaborate with both lecturers and students to make this app genuinely useful. While the website is free
          to use and will always be, it's not entirely free for me to run yet, and there may be downtimes during development.
           The ultimate goal is to find a way to make it completely free to run and use.`}
        <br></br>
        <br></br>
        {`Currently, there's a functional notes app that shares the same backend structure intended for the main chatbot. 
           I encourage you to give it a try and provide feedback at `}
         
        {/* <button onClick={handleCopy} className={buttonClasses}>
                curbotdev@gmail.com
        </button> */}

         <Link href={`mailto:${email}`} onClick={handleCopy} className={buttonClasses}>
                curbotdev@gmail.com
        </Link>
        
        {` Don't be shy; no need for formality either. 
           Any ideas would be greatly appreciated. Additionally, I'm working on the visuals. Instead of a woman playing air guitar, 
           I'm creating a robot. ALL the code is OPEN SOURCE. I've utilized existing tutorials and repos to develop it so far and will 
           continue to do so. I will provide a section for links to the recoures used in the near future`}
      </span>
    </Bounded>
  );
}
