import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
    baseURL: "http://localhost:3001/comments",
    timeout: 1500
});

commentsAxios.interceptors.request.use(async (config) => {
    try {

    }
    catch (error) {

    }
});

commentsAxios.interceptors.response.use((response) => {
    console.log(”요청 성공입니다.”);
    return response;
},
    (error) => {
        console.log(”요청 실패입니다.”);
        return Promise.reject(error);
    }
);

export default commentsAxios;