import { useState } from "react";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { createTheme } from "@mui/material";

const theme = createTheme({
  plusMinusTheme: {
    width: 40,
    height: 40,
    borderRadius: 0,
    border: "0.5px solid #000000",
    backgroundColor: "white",
    "&:hover": {
      width: 40,
      height: 40,
      border: "none",
      color: "white",
      backgroundColor: "#DB4444",
    },
  },
  borderTheme: {
    width: "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000000",
  },
});

function PlusMinus() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{ width: "130px", border: "1px solid #f5f5f5", display: "flex" }}
    >
      <IconButton
        onClick={handleDecrement}
        sx={theme.plusMinusTheme}
        disabled={count === 0}
      >
        <Remove />
      </IconButton>
      <span style={theme.borderTheme}>{count}</span>
      <IconButton onClick={handleIncrement} sx={theme.plusMinusTheme}>
        <Add />
      </IconButton>
    </div>
  );
}

export default PlusMinus;
