import React from "react";
import { Container, Box, Avatar, CardMedia } from "@mui/material";
import JBL from "../../assets/Ads/JBL_BOOMBOX.png";
import ColorButtons from "../SharedComponents/Button";
import createTheme from "@mui/material/styles/createTheme";
const Ads = () => {
  const theme = createTheme({
    BlackBoxTheme: {
      width: 1170,
      height: 500,
      backgroundColor: "#000000",
      display: "flex",
    },
  });
  return (
    <Container sx={theme.BlackBoxTheme}>
      <Container>
        <Box sx={{ color: "#00FF66", paddingTop: 4, fontSize: 16 }}>
          Categories
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: "0.04em",
          }}
        >
          Enhance Your Music Experience
        </Box>
        <Box sx={{ display: "flex", paddingTop: 3, margin: "0 -24px" }}>
          <Avatar
            sx={{
              width: 62,
              height: 62,
              textAlign: "center",
              fontSize: 16,
              backgroundColor: "#FFFFFF",
              color: "#000000",

              margin: "0 24px",
              display: "block",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 2.5,
                fontWeight: 600,
              }}
            >
              23
            </Box>
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 0,
                fontSize: 11,
              }}
            >
              Hours
            </Box>
          </Avatar>
          <Avatar
            sx={{
              width: 62,
              height: 62,
              textAlign: "center",
              fontSize: 16,
              backgroundColor: "#FFFFFF",
              color: "#000000",

              margin: "0 24px",
              display: "block",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 2.5,
                fontWeight: 600,
              }}
            >
              05
            </Box>
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 0,
                fontSize: 11,
              }}
            >
              Days
            </Box>
          </Avatar>
          <Avatar
            sx={{
              width: 62,
              height: 62,
              textAlign: "center",
              fontSize: 16,
              backgroundColor: "#FFFFFF",
              color: "#000000",

              margin: "0 24px",
              display: "block",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 2.5,
                fontWeight: 600,
              }}
            >
              59
            </Box>
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 0,
                fontSize: 11,
              }}
            >
              Minuets
            </Box>
          </Avatar>
          <Avatar
            sx={{
              width: 62,
              height: 62,
              textAlign: "center",
              fontSize: 16,
              backgroundColor: "#FFFFFF",
              color: "#000000",

              margin: "0 24px",
              display: "block",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 2.5,
                fontWeight: 600,
              }}
            >
              35
            </Box>
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                lineHeight: 0,
                fontSize: 11,
              }}
            >
              Seconds
            </Box>
          </Avatar>
        </Box>
        <Box sx={{ paddingTop: 4 }}>
          <ColorButtons type={"Green"} innerText={"Buy Now!"} />
        </Box>
      </Container>
      <Container>
        <CardMedia component={"img"} image={JBL} sx={{ paddingTop: 4 }} />
      </Container>
    </Container>
  );
};

export default Ads;
