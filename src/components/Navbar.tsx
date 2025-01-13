"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("/");

  const navItems = [
    // { label: "ABOUT US", href: "#about" },
    { label: "MAIN HACK", href: "#main" },
    { label: "TIMELINE", href: "#timeline" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "FAQs", href: "#faq" },

    // { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <nav className="w-full flex justify-center items-center font-roboto text-sm  border-b border-border bg-[#161616] h-16">
      <div className="flex items-center justify-center h-full w-[12.5%]">
        <Image
          src="/VIT.webp"
          alt="logo"
          width={400}
          height={200}
          className="h-8 w-auto"
        />
      </div>
      <div className="w-wrapper flex just text-white border-r border-border  justify-between items-center h-full">
        <div className="h-full border-x border-border">
          <div
            className={`h-full flex items-center border-border transition-all ${
              activeLink === "/"
                ? "border-t-4 gradient-border"
                : "border-transparent hover:border-t-4"
            }`}
          >
            <Link
              href="/"
              onClick={() => setActiveLink("/")}
              className="h-full px-10 py-2 flex items-center"
            >
              <Image
                src={"/images/yantra.svg"}
                className={"h-8 w-auto"}
                height={91}
                width={312}
                alt={"Yantra-Logo"}
              />
            </Link>
          </div>
        </div>

        {navItems.map((item) => (
          <div
            key={item.href}
            className={`h-full flex items-center justify-center border-l border-r border-gray-500 transition-all last:mr-12 ${
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
      <div className="flex items-center justify-center w-[12.5%]">
        <button
          className="gradient-bg text-black px-4 py-2 transition-colors flex items-center gap-2 justify-center"
          style={{
            clipPath:
              "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0% 100%, 0 15%)",
            background:
              "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
          }}
        >
          <span className="uppercase">Register Now</span>
          <Image
            src="/icons/register-arrow.svg"
            width={12}
            height={12}
            alt=""
            className="w-2 h-auto"
          />
        </button>
      </div>
    </nav>
  );
}
