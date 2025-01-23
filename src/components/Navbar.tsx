"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("/");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { label: "MAIN HACK", href: "https://yantrahack.swvit.in/" },
    { label: "TIMELINE", href: "/#timeline" },
    { label: "EVENTS", href: "/events" },
    { label: "TEAM", href: "/#team" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <nav className="w-full flex justify-between items-center font-roboto text-sm border-b border-border bg-[#161616] h-16 relative z-[9999]">
      <div className="flex items-center justify-between h-full lg:w-[12.5%] px-2 md:px-4 lg:px-0">
        <button
          className="lg:hidden flex flex-col justify-center items-center h-8 w-12 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <div>
              <span className="block w-6 h-0.5 bg-white transform rotate-45 mb-1 "></span>
              <span className="block w-6 h-0.5 bg-white transform -rotate-45  -translate-y-[5px]"></span>
            </div>
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </>
          )}
        </button>
        <span className="h-full border-l border-border flex items-center">
          <Image
            src="/VIT.webp"
            alt="logo"
            width={200}
            height={100}
            className="h-4 md:h-6 w-auto mx-2 md:mx-6"
          />
        </span>
        <span className="h-full border-x border-border">
          <Link
            href="/"
            onClick={() => setActiveLink("/")}
            className="h-full p-2 flex items-center lg:hidden border-t-4 gradient-border "
          >
            <Image
              src={"/images/yantra.svg"}
              className={"h-4 md:h-6 w-auto "}
              height={45}
              width={156}
              alt={"Yantra-Logo"}
            />
          </Link>
        </span>
      </div>
      <div className="hidden lg:flex w-wrapper justify-between items-center h-full text-white border-r border-border">
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
                className={"h-6 w-auto"}
                height={45}
                width={156}
                alt={"Yantra-Logo"}
              />
            </Link>
          </div>
        </div>

        {navItems.map((item) => (
          <div
            key={item.href}
            className={`h-full flex items-center justify-center border-gray-500 transition-all last:mr-12 ${
              activeLink === item.href
                ? "border-t-4 gradient-border"
                : "border-transparent hover:border-t-4"
            }`}
          >
            <Link
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className="h-full px-4 py-2 flex items-center"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center  lg:w-[12.5%] ">
        <Link
          href="/events"
          className="gradient-bg text-black px-2 md:py-3 py-3 mr-3   transition-colors flex items-center gap-2 justify-center"
          style={{
            clipPath:
              "polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0% 100%, 0 15%)",
            background:
              "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
          }}
        >
          <span className="uppercase text-xs text-nowrap font-semibold">
            Register Now
          </span>
          <Image
            src="/icons/register-arrow.svg"
            width={12}
            height={12}
            alt=""
            className="w-2 h-auto hidden md:block"
          />
        </Link>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full h-full bg-[#161616] border-t border-border z-[9999] flex flex-col space-y-3">
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`w-full flex items-center justify-center border-b border-border`}
            >
              <Link
                href={item.href}
                onClick={() => {
                  setActiveLink(item.href);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-4 text-white"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
