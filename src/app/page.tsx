"use client";

import React from "react";
import Person from "@/components/home/threejs/person/Person";
import { CharacterAnimationsProvider } from "../app/contexts/CharacterAnimations";
import HomeButtons from "@/components/home/HomeButtons";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ContactForm from "@/components/ContactForm";
import { Label } from "@radix-ui/react-label";

export default function Home() {
  return (
    <main className="h-auto w-screen bg-slate-900">
      <CharacterAnimationsProvider>
        <HomeButtons />
        <div className="flex h-[100dvh] items-center justify-center bg-slate-900">
          <Hero />
        </div>
        <About />
        <div className="m-auto flex w-[80dvw]  flex-col pb-[10dvh]">
          <div className="flex items-center justify-center">
            <span
              className=" ml-3 block bg-clip-text text-center text-[6vmin] font-light text-gray-100
         sm:text-[5.65vmin] md:text-[4.65vmin]"
            >
              Feedback
            </span>
            <span
              className=" ml-3 block bg-clip-text text-center text-[6vmin] font-bold text-slate-500
         sm:text-[5.65vmin] md:text-[4.65vmin]"
            >
              / Ideas
            </span>
          </div>
          <ContactForm />
        </div>
      </CharacterAnimationsProvider>
    </main>
  );
}
