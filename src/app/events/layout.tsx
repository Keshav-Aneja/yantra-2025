"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import { Metadata } from "next";
import React from "react";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function EventsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={"w-full h-full min-h-screen bg-background overflow-x-hidden"}
    >
      <Navbar />
      <ScrollProgress>
        {children}
      </ScrollProgress>
      <Footer />
    </div>
  );
}
