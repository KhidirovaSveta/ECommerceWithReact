import { Route, Routes } from "react-router-dom";
// import Header from "./layouts/header";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./layouts/footer";
import Account from "./pages/account";
import DetailPage from "./pages/details-page";
import { useState } from "react";
import BasketPage from "./pages/basket-page";
import ErrorPage from "./pages/error-page";
import Header from "./layouts/scroll-header";
import Wishlist from "./pages/wishlist";

function App() {
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);
  const [wishlist, setWishlist] = useState([])

  return (
    <div className="App">
      {/* <Head /> */}
      <Header count={count} setCount={setCount}/>
      <Routes>
        <Route path="/" element={<Home basket={basket} setBasket={setBasket}  count={count} setCount={setCount} wishlist={wishlist} setWishlist={setWishlist}/>} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/account" element={<Account />} />
        <Route
          path="/pages/details-page/:id"
          element={<DetailPage basket={basket} setBasket={setBasket} count={count} setCount={setCount} />}
        />
        <Route
          path="/pages/basket-page"
          element={<BasketPage basket={basket} setBasket={setBasket} count={count} setCount={setCount}/>}
        />
        <Route path="/pages/error-page" element={<ErrorPage/>}/>
        <Route path="/pages/wishlits" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
