import { styled } from "styled-components";
import { Button } from "@mui/material";

const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = ({ title, image }) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <div style={{ marginBottom: "20px" }}>
        {/* 여기에 글 적는 input을 넣을 수 있습니다 */}
        <textarea rows="4" cols="50" placeholder="여기에 글을 입력하세요..." />
      </div>
      <div>
        {/* 줌인/줌아웃 버튼 대신에 다른 기능을 넣을 수 있습니다 */}
        {/* 예를 들어 저장 버튼 등을 추가할 수 있습니다 */}
        <Button variant="contained" color="primary">
          Save
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Section;
