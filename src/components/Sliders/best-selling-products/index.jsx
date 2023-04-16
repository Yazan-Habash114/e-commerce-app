import { Container, Box } from "@mui/material";
import React from "react";
import TitleTag from "../../SharedComponents/TitleTag/index";
import SubTitle from "../../SharedComponents/SubTitle";

const BestSellingProduct = () => {

  return (
    <Container>
      <Box sx={{display: "flex",
      alignItems: "center",}}>
        <Box>
          <TitleTag />
        </Box>
        <Box sx={{paddingLeft: 1}}>
          <SubTitle SubTitle="This Month" />
        </Box>
      </Box>
     
    </Container>
  );
};

export default BestSellingProduct;
