import axios, { AxiosInstance } from "axios";
import { env } from "process";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: env.NEXT_BASE_URL,
    timeout: 3000,
})

export default axiosInstance;