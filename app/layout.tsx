import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pirate = localFont({
  src: "../public/fonts/piece_of_eight.ttf",
  variable: "--font-pirate-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HACKPRENEUR | Build • Innovate • Conquer",
  description: "Hackpreneur is a platform for dreamers, builders, and problem solvers to come together, collaborate, and create impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pirate.variable} h-full antialiased selection:bg-amber-800/30 selection:text-amber-900`}
    >
      <body className="min-h-full bg-[#120b07] text-[#1e120d] font-sans flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
