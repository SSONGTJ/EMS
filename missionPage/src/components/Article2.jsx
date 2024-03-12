import { styled } from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Cont = styled.div`
  width: 90%;
  height: 300px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  & > p {
    margin: 15px 0;
  }
`;

const Article2 = () => {
  return (
    <>
      <Wrap>
        <h2>EMS 팀장의 한마디</h2>
        <Cont>
          <p>아~ 나중엔 맛보고 싶어도 못본다!</p>
          <p>복음의 맛 아~~ 달디달디달디달디달아</p>
          <p>하루라도 젊을 때 떠나자!</p>
        </Cont>
      </Wrap>
    </>
  );
};

export { Article2 };
