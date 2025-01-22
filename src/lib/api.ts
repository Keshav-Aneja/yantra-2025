import axios, { AxiosError } from "axios"
import { setupCache } from "axios-cache-interceptor";

const axiosInstance =setupCache(axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + 'api/',
}), {
    ttl: 2 * 60 * 1000, // 5 minute
})

export const fetchEvents = async ({
    params,
    signal,
}: {
    params?: any;
    signal?: AbortSignal;
})=>{
    try {
        const response = await axiosInstance.get('events', {
            params,
            signal
        });
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.response?.data;
    }
}

export const fetchEvent = async ({
    id,
}: {
    id: string;
}) => {
    try {
        const response = await axiosInstance.get(`events/${id}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        return err.response?.data;
    }
}

export default axiosInstance;
