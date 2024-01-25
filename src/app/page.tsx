"use client";

import logo from "@/assets/logo.png";

import HomeButtons from "@/components/home/HomeButtons";
import Hero from "@/components/home/Hero";
import { Button, buttonVariants } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Tacks } from "@/components/home/threejs/Tacks";
import Robot from "@/components/home/threejs/Robot";
import Person from "@/components/home/threejs/person/Person";
import { MantineProvider } from "@mantine/core";
import Interface from "@/components/home/threejs/person/Interface";
import { CharacterAnimationsProvider } from "../app/contexts/CharacterAnimations";

export default function Home() {
  // const { userId } = auth();

  // if (userId) redirect("/notes");

  return (
    <CharacterAnimationsProvider>
      <Person />
    </CharacterAnimationsProvider>
  );
}
