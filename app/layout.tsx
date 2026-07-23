import type { Metadata } from "next";
import { Inter, Cinzel, Cinzel_Decorative, Great_Vibes, New_Rocker } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pirate = localFont({
  src: "../public/fonts/piece_of_eight.ttf",
  variable: "--font-pirate-local",
});

const cinzel = Cinzel({
  variable: "--font-cinzel-local",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: ["400"],
  subsets: ["latin"],
});


const new_rocker = New_Rocker({
  weight: "400",                  // required
  style: "normal",                // optional but recommended
  variable: "--font-new-rocker",  // your CSS variable
  subsets: ["latin"],             // keep as is
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
      className={`${inter.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${greatVibes.variable} ${pirate.variable} ${new_rocker.variable} h-full antialiased selection:bg-amber-800/30 selection:text-amber-900`}
    >
      <body className="min-h-full bg-[#120b07] text-[#1e120d] font-sans flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
