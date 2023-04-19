import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Test from "./pages/Test";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import {mockData} from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Homepage" element={<HomePage />} />

        <Route path='/products/:productId' element={<ProductDetails data={mockData} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
