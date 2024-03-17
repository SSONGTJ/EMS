import { PropTypes } from "prop-types";
import { MongolImg } from "./mongol/MongolImg";
import { JapanImg } from "./japan/JapanImg";

const RollingBanner = ({ selectedItem }) => {
  return (
    <>
      {selectedItem === "1" && (
        <>
          <MongolImg selectedItem={selectedItem} />
        </>
      )}

      {selectedItem === "2" && (
        <>
          <JapanImg selectedItem={selectedItem} />
        </>
      )}
    </>
  );
};
RollingBanner.propTypes = {
  selectedItem: PropTypes.string.isRequired,
};
export { RollingBanner };
