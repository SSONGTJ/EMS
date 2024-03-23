import { styled } from "styled-components";
import { ViewHeader } from "../components/ViewHeader";
import { Navigation } from "../components/Navigation";
import { List } from "@mui/material";
import { Article } from "../components/Article";
import { useState } from "react";
import { Article2 } from "../components/Article2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBar = styled(List)``;

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 5px #a4a4a4;
  z-index: 10;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

const View = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [region, setRegion] = useState([]);

  const [userName, setUserName] = useState("");

  return (
    <Container>
      <Nav>
        <ViewHeader userName={userName} setUserName={setUserName} />
        <MenuBar>
          <Navigation
            region={region}
            setRegion={setRegion}
            setSelectedItem={setSelectedItem}
          />
        </MenuBar>
      </Nav>
      <Content>
        <Article selectedItem={selectedItem} userName={userName} />
        <Article2 />
      </Content>
    </Container>
  );
};

export { View };
