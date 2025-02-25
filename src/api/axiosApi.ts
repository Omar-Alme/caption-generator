import axios from "axios";

export const axiosApi = axios.create({
    // baseURL: "https://api.deepseek.com",
    baseURL: "https://openrouter.ai/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});
