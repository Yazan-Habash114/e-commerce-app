import { Box, createTheme } from "@mui/material";
import React from "react";

const SubTitle = ({ SubTitle }) => {
  const theme = createTheme({
    SubTitleTheme: {
      fontFamily: "Poppins",
      fontWight: "600",
      fontSize: "16px",
      lineHight: "20px",
      color: "#DB4444",
    },
  });
  return (
    <>
      <Box sx={theme.SubTitleTheme}>{SubTitle}</Box>
    </>
  );
};

export default SubTitle;
