import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Chatbot from "@/components/Chatbot";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Yantra'25 | VIT Vellore's Premier Techno-Management Fest",

  description:
    "The 5th edition of Yantra, VIT's premier techno-management fest, revolves around Artificial Intelligence (AI) with the objective of advancing the United Nations Sustainable Development Goals. This event serves as an incubator for young visionaries to engage with avant-garde ideas, hone technical expertise, and craft solutions that address global challenges across economic, social, and environmental spheres. A prominent feature, Central Hack, in collaboration with IEEE CS, amplifies the hackathon experience, nurturing ingenuity and cross-disciplinary problem-solving.",
  icons: ["/favicon.png"],
  keywords: [
    "Yantra 2025",
    "VIT Vellore",
    "techno-event fest",
    "innovation festival",
    "student hackathons",
    "technology competitions",
    "AI and sustainability",
    "interdisciplinary challenges",
    "Central Hack VIT",
    "coding competitions",
    "robotics challenges",
    "engineering expo",
    "tech symposium",
    "technical talks",
    "workshops",
    "seminars",
    "guest lectures",
    "student projects",
    "futuristic technology",
    "problem-solving challenges",
    "networking opportunities",
    "industry collaboration",
    "startup incubation",
    "machine learning events",
    "artificial intelligence hackathons",
    "sustainability tech",
    "smart cities solutions",
    "environmental innovation",
    "social impact through technology",
    "tech-driven development",
    "software and hardware challenges",
    "data science competitions",
    "cyber security challenges",
    "VIT clubs and chapters",
    "knowledge sharing",
    "college innovation hub",
    "youth technology festival",
    "inter-college tech events",
  ],
  openGraph: {
    title: "Yantra'25 | VIT Vellore's Premier Techno-Management Fest",
    description:
      "Join us at Yantra 2025, VIT's flagship techno-management festival, featuring AI-driven innovation, hackathons, and interdisciplinary competitions.",
    url: "https://yantra.swvit.in",
    type: "website",
    images: [
      {
        url: "/og_yantra.png",
        width: 1200,
        height: 630,
        alt: "Yantra 2025 - VIT's Premier Techno-Management Fest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Yantra'25",
      startDate: "2025-02-03T09:00:00+05:30",
      endDate: "2025-02-09T23:59:00+05:30",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "VIT Vellore",
        address: {
          "@type": "PostalAddress",
          streetAddress: "VIT University, Katpadi",
          addressLocality: "Vellore",
          postalCode: "632014",
          addressCountry: "IN",
        },
      },
      image: ["https://yantra.swvit.in/og_yantra.png"],
      description:
        "Yantra 2025 is VIT's premier techno-management festival featuring AI-driven innovation, hackathons, and interdisciplinary competitions.",
      organizer: {
        "@type": "Organization",
        name: "VIT Vellore",
        url: "https://vit.ac.in",
      },
    }),
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
        <Toaster position={"bottom-center"} visibleToasts={3} />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
