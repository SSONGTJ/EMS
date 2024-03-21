import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (userName === "admin" && password === "emmaus1004") {
      setIsLogin(true);
    } else {
      alert("아이디나 비밀번호를 확인하세요!");
    }
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </Container>
  );
};
export { Login };
