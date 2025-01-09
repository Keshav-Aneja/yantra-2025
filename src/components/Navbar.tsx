"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("/");

  const navItems = [
    { label: "ABOUT US", href: "#about" },
    { label: "TIMELINE", href: "#timeline" },
    { label: "MAIN HACK", href: "#main" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center font-roboto text-sm px-8 border-b border-gray-500 bg-black h-16">
      <div>
        <Image src="/VIT.webp" alt="logo" width={172} height={96} />
      </div>
      <div className="flex text-white justify-between items-center flex-grow mx-48 h-full">
        <div
          className={`h-full flex items-center border-l border-r border-gray-500 transition-all ${
            activeLink === "/"
              ? "border-t-4 gradient-border"
              : "border-transparent hover:border-t-4"
          }`}
        >
          <Link
            href="/"
            onClick={() => setActiveLink("/")}
            className="h-full px-4 py-2 flex items-center"
          >
            <Image src="/Yantra.webp" alt="logo" width={128} height={50} />
          </Link>
        </div>

        {navItems.map((item) => (
          <div
            key={item.href}
            className={`h-full flex items-center justify-center border-l border-r border-gray-500 transition-all ${
              activeLink === item.href
                ? "border-t-4 gradient-border "
                : "border-transparent hover:border-t-4"
            }`}
          >
            <Link
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className=" h-full px-4 py-2 flex items-center"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="gradient-bg text-black px-4 py-2 transition-colors">
          Register Now
        </button>
      </div>
    </nav>
  );
}