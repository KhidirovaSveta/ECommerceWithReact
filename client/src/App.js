import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./layouts/footer";
import Account from "./pages/account";
import DetailPage from "./pages/details-page";
import { useState } from "react";
import BasketPage from "./pages/basket-page";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home basket={basket} setBasket={setBasket} />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/account" element={<Account />} />
        <Route
          path="/pages/details-page/:id"
          element={<DetailPage basket={basket} setBasket={setBasket} />}
        />
        <Route
          path="/pages/basket-page"
          element={<BasketPage basket={basket} setBasket={setBasket} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
