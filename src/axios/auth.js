import axios from "axios";

export const authApi = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr/",
    headers: {
        "Content-Type": "application/json"
    }
});

authApi.interceptors.request.use((config) => {
    if (config.url.includes('user')) {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) {
            alert("인증이 필요합니다.");
            return Promise.reject("인증이 필요합니다.");
        };
        //congig.headers : 어떻게 저장하더라 .......
    }
})