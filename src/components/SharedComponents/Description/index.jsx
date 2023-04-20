import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const Description = (props) => {
  const { description } = props;
  const theme = createTheme({
    DescriptionTheme: {
      fontFamily: "Poppins",
      fontWight: "500",
      fontSize: "16px",
      lineHight: "24px",
    },
  });
  return (
    <>
      <Box sx={theme.DescriptionTheme}>{description}</Box>
    </>
  );
};

export default Description;
