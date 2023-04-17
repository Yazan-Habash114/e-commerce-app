import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import SubTitle from "../SharedComponents/SubTitle";
import CardMedia from "@mui/material/CardMedia";
const Ads = () => {
  return (
    <Container sx={{ backgroundColor: "#000000", width: 1170, height: 500 }}>
      <Box sx={{ padding: " 50px 0 0 35px " }}>
        <SubTitle SubTitle={"Categories"} />
        <h1 style={{ color: "#FFFFFF", fontSize: 46 }}>
          Enhance Your Music Experience
        </h1>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: 568,
          height: 330,
        }}
        image={"/JBL_BOOMBOX.png"}
        title="JBL Ads"
      />
    </Container>
  );
};

export default Ads;
