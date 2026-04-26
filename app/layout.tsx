import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MouseGradient } from "@/components/mouse-gradient";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henry Glez | Web Developer Portfolio",
  description:
    "A Web Developer with a passion for Accessibility. Accessible design and development, creating digital experiences for all.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} min-h-screen`}>
        <MouseGradient />
        {children}
      </body>
    </html>
  );
}
