import { Container, Box, Avatar, CardMedia } from "@mui/material";
import JBL from "../../assets/Ads/JBL_BOOMBOX.png";
import ColorButtons from "../SharedComponents/Button";
import { createTheme } from "@mui/material/styles";

const Ads = () => {
  const theme = createTheme({
    BlackBoxTheme: {
      width: 1170,
      height: 500,
      backgroundColor: "#000000",
      display: "flex",
    },
    CategoriesTheme: {
      color: "#00FF66",
      paddingTop: 4,
      fontSize: 16,
    },
    BigTitleTheme: {
      color: "#FFFFFF",
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.04em",
    },
    BoxAvatarWrapperTheme: {
      display: "flex",
      paddingTop: 3,
      margin: "0 -24px",
    },
    AvatarTheme: {
      width: 62,
      height: 62,
      textAlign: "center",
      fontSize: 16,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      margin: "0 24px",
      display: "block",
    },
    NumberBoxTheme: {
      alignItems: "center",
      textAlign: "center",
      lineHeight: 2.5,
      fontWeight: 600,
    },
    TimeTheme: {
      alignItems: "center",
      textAlign: "center",
      lineHeight: 0,
      fontSize: 11,
    },
    ButtonTheme: {
      paddingTop: 4,
    },
    ImageTheme: {
      paddingTop: 4,
    },
  });
  return (
    <Container sx={theme.BlackBoxTheme}>
      <Container>
        <Box sx={theme.CategoriesTheme}>Categories</Box>
        <Box sx={theme.BigTitleTheme}>Enhance Your Music Experience</Box>
        <Box sx={theme.BoxAvatarWrapperTheme}>
          <Avatar sx={theme.AvatarTheme}>
            <Box sx={theme.NumberBoxTheme}>23</Box>
            <Box sx={theme.TimeTheme}>Hours</Box>
          </Avatar>
          <Avatar sx={theme.AvatarTheme}>
            <Box sx={theme.NumberBoxTheme}>05</Box>
            <Box sx={theme.TimeTheme}>Days</Box>
          </Avatar>
          <Avatar sx={theme.AvatarTheme}>
            <Box sx={theme.NumberBoxTheme}>59</Box>
            <Box sx={theme.TimeTheme}>Minuets</Box>
          </Avatar>
          <Avatar sx={theme.AvatarTheme}>
            <Box sx={theme.NumberBoxTheme}>35</Box>
            <Box sx={theme.TimeTheme}>Seconds</Box>
          </Avatar>
        </Box>
        <Box sx={theme.ButtonTheme}>
          <ColorButtons type={"Green"} innerText={"Buy Now!"} />
        </Box>
      </Container>
      <Container>
        <CardMedia component={"img"} image={JBL} sx={theme.ImageTheme} />
      </Container>
    </Container>
  );
};

export default Ads;
