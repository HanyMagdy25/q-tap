import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Policy from "./pages/Policy";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
