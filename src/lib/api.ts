import axios, { AxiosError } from "axios"
import { setupCache } from "axios-cache-interceptor";

const axiosInstance =setupCache(axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + 'api/',
}), {
    ttl: 2 * 60 * 1000, // 2 minute
})

export interface Pagination {
    total: number,
    page: number,
    limit: number,
    totalPages: number,
}

export interface EventData {
    _id: string,
    clubName: string,
    eventType: string,
    eventName: string,
    eventPoster: string,
    eventLogo: string[],
    venue: string,
    eventDescription: string,
    isCollaborative: boolean,
    isOvernight: boolean,
    collaborativeWith: string[],
    tags: string[],
    eventEnd: string,
    eventStart: string,
}

interface FetchEventsResponse{
    data?: EventData[];
    status: string;
    message: string;
    pagination?: Pagination;
}

export interface FetchEventsParams {
    page?: number,
    limit?: number,
    search?: string,
    eventType?: string
}

export const fetchEvents = async ({
    params,
    signal,
}: {
    params?: FetchEventsParams;
    signal?: AbortSignal;
}): Promise<FetchEventsResponse | void> => {
    try {
        const response = await axiosInstance.get('events', {
            params,
            signal,
            headers: {
                'ngrok-skip-browser-warning': "true",
            }
        });
        if (response.data.status === "error") {
            return { status: "error", message: "Internal Server Error" }
        }
        return response.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("Request cancelled");
        }
        else return { status: "error", message: "Internal Server Error" }
    }
}

interface FetchEventResponse {
    status: string,
    message: string,
    event?: EventData,
    similarEvents?: EventData[],
}

export const fetchEvent = async ({
    id,
}: {
    id: string;
}): Promise<FetchEventResponse | void> => {
    try {
        const response = await axiosInstance.get(`events/${id}`, {
            headers: {
                'ngrok-skip-browser-warning': "true",
            }
        });
        if (response.data.status === "error"){
            return { status: "error", message: "Internal Server Error" }
        }
        return response.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("Request cancelled");
        }
        else return { status: "error", message: "Internal Server Error" }
    }
}

export default axiosInstance;
