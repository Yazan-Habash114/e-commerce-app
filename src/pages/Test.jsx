
import React from "react"; 
import FlashSalesProduct from "../components/Sliders/flash-sales"
import BrowseByCategory from "../components/Sliders/browse-by-category"
import ExploreOurProducts from "../components/Sliders/explore-our-products"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductDetails from "../pages/ProductDetails"

const Test = () => {
  return <div>
    <FlashSalesProduct />

    <Router>
      <div>
          <Route exact path="/">
            // display your homepage or list of cards
          </Route>
          <Route path="/cards/:cardId" component={ProductDetails} />
      </div>
    </Router>
  </div>;
}

export default Test;
