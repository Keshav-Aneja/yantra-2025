"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/footer";
import { useState } from "react";
import Image from "next/image";
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // TODO: Keep a seperate file for sotring TODOs data
  const faqs = [
    {
      question: "IS THERE A PROVISION FOR ON-SPOT REGISTRATIONS FOR EVENTS?",
      answer:
        "Registration for events is exclusively through the official Riviera website, and on-spot registrations will not be available.",
    },
    {
      question:
        "ARE THERE ACCOMMODATION FACILITIES AVAILABLE FOR OUTSTATION PARTICIPANTS?",
      answer:
        "Yes, accommodation is provided for outstation participants in the VIT hostels on a paid first come first serve basis.",
    },
    {
      question:
        "IS TRANSPORTATION PROVIDED TO AND FROM THE VENUE, OR SHOULD ATTENDEES ARRANGE THEIR OWN TRANSPORTATION?",
      answer:
        "No, VIT does not provide transportation. Attendees are required to make their own transportation arrangements.",
    },
    {
      question: "WHAT IS REQUIRED FOR IDENTITY VERIFICATION AT THE EVENT?",
      answer:
        "Physical identification cards from respective colleges are mandatory for entrance verification.",
    },
    {
      question: "IS THERE A PROVISION FOR ON-SPOT REGISTRATIONS FOR EVENTS?",
      answer:
        "Registration for events is exclusively through the official Riviera website, and on-spot registrations will not be available.",
    },
    {
      question:
        "ARE THERE ACCOMMODATION FACILITIES AVAILABLE FOR OUTSTATION PARTICIPANTS?",
      answer:
        "Yes, accommodation is provided for outstation participants in the VIT hostels on a paid first come first serve basis.",
    },
    {
      question:
        "IS TRANSPORTATION PROVIDED TO AND FROM THE VENUE, OR SHOULD ATTENDEES ARRANGE THEIR OWN TRANSPORTATION?",
      answer:
        "No, VIT does not provide transportation. Attendees are required to make their own transportation arrangements.",
    },
    {
      question: "WHAT IS REQUIRED FOR IDENTITY VERIFICATION AT THE EVENT?",
      answer:
        "Physical identification cards from respective colleges are mandatory for entrance verification.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="w-[75%] mx-auto font-roboto border border-[#313135] border-b-0">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4"></div>
          <div className="border border-[#313135] p-4 row-span-2 h-48">
            <Image
              src="/images/faq-heading.webp"
              alt=""
              width={200}
              height={150}
              className="w-40 h-auto "
            />
            {/* <h2 className="text-4xl font-bold text-white px-6 py-3">FAQs</h2> */}
          </div>
          <div className="border border-[#313135] p-4 row-span-2"></div>
        </div>

        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#313135] p-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex items-center justify-between text-left text-white hover:text-[#4CAF50] transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 text-zinc-400 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-zinc-400 text-xs md:text-base font-space_mono">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 ">
          <div className="border border-[#313135] p-12"></div>
          <div className="border border-[#313135] p-12"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
