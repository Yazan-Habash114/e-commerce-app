import React from "react";
import styledComponents from "styled-components";
import QRCode from "../../../../assets/QR.png";
import GooglePlayAppStore from "../../../../assets/GooglePlayAppStore.png";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const CustomFacebook = styled(FacebookIcon)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const CustomTwitter = styled(TwitterIcon)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const CustomInstagram = styled(InstagramIcon)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const CustomLinkedIn = styled(LinkedInIcon)(({ theme }) => ({
  color: theme.status.primary,
  "&.Mui-checked": {
    color: theme.status.primary,
  },
}));

const theme = createTheme({
  status: {
    primary: "white",
  },
});

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const Images = styledComponents.div`
    display: flex;
`;

const SocialMedia = styledComponents.div`
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
`;

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
