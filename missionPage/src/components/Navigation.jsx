import { useEffect } from "react";
import { ListItem, List } from "@mui/material";
import styled from "styled-components";
import { axiosClient } from "../util/axiosClient";
import { PropTypes } from "prop-types";

const MenuList = styled(List)`
  display: flex;
`;
const MenuItem = styled(ListItem)`
  cursor: pointer;
`;

const Navigation = ({ region, setRegion, setSelectedItem }) => {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    await axiosClient.get("/regionList").then((res) => {
      setRegion(res.data);
    });
  };

  const handleItemClick = (id) => {
    setSelectedItem(Number(id));
  };

  return (
    <>
      <MenuList>
        {region.map((item) => (
          <MenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.region}
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

Navigation.propTypes = {
  region: PropTypes.array.isRequired,
  setRegion: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export { Navigation };
