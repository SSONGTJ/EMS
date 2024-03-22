import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Container = styled.div`
  display: flex;
`;

const Login = ({ handleLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const LoginAccess = () => {
    if (userName === "admin" && password === "emmaus1004") {
      handleLogin(true);
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
      <Button onClick={LoginAccess}>로그인</Button>
    </Container>
  );
};
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
export { Login };
