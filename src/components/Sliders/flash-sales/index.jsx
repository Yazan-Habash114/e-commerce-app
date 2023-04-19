import { Container, Box, Avatar } from "@mui/material"; 
import { mockData } from "../../../data"; 
import React from "react"; 
import TitleTag from "../../SharedComponents/TitleTag/index"; 
import SubTitle from "../../SharedComponents/SubTitle"; 
import ProductCard from "../../SharedComponents/Card"; 
import ColorButtons from "../../SharedComponents/Button"; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme } from "@mui/material/styles";
import Icon from "../../SharedComponents/Icons"; 

const FlashSalesProduct = () => {
  const discounts = ["%40", "%35","%30", "%25"]
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', transform: 'scale(0.8)', fontSize: "32px", color: "#E07575"}}
    >
      :
    </Box>
  );
  const theme = createTheme({ 
    TitleTheme: { 
      display: "flex", 
      alignItems: "center", 
    }, 
    BigTitleTheme: { 
      display: "flex", 
      alignItems: "center",
      width: "20%"
    }, 
    SubTitleTheme: { 
      paddingLeft: 1, 
    }, 
    CardTheme: { 
      display: "flex", 
      justifyContent: "space-between", 
      paddingTop: 5, 
    }, 
    ButtonTheme: { 
      marginTop: 5,
      display: "flex", 
      justifyContent: "center" ,
      alignItems: "center",
    }, 
    BoxAvatarWrapperTheme: {
      display: "flex",
      paddingTop: 3,
    },
    BoxTheme: {
      fontSize: 16,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      margin: "0 20px",
      display: "block",
    },
    NumberBoxTheme: {
      alignItems: "center",
      textAlign: "center",
      lineHeight: 2,
      fontWeight: 900,
      fontSize: "26px"
    },
    TimeTheme: {
      alignItems: "center",
      textAlign: "center",
      lineHeight: 0,
      fontSize: 11,
    },
    AvatarTheme: {
      width: "46px",
      height: "46px",
      fontSize: 16,
      color: "#000",
      backgroundColor: "#F5F5F5;",
      marginLeft: "5px",
    },
    BoxStyle: {
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      width: "80%"
    },
    BigBoxStyle: {
      display: "flex", 
      alignItems: "center",
    }
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

      <Box sx={theme.BigBoxStyle}>
        <Box sx={theme.BigTitleTheme}>
            <h1>Flash Sales</h1>
        </Box>

        <Box sx={theme.BoxStyle}>
          <Box sx={theme.BoxAvatarWrapperTheme}>
            <Box sx={theme.BoxTheme}>
              <Box sx={theme.TimeTheme}>Days</Box>
              <Box sx={theme.NumberBoxTheme}>03</Box>
            </Box>
            {bull}
            <Box sx={theme.BoxTheme}>
              <Box sx={theme.TimeTheme}>Hours</Box>
              <Box sx={theme.NumberBoxTheme}>23</Box>
            </Box>
            {bull}
            <Box sx={theme.BoxTheme}>
              <Box sx={theme.TimeTheme}>Minutes</Box>
              <Box sx={theme.NumberBoxTheme}>19</Box>
            </Box>
            {bull}
            <Box sx={theme.BoxTheme}>
              <Box sx={theme.TimeTheme}>Seconds</Box>
              <Box sx={theme.NumberBoxTheme}>56</Box>
            </Box>
          </Box>

          <Box sx={theme.BoxAvatarWrapperTheme}>
            <Avatar sx={theme.AvatarTheme}>
              <Icon icon={<ArrowBackIcon />}/>
            </Avatar>

            <Avatar sx={theme.AvatarTheme}>
            <Icon icon={<ArrowForwardIcon />}/>
            </Avatar>
          </Box>
        </Box>  
      </Box>

      <Box sx={theme.CardTheme}>
        {mockData.map(
          (item, index) =>
            index < 4 && (
              <Box key={item.id}>
                <ProductCard 
                  image={item.image}
                  title={item.title} 
                  rating={item.rating} 
                  discount={(index === 4 || index === 6) ? false : discounts[index]} 
                  price={item.price} 
                  onOff={false} 
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

export default FlashSalesProduct;