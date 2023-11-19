import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Glez",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="" >{children}</body>
    </html>
  );
}
