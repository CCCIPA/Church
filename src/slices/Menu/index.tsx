"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import Link from "next/link";
import { useState } from "react";

/**
 * Props for `Menu`.
 */
export type MenuProps = SliceComponentProps<Content.MenuSlice>;

/**
 * Component for "Menu" Slices.
 */
const Menu = ({ slice }: MenuProps): JSX.Element => {

  const [isloading, setloading] = useState(false)



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center gap-10"
    >
      
      <Button size="lg" asChild>
        <Link href="/notes">{slice.primary.menu_button1}</Link>
      </Button>
      <Button size="lg" asChild>
        <Link href="/notes">{slice.primary.menu_button2}</Link>
      </Button>
    </section>
  );
};

export default Menu;

// import logo from "@/assets/logo.png";
// import { Button } from "@/components/ui/button";
// import { auth } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// export default function Home() {
//   // const { userId } = auth();

//   // if (userId) redirect("/notes");

//   return (
//     <main className="flex h-screen flex-col items-center justify-center gap-5">
//       <div className="flex items-center gap-4">
//         <Image src={logo} alt="FlowBrain logo" width={100} height={100} />
//         <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
//           FlowBrain
//         </span>
//       </div>
//       <p className="max-w-prose text-center">
//         An intelligent note-taking app with AI integration, built with OpenAI,
//         Pinecone, Next.js, Shadcn UI, Clerk, and more.
//       </p>
//       <Button size="lg" asChild>
//         <Link href="/notes">Open</Link>
//       </Button>
//     </main>
//   );
// }
