import axios from "axios";

export const HttpClient = axios.create({
     baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
     withCredentials: false,
     headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
     }
});