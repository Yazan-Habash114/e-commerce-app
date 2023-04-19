import { Button, CardMedia, Container } from "@mui/material";
import React from "react";
import ProductCard from "../components/SharedComponents/Card";
import { useParams } from "react-router-dom";
import FooterContainer from "../components/Footer/FooterContainer/FooterContainer";
import TopHeader from "../components/Layout/Header/TopHeader";
import BottomHeader from "../components/Layout/Header/BottomHeader";
import { Box } from "@mui/system";
import Ratings from "../components/SharedComponents/Ratings";
import Description from "../components/SharedComponents/Description";
import Price from "../components/SharedComponents/Price";

const ProductDetails = ({ match, data }) => {
  const { productId } = useParams();
  let tmp = data.filter((x) => x.id === Number(productId));
  console.log(tmp);

  return (
    <>
      <TopHeader />
      {/* <BottomHeader /> */}
      <Container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <Box>
            <CardMedia component={"img"} image={tmp.image} />
            <CardMedia component={"img"} image={tmp.image} />
            <CardMedia component={"img"} image={tmp.image} />
            <CardMedia component={"img"} image={tmp.image} />
          </Box>
          <Box>
            <CardMedia component={"img"} image={tmp.image} />
          </Box>
        </Box>

        <Box>
          <h1>This is title</h1>
          <Box sx={{ display: "flex", margin: "0 -5px" }}>
            <Box sx={{ margin: "0 5px" }}>
              <Ratings rating={4} />
            </Box>
            |<Box sx={{ margin: "0 5px" }}>In stock</Box>
          </Box>

          <Price priceBeforeDiscount={500} priceAfterDiscount={100} />
          <Description description="fmdkfdkf" />

          <Box sx={{ display: "flex", margin: "0 -5px" }}>
            <Box
              sx={{
                margin: "0 5px",
                width: "20px",
                height: "20px",
                background: "#A0BCE0",
                borderRadius: "50%",
              }}
            ></Box>
            <Box
              sx={{
                margin: "0 5px",
                width: "20px",
                height: "20px",
                background: "#E07575",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>

          <Box sx={{ display: "flex", margin: "30px" }}>
            <Box>Size:</Box>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              XS
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              S
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                backgroundColor: "#DB4444",
                border: "1px solid #222",
              }}
            >
              ML
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              L
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              XL
            </button>
          </Box>
        </Box>
      </Container>
      <FooterContainer />
    </>
  );
};

export default ProductDetails;
