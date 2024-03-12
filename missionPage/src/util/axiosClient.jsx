import axios from "axios";

// axios 인스턴스 생성
const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  // baseURL: "https://official-emmaus.com/intro_ems/db.json",
  timeout: 5000, // 타임아웃 설정 (ms)
  headers: {
    "Content-Type": "application/json", // 기본 헤더 설정
  },
});

export { axiosClient };
