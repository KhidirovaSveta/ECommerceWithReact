import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./layouts/footer";
import Account from "./pages/account";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/pages/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
