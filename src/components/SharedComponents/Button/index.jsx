import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const ColorButtons = (props) => {
  const { innerText, type } = props;
  const theme = createTheme({
    ButtonRedTheme: {
      backgroundColor: "#DB4444",
      border: "none",
      color: "#FAFAFA",
      padding: "16px 48px 16px 48px",
      fontSize: 16,
      lineHeight: 2,
      "&:hover": {
        backgroundColor: "#DB4444",
        border: "none",
        color: "#FAFAFA",
        padding: " 16px 48px 16px 48px",
        fontSize: 16,
        lineHeight: 2,
      },
      "&:active": {
        backgroundColor: "#DB4444",
        border: "none",
        color: "#FAFAFA",
        padding: " 16px 48px 16px 48px",
        fontSize: 16,
        lineHeight: 2,
      },
    },
    ButtonGreenTheme: {
      backgroundColor: "#00FF66",
      border: "none",
      color: "#FAFAFA",
      padding: "16px 48px 16px 48px",
      fontSize: 16,
      lineHeight: 2,
      "&:hover": {
        backgroundColor: "#00FF66",
        border: "none",
        color: "#FAFAFA",
        padding: " 16px 48px 16px 48px",
        fontSize: 16,
        lineHeight: 2,
      },
      "&:active": {
        backgroundColor: "#00FF66",
        border: "none",
        color: "#FAFAFA",
        padding: " 16px 48px 16px 48px",
        fontSize: 16,
        lineHeight: 2,
      },
    },
  });

  return (
    <>
      <Button
        variant="outlined"
        sx={type === "red" ? theme.ButtonRedTheme : theme.ButtonGreenTheme}
      >
        {innerText}
      </Button>
    </>
  );
};

export default ColorButtons;
