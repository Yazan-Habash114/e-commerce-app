import React from "react";
import BestSellingProduct from "../components/Sliders/best-selling-products";
import Arrivals from "../components/Arrivals/Arrivals";
import AppServices from "../components/AppServices/AppServices";
import FooterContainer from "../components/Footer/FooterContainer/FooterContainer";
import Ads from "../components/Ads";

const HomePage = () => {
  return (
    <div>
      <Ads />
      <BestSellingProduct />
      <Arrivals />
      <AppServices />
      <FooterContainer />
    </div>
  );
};

export default HomePage;
