import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Container = styled.div`
  display: flex;
`;

const Login = ({ handleLogin, userName, setUserName }) => {
  const [password, setPassword] = useState("");
  const handleLoginForm = () => {
    if (userName === "admin" && password === "emmaus1004") {
      handleLogin(true);
    } else {
      alert("아이디나 비밀번호를 확인하세요!");
    }
  };

  return (
    <Container>
      <form onSubmit={handleLoginForm}>
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">로그인</Button>
      </form>
    </Container>
  );
};
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
};
export { Login };
