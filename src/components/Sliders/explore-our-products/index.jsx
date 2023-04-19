import { Container, Box, Avatar } from "@mui/material";
import { exploreOurProductsData, mockData } from "../../../data";
import React from "react";
import TitleTag from "../../SharedComponents/TitleTag/index";
import SubTitle from "../../SharedComponents/SubTitle";
import ColorButtons from "../../SharedComponents/Button";
import { createTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExploreCard from "../../SharedComponents/Card/exploreCard";
import Icon from "../../SharedComponents/Icons";

const ExploreOurProducts = () => {
  const newWord = "NEW";
  const theme = createTheme({
    TitleTheme: {
      display: "flex",
      alignItems: "center",
    },
    BigTitleTheme: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    SubTitleTheme: {
      paddingLeft: 1,
    },
    CardTheme: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 5,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    ArrowCircleTheme: {
      backgroundColor: "#F5F5F5",
      borderRadius: "50%",
      width: 30,
      height: 30,
    },
    ButtonTheme: {
      marginTop: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    AvatarTheme: {
      width: "46px",
      height: "46px",
      fontSize: 16,
      color: "#000",
      backgroundColor: "#F5F5F5;",
      marginLeft: "5px",
    },
    BoxAvatarWrapperTheme: {
      display: "flex",
      paddingTop: 3,
    },
  });

  return (
    <Container>
      <Box sx={theme.TitleTheme}>
        <Box>
          <TitleTag />
        </Box>
        <Box sx={theme.SubTitleTheme}>
          <SubTitle SubTitle="Today's" />
        </Box>
      </Box>

      <Box sx={theme.BigTitleTheme}>
        <Box>
          <h1>Explore Our Products</h1>
        </Box>

        <Box sx={theme.BoxAvatarWrapperTheme}>
          <Avatar sx={theme.AvatarTheme}>
            <Icon icon={<ArrowBackIcon />} />
          </Avatar>

          <Avatar sx={theme.AvatarTheme}>
            <Icon icon={<ArrowForwardIcon />} />
          </Avatar>
        </Box>
      </Box>

      <Box sx={theme.CardTheme}>
        {mockData.map(
          (item, index) =>
            index < 8 && (
              <Box key={item.id}>
                <ExploreCard
                  id={item.id}
                  discount={index === 4 || index === 6 ? newWord : false}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  onOff={false}
                  display={index === 4 || index === 6 ? true : false}
                />
              </Box>
            )
        )}
      </Box>

      <Box sx={theme.ButtonTheme}>
        <ColorButtons type={"red"} innerText={"View All Products"} />
      </Box>
    </Container>
  );
};

export default ExploreOurProducts;
