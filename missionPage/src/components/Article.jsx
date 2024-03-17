import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import { Mongol1 } from "./mongol/Mongol1";
import { Japan1 } from "./japan/Japan1";
import { Kimcheon1 } from "./korea/Kimcheon1";
import { Ansan1 } from "./korea/Ansan1";
import { RollingBanner } from "./RollingBanner";
import { Ilsan1 } from "./korea/Ilsan1";

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
        <RollingBanner selectedItem={selectedItem} />

        {selectedItem === "1" && (
          <>
            <Mongol1 />
          </>
        )}

        {selectedItem === "2" && (
          <>
            <Japan1 />
          </>
        )}

        {selectedItem === "3" && (
          <>
            <Kimcheon1 />
          </>
        )}
        {selectedItem === "4" && (
          <>
            <Ansan1 />
          </>
        )}
        {selectedItem === "5" && (
          <>
            <Ilsan1 />
          </>
        )}
      </Wrap>
    </>
  );
};
Article.propTypes = {
  selectedItem: PropTypes.string.isRequired,
};
export { Article };
