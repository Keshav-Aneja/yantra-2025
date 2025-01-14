import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Yantra'25",
  description:
    "The 5th edition of Yantra, VIT's premier techno-management fest, revolves around Artificial Intelligence (AI) with the objective of advancing the United Nations Sustainable Development Goals. This event serves as an incubator for young visionaries to engage with avant-garde ideas, hone technical expertise, and craft solutions that address global challenges across economic, social, and environmental spheres. A prominent feature, Central Hack, in collaboration with IEEE CS, amplifies the hackathon experience, nurturing ingenuity and cross-disciplinary problem-solving.",
  openGraph: {
    images: ["/og_yantra.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
