"use client";

import React from "react";
import Person from "@/components/home/threejs/person/Person";
import { CharacterAnimationsProvider } from "../app/contexts/CharacterAnimations";

export default function Home() {
  return (
    <>
      <CharacterAnimationsProvider>
        <div className="flex h-[50dvh] w-[40dvh] justify-center bg-slate-400">
          <Person />
        </div>
      </CharacterAnimationsProvider>
    </>
  );
}
