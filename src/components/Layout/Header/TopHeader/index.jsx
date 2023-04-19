import React from "react";
import LinkHeader from "./Link";
import Paragraph from "./Paragraph";
import SelectHeader from "./Select";
import { Box } from "@mui/material";

const TopHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "48px",
        width: "1440px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paragraph />
      <LinkHeader />
      <SelectHeader />
    </Box>
  );
};

export default TopHeader;
