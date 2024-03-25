import axios from "axios";

// axios 인스턴스 생성
const axiosClient = axios.create({
  // baseURL: "http://localhost:3001", // 로컬 작업
  // baseURL: "https://official-emmaus.com/ems",
  baseURL: "https://alder-efficient-son.glitch.me",
  timeout: 5000, // 타임아웃 설정 (ms)
  headers: {
    "Content-Type": "application/json", // 기본 헤더 설정
  },
});

export { axiosClient };
