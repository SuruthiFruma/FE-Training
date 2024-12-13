"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import brand from "@adaptavant/eds-brands/setmore";
import { Root } from "@adaptavant/eds-core";
import translations from "@adaptavant/eds-translations/english";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Root
          className="h-[800px]"
          brand={brand} // brand config and tokens
          colorScheme="light" // preferred color scheme
          translations={translations} // preferred language for text that is built into components
        >
          {children}
        </Root>
      </body>
    </html>
  );
}
