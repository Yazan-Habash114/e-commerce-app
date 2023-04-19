import { Container } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/SharedComponents/Card";
import { useParams } from 'react-router-dom'; 


const ProductDetails = ({match, data}) => {
  const {productId} = useParams();
  let tmp = data.filter(x => x.id === Number(productId)) 
  console.log(tmp);

  return <>
  {/* <Container>
    <ProductCard />
  </Container> */}

  {/* {tmp.map(item => console.log(item.title))} */}
  </>;
};

export default ProductDetails;
