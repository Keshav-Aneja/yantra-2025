'use server'

import { chatBotApi } from "./api"

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
      return { status: "error", message: res.data.error }
    }

    return { status: "success", message: res.data.result }
  } catch (error) {
    return { status: "error", message: "Internal Server Error" }
  }
}
