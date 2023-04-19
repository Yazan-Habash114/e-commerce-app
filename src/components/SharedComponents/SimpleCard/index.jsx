import React from "react";
import { Card, Box } from "@mui/material";
import Icon from "../Icons";
import Container from "@mui/material/Container";
import Description from "../Description";
import { createTheme } from "@mui/material";

const theme = createTheme({
  CardTheme: {
    boxShadow: "none",
  },
  ContainerTheme: {
    width: "170px",
    height: "145px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid gray",
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#DB4444",
      width: "170px",
      height: "145px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "4px",
      color: "white",
    },
  },
  CardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70px",
    justifyContent: "space-evenly",
  },
});
const BrowseCard = (props) => {
  const { title, icon } = props;
  return (
    <div>
      <Card sx={theme.CardTheme}>
        <Container sx={theme.ContainerTheme}>
          <Box sx={theme.CardContent}>
            <Icon icon={icon} />
            <Description description={title} />
          </Box>
        </Container>
      </Card>
      <br />
    </div>
  );
};

export default BrowseCard;
