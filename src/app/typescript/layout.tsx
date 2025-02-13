// src/app/typescript/layout.tsx
import { Metadata } from "next";
import RootLayout from "../layout"; // Importing the RootLayout
import { ReactNode } from "react";

// Overriding metadata for this specific page
export const metadata: Metadata = {
  title: "Akunna Studies | TypeScript", // Page-specific title
};

export default function UseEffectLayout({ children }: { children: ReactNode }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}
