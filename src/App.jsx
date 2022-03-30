import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart"

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />}> */}
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product" element={<Product />} />
              <Route path="/register" element={<Register />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      );
}

export default App;
