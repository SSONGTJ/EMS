import { styled } from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;
const FirstPic = styled.div`
  width: 40%;
  height: 300px;
  background-color: pink;
  margin-right: 10px;
`;

const FirstCont = styled.div`
  width: 50%;
  height: 300px;
  background-color: green;
  margin-left: 10px;
`;

const Kimcheon1 = () => {
  return (
    <>
      <Wrap>
        <FirstPic>사진</FirstPic>
        <FirstCont>사진 설명</FirstCont>
      </Wrap>
    </>
  );
};
export { Kimcheon1 };
