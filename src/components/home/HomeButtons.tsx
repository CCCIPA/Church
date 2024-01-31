"use client";

import React, { useState, useEffect, useRef } from "react";
import LoadingButton from "../ui/loading-button";
import Link from "next/link";
import Bounded from "@/components/notes/Bounded";
import gsap from "gsap";
import ThemeToggleButton from "../ThemeToggleButton";
import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../../app/contexts/CharacterAnimations";

const HomeButtons = () => {
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  // const { animations, animationIndex, setAnimationIndex } =
  //   useCharacterAnimations();

  const handleClickNotes = () => {
    setLoadingNotes(true);
  };

  const handleClickCourses = () => {
    setLoadingCourses(true);
  };

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
        ".dev",
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
        className="relative z-50 flex h-[15dvh] flex-row items-center justify-evenly bg-slate-900 text-white shadow "
      >
        <LoadingButton
          variant="ghost"
          loading={loadingNotes}
          onClick={handleClickNotes}
          type="button"
        >
          <Link
            href="/notes"
            passHref
            className="w-[20vw] text-[4.5vmin]  md:text-[3.65vmin] "
          >
            {renderLetters("Notes", "second")}
          </Link>
        </LoadingButton>

        <LoadingButton
          variant="ghost"
          loading={loadingCourses}
          onClick={handleClickCourses}
          type="button"
          disabled={true}
        >
          <Link
            href=""
            passHref
            className="w-[20vw] text-[4.5vmin]  md:text-[3.65vmin] "
          >
            {renderLetters("Chat", "last")}
          </Link>
        </LoadingButton>
        <LoadingButton
          variant="ghost"
          loading={loadingCourses}
          onClick={handleClickCourses}
          type="button"
          disabled={true}
        >
          <Link
            href=""
            passHref
            className="w-[20vw] text-[4.5vmin] md:text-[3.65vmin] "
          >
            {renderLetters("Play", "last")}
          </Link>
        </LoadingButton>
      </Bounded>
  
  );
};

export default HomeButtons;
