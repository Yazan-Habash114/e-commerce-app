import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { mockData } from "./data";
import "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products/:productId"
          element={<ProductDetails data={mockData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
