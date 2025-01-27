"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {askBot} from "@/lib/api";
import {IoMdClose} from "react-icons/io";

interface ChatMessage {
    type: "question" | "answer";
    value: string,
}

export default function Chatbot() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const [chat, setChat] = useState<ChatMessage[]>([
      {
          type: "answer",
          value: "Hey, This is Yantra bot. How can I help you?"
      }
  ]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat, loading]);

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestion(e.target.value);
  }

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (loading || question.trim() == "") return;
      else setLoading(true);

      setChat([...chat, {
        type: "question",
        value: question
      }]);

      setQuestion("");
  }

    useEffect(() => {
        (async ()=>{
            if (loading){
                const response = await askBot(question);

                const chats = chat;

                if (response.status == "error" || !response.message || response.message === "") {
                    chats.push({
                        type: "answer",
                        value: "Sorry, The bot is not available right now. Please try again later."
                    })
                } else {
                    chats.push({
                        type: "answer",
                        value: response.message
                    })
                }

                setLoading(() => {
                    setChat(chats);
                    return false;
                })
            }
        })()
    }, [loading]);


  return (
    <div>
      <div
        className="fixed bottom-5 right-5 bg-red-500 z-50 p-1 rounded-full"
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
          className="fixed bottom-28 right-5 bg-white z-50 p-4 rounded-lg shadow-lg w-[90vw] md:w-[60vw] lg:w-[30vw] xl:w-[20vw]"
          style={{
            backgroundColor: "#161616",
            color: "white",
            borderRadius: "20px",
          }}
        >
            <div className={"relative w-full h-full min-h-96 pb-6"}>
              {/* Header */}
              <div className="flex items-center">
                <h2 className="text-lg font-bold">Chatbox</h2>
                <button className="ml-auto" onClick={toggleChatbox}>
                  <IoMdClose className={"size-5"} />
                </button>
              </div>
                <div
                    className="max-h-[50vh] overflow-y-scroll py-5 scrollbar"
                    ref={chatContainerRef}
                >
                    {chat.length > 0 && chat.map(chatMessage => {
                        if (chatMessage.type === "question") {
                            return (
                                <div className="flex justify-end mb-2">
                                    <div className="bg-white p-4 rounded-2xl text-black max-w-[90%]">
                                        <p className="text-sm tracking-wider">
                                            {chatMessage.value}
                                        </p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="flex justify-start mb-2">
                                    <div className="bg-gray-800 p-4 rounded-2xl text-white max-w-[90%] w-auto">
                                        <p className="text-sm tracking-wider">
                                            {chatMessage.value}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {loading ?? (
                        <div className="flex justify-start mb-2">
                            <div className="bg-gray-800 p-4 rounded-2xl text-white max-w-[90%] w-auto">
                                <p className="text-sm tracking-wider animate-pulse">
                                    {"..."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>


                {/* Footer */}
                <form className="flex items-center mt-4 absolute bottom-0 w-full">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={question}
                        onChange={onInputChange}
                        className="bg-gray-800 flex-1 p-2 text-white rounded-xl text-sm"
                    />
                    <button
                      className="ml-2 p-2 rounded-full text-white"
                      style={{
                        background:
                          "linear-gradient(23.96deg, #76C38F 0%, #60CF8C 48.44%, #A7C12C 100%)",
                      }}
                      onClick={onSubmit}
                    >
                      <Image
                        src="/icons/send-button.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                    </button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
}
