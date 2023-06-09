import BestSellingProduct from "../components/Sliders/best-selling-products";
import Arrivals from "../components/Arrivals/Arrivals";
import AppServices from "../components/AppServices/AppServices";
import FooterContainer from "../components/Footer/FooterContainer/FooterContainer";
import Ads from "../components/Ads";
import FlashSalesProduct from "../components/Sliders/flash-sales";
import BrowseByCategory from "../components/Sliders/browse-by-category";
import ExploreOurProducts from "../components/Sliders/explore-our-products";
import Header from "../components/Layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FlashSalesProduct />
      <BrowseByCategory />
      <BestSellingProduct />
      <Ads />
      <ExploreOurProducts />
      <Arrivals />
      <AppServices />
      <FooterContainer />
    </div>
  );
};

export default HomePage;
