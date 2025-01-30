'use server'
import axios from "axios"

export const chatBotApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHATBOT_URL,
})

interface ChatBotResponse {
  result?: string,
  error?: string,
}

export const askBot = async (question: string) => {
  try {
    const res = await chatBotApi.post<ChatBotResponse>('/ask', {
      question,
    })

    if (res.data.error) {
      console.error(res.data.error)
      return { status: "error", message: res.data.error }
    }

    return { status: "success", message: res.data.result }
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Internal Server Error" }
  }
}
