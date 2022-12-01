import axios from "axios";

export const HttpClient = axios.create({
     baseURL: "https://5ed74760152c310016d84d62.mockapi.io",
     withCredentials: false,
     headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
     }
});