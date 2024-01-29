"use client";

import React from "react";
import Person from "@/components/home/threejs/person/Person";
import { CharacterAnimationsProvider } from "../app/contexts/CharacterAnimations";
import HomeButtons from "@/components/home/HomeButtons";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className="h-auto w-[100dvw] bg-slate-900">
      <CharacterAnimationsProvider>
        <HomeButtons />
        <div className="flex h-[100dvh]  items-center justify-center bg-slate-900">
          <Hero />
        </div>
        <About/>
      </CharacterAnimationsProvider>
    </main>
  );
}
