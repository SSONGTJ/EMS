import styled from "styled-components";
import { Login } from "../pages/Login";
import { Button, Popover } from "@mui/material";

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
  return (
    <>
      <Container>
        <Title>EMS 소개</Title>
      </Container>
      <LoginButton>관리자 로그인</LoginButton>
      <Popover>
        <Login />
      </Popover>
    </>
  );
};
export { ViewHeader };
