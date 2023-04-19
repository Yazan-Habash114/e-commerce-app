import React from "react";
import BestSellingProduct from "../components/Sliders/best-selling-products";
import Arrivals from "../components/Arrivals/Arrivals";
import AppServices from "../components/AppServices/AppServices";
import FooterContainer from "../components/Footer/FooterContainer/FooterContainer";
import Ads from "../components/Ads";
import Header from "../components/Layout/Header";
import FlashSalesProduct from "../components/Sliders/flash-sales";
import BrowseByCategory from "../components/Sliders/browse-by-category";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FlashSalesProduct />
      <BrowseByCategory />
      <Ads />
      <BestSellingProduct />
      <Arrivals />
      <AppServices />
      <FooterContainer />
    </div>
  );
};

export default HomePage;
