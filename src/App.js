import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <Route path="/" element={<Layout />}>
          <Route path="/:product-id" element={<ProductDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
