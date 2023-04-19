import { Container, Box } from "@mui/material"; 
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
  const discounts = ["%40", "%30","%20", "%10", "%40", "%30","%20", "%10"]
  const theme = createTheme({ 
    TitleTheme: { 
      display: "flex", 
      alignItems: "center", 
    }, 
    BigTitleTheme: { 
        display: "flex", 
        justifyContent: "space-between" ,
        alignItems: "center",
    }, 
    SubTitleTheme: { 
      paddingLeft: 1, 
    }, 
    CardTheme: { 
      display: "flex", 
      justifyContent: "space-between", 
      paddingTop: 5, 
    }, 
    ArrowCircleTheme: { 
      backgroundColor: "#F5F5F5", 
      borderRadius: "50%",
      width:30,
      height:30,
    },
    ButtonTheme: { 
      marginTop: 5,
      display: "flex", 
      justifyContent: "center" ,
      alignItems: "center",
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
          <h1>Flash Sales</h1>
        </Box> 
        <Box>
          <Icon icon={<ArrowBackIcon />}/>
          <Icon icon={<ArrowForwardIcon />}/>
        </Box> 
      </Box>

      <Box sx={theme.CardTheme}>
        {mockData.map(
          (item, index) =>
            index < 5 && (
              <Box key={item.id}>
                <ProductCard 
                  discount={(index === 4 || index === 6) ? false : discounts[index]} 
                  image={item.image}
                  title={item.title} 
                  rating={item.rating} 
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