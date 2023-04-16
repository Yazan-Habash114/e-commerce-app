import { Container, Box } from "@mui/material";
import React from "react";
import TitleTag from "../../SharedComponents/TitleTag/index";
import SubTitle from "../../SharedComponents/SubTitle";
import ColorButtons from "../../SharedComponents/Button";
const BestSellingProduct = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <TitleTag />
        </Box>
        <Box sx={{ paddingLeft: 1 }}>
          <SubTitle SubTitle="This Month" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Best Selling Products</h1>
        <ColorButtons type={"red"} innerText={"View All"} />
      </Box>
    </Container>
  );
};

export default BestSellingProduct;
