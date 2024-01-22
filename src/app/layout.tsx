import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowBrain",
  description: "The intelligent note-taking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-slate-900 text-slate-100">
        <body className={urbanist.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
