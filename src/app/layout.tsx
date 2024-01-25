import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CurBot",
  description: "Note-Taking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-[100dvh] flex items-center justify-center">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={urbanist.className}>
      <ThemeProvider attribute="class">
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
    </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
