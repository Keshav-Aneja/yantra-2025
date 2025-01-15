"use client";

import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div>
      <div
        className="fixed bottom-5 right-5 bg-red-500 z-50 p-1 rounded-full "
        style={{
          background:
            "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
        }}
        onClick={toggleChatbox}
      >
        <div className="bg-black p-4 rounded-full">
          <Image
            src="/icons/chatbot.svg"
            width={30}
            height={30}
            alt=""
            className="w-5 md:w-8"
          />
        </div>
      </div>
      {isChatboxVisible && (
        <div
          className="fixed bottom-28 right-5 bg-white z-50 p-4 rounded-lg shadow-lg w-[20vw]"
          style={{
            backgroundColor: "#161616",
            color: "white",
            borderRadius: "20px",
          }}
        >
          {/* Header */}
          <div className="flex">
            <h2 className="text-lg font-bold mb-2">Chatbox</h2>
            <button className="ml-auto" onClick={toggleChatbox}>
              X
            </button>
          </div>
          <div className="max-h-[50vh] overflow-y-scroll py-5 ">
            {/* Question */}
            <div className="flex justify-end mb-2">
              <div className="bg-white p-4 rounded-2xl text-black max-w-[90%] ">
                <p className="text-sm tracking-wider">
                  Hey, can you tell me about the Yantra event? I heard it’s
                  happening from 3rd to 9th January in VIT.
                </p>
              </div>
            </div>

            {/* Response */}
            <div className="flex justify-start mb-2">
              <div className="bg-gray-800 p-4 rounded-2xl text-white max-w-[90%] w-auto">
                <p className="text-sm tracking-wider">
                  Absolutely! Yantra is an exciting event organized at VIT,
                  running from January 3rd to January 9th.
                </p>
              </div>
            </div>
            {/* Question */}
            <div className="flex justify-end mb-2">
              <div className="bg-white p-4 rounded-2xl text-black max-w-[90%] ">
                <p className="text-sm tracking-wider">
                  Can you give me an overview first?
                </p>
              </div>
            </div>

            {/* Response */}
            <div className="flex justify-start mb-2">
              <div className="bg-gray-800 p-4 rounded-2xl text-white max-w-[90%] w-auto">
                <p className="text-sm tracking-wider">
                  Sure! Yantra is one of VIT’s flagship events, known for its
                  focus on technology, innovation, and hands-on learning. It
                  usually includes workshops, competitions, exhibitions, and
                  speaker sessions. It’s a great platform for tech enthusiasts
                  to showcase their skills, learn something new, and network
                  with like-minded individuals.
                </p>
              </div>
            </div>

            {/* Question */}
            <div className="flex justify-end mb-2">
              <div className="bg-white p-4 rounded-2xl text-black max-w-[90%]">
                <p className="text-sm tracking-wider">How can I participate?</p>
              </div>
            </div>

            {/* Response */}
            <div className="flex justify-start mb-2">
              <div className="bg-gray-800 p-4 rounded-2xl text-white max-w-[90%] w-auto">
                <p className="text-sm tracking-wider">
                  To participate, you’d usually need to register through VTOP,
                  VIT’s internal portal. The good news is, there’s no
                  registration fee for the events or workshops
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-gray-800 flex-1 p-2 text-white rounded-xl text-sm"
            />
            <button
              className="ml-2 p-2 rounded-full text-white"
              style={{
                background:
                  "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
              }}
            >
              <Image
                src="/icons/send-button.svg"
                width={15}
                height={15}
                alt=""
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
