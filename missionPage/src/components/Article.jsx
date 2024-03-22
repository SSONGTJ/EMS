import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import { MongolImg } from "./mongol/MongolImg";
import { JapanImg } from "./japan/JapanImg";
import { AnsanImg } from "./korea/AnsanImg";
import { IlsanImg } from "./korea/IlsanImg";
import { QnA } from "./QnA";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Article = ({ selectedItem }) => {
  return (
    <>
      <Wrap>
        {selectedItem === 1 && (
          <>
            <MongolImg />
          </>
        )}

        {selectedItem === 2 && (
          <>
            <JapanImg />
          </>
        )}
        {selectedItem === 3 && (
          <>
            <AnsanImg />
          </>
        )}
        {selectedItem === 4 && (
          <>
            <IlsanImg />
          </>
        )}
        <QnA selectedItem={selectedItem} />
      </Wrap>
    </>
  );
};
Article.propTypes = {
  selectedItem: PropTypes.number.isRequired,
};
export { Article };
