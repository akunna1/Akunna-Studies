import { Metadata } from "next";
import RootLayout from "../layout"; // Importing the RootLayout
import { ReactNode } from "react";

// Overridding metadata for this specific page
export const metadata: Metadata = {
  title: "Akunna Studies | Web Optimization", // Page-specific title
};

export default function UseStateLayout({ children }: { children: ReactNode }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}
