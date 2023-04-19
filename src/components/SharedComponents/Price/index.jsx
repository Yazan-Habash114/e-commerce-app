import React from "react";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const Price = ({ priceAfterDiscount, priceBeforeDiscount, display }) => {
  const theme = createTheme({
    OuterDiv: {
      display: "flex",
      width: 80,
      height: 24,
      justifyContent: "space-between",
      padding: "0",
      margin: 0,
    },
    priceAfterDiscountTheme: {
      fontFamily: "Poppins",
      fontWeight: 500,
      padding: 0,
      margin: 0,
      fontSize: 16,
      color: "#DB4444",
    },
    priceBeforeDiscountTheme: {
      fontFamily: "Poppins",
      fontWeight: 500,
      padding: 0,
      margin: 0,
      fontSize: 16,
      textDecorationLine: "line-through",
      opacity: 0.5,
    },
  });

  return (
    <Box sx={theme.OuterDiv}>
      <Box sx={theme.priceAfterDiscountTheme}>{`$${priceAfterDiscount}`}</Box>
      {display && (
        <Box
          sx={theme.priceBeforeDiscountTheme}
        >{`$${priceBeforeDiscount}`}</Box>
      )}
    </Box>
  );
};

export default Price;
