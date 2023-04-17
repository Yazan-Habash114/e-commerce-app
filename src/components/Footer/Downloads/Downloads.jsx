import styled from "styled-components";
import QRCode from "../../../assets/Footer/QR.png";
import GooglePlayAppStore from "../../../assets/Footer/GooglePlayAppStore.png";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import {
  createTheme,
  ThemeProvider,
  styled as styling,
} from "@mui/material/styles";

const customIcon = (icon) => {
  return styling(icon)(({ theme }) => ({
    color: theme.status.primary,
  }));
};

const theme = createTheme({
  status: {
    primary: "white",
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const Images = styled.div`
  display: flex;
  cursor: pointer;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
`;

const CustomFacebook = customIcon(Facebook);
const CustomTwitter = customIcon(Twitter);
const CustomInstagram = customIcon(Instagram);
const CustomLinkedIn = customIcon(LinkedIn);

const Downloads = () => {
  return (
    <Container>
      <Images>
        <img src={QRCode} alt="QR code" width="76px" height="76px" />
        <img
          src={GooglePlayAppStore}
          alt="Google play and app store"
          width="104px"
          height="76px"
        />
      </Images>
      <SocialMedia>
        <ThemeProvider theme={theme}>
          <CustomFacebook />
          <CustomTwitter />
          <CustomInstagram />
          <CustomLinkedIn />
        </ThemeProvider>
      </SocialMedia>
    </Container>
  );
};

export default Downloads;
