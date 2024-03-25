import { styled } from "styled-components";
import { QnAForm } from "./QnAForm";
import { PropTypes } from "prop-types";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const QnA = ({ selectedItem, userName }) => {
  return (
    <>
      <Wrap>
        {selectedItem === 0 && (
          <>
            <h2>공통 QnA</h2>
          </>
        )}
        {selectedItem === 1 && (
          <>
            <h2>몽골 QnA</h2>
          </>
        )}
        {selectedItem === 2 && (
          <>
            <h2>일본 QnA</h2>
          </>
        )}
        {selectedItem === 3 && (
          <>
            <h2>안산 QnA</h2>
          </>
        )}
        {selectedItem === 4 && (
          <>
            <h2>일산 QnA</h2>
          </>
        )}
        {selectedItem === 5 && (
          <>
            <h2>김천 QnA</h2>
          </>
        )}
        <QnAForm selectedItem={selectedItem} userName={userName} />
      </Wrap>
    </>
  );
};
QnA.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};
export { QnA };
