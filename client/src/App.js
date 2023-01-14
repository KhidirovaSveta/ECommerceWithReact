import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./layouts/footer";
import Account from "./pages/account";
import DetailPage from "./pages/details-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/account" element={<Account />} />
        <Route path="/pages/details-page/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
