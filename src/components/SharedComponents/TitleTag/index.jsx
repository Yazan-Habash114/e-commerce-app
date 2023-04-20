import { Box, createTheme } from "@mui/material";

const TitleTag = () => {
  const theme = createTheme({
    TitleTagTheme: {
      width: "20px",
      height: "40px",
      backgroundColor: "#DB4444",
      borderRadius: "4px",
    },
  });
  return (
    <>
      <Box sx={theme.TitleTagTheme}></Box>
    </>
  );
};

export default TitleTag;
