import logo from "@/assets/logo.png";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  // const { userId } = auth();

  // if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <Hero />
      <section className="flex flex-col items-center gap-10">
        <Button size="lg" asChild>
          <Link href="/notes">Notes</Link>
        </Button>
        <Button size="lg" className="mb-10" asChild>
          <Link href="/notes">Courses</Link>
        </Button>
      </section>
    </main>
  );
}
