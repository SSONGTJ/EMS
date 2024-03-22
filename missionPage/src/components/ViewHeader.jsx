import styled from "styled-components";
import { Login } from "../pages/Login";
import { Button, Popover } from "@mui/material";
import { useState } from "react";

const Title = styled.h1`
  margin-top: 20px;
`;
const Container = styled.div`
  display: flex;
`;

const LoginButton = styled(Button)`
  position: absolute;
  right: 0;
`;

const ViewHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (status) => {
    setIsLogin(status);
    setModalAnc(null);
  };
  const handleLogOut = () => {
    setIsLogin(false);
  };

  const [modalAnc, setModalAnc] = useState(null);
  const LoginOpen = Boolean(modalAnc);
  const handleOpenLogin = () => {
    setModalAnc(true);
  };
  const handleCloseLogin = () => {
    setModalAnc(null);
  };
  return (
    <>
      <Container>
        <Title>EMS 소개</Title>
      </Container>

      {isLogin === true ? (
        <>
          <p>ㅎㅇ admin</p>
          <Button onClick={handleLogOut}>로그아웃</Button>
        </>
      ) : (
        <>
          <LoginButton onClick={handleOpenLogin}>관리자 로그인</LoginButton>
        </>
      )}

      <Popover
        open={LoginOpen}
        onClose={handleCloseLogin}
        anchorReference="anchorPosition"
        anchorPosition={{
          left: window.innerWidth / 2,
          top: window.innerHeight / 2,
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        style={{
          padding: "20px",
        }}
      >
        <Login isLogin={isLogin} handleLogin={handleLogin} />
      </Popover>
    </>
  );
};
export { ViewHeader };
