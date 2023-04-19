import { Container, Box } from "@mui/material"; 
import { browseByCategoryData } from "../../../data"; 
import React from "react"; 
import TitleTag from "../../SharedComponents/TitleTag/index"; 
import SubTitle from "../../SharedComponents/SubTitle"; 
import BrowseCard from "../../SharedComponents/SimpleCard"; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme } from "@mui/material/styles";
import Icon from "../../SharedComponents/Icons"; 

const BrowseByCategory = () => {
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
          <SubTitle SubTitle="Categories" />
        </Box>
      </Box>

      <Box sx={theme.BigTitleTheme}>
        <Box>
          <h1>Browse By Categroy</h1>
        </Box> 
        <Box>
          <Icon icon={<ArrowBackIcon />}/>
          <Icon icon={<ArrowForwardIcon />}/>
        </Box> 
      </Box>

      <Box sx={theme.CardTheme}>
        {browseByCategoryData.map(
          (item, index) =>
            index < 8 && (
              <Box key={item.id}>
                <BrowseCard 
                  icon={item.icon}
                  title={item.title} 
                  onOff={false} 
                />
              </Box>
            )
        )}
      </Box>
    </Container>
  );

};

export default BrowseByCategory;
