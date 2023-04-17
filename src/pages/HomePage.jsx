import React from "react";
import BestSellingProduct from "../components/Sliders/best-selling-products";
import Arrivals from "../components/Arrivals/Arrivals";
import AppServices from "../components/AppServices/AppServices";
import FooterContainer from "../components/Footer/FooterContainer/FooterContainer";

const HomePage = () => {
  return (
    <div>
      <BestSellingProduct />
      <Arrivals />
      <AppServices />
      <FooterContainer />
    </div>
  );
};

export default HomePage;
