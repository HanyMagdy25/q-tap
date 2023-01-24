import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
const url_main = "http://q-tap-dashboard.technomasrsystems.com";

function App() {
  const [lang, setLang] = useState("en");
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productsData, setProductsData] = useState(true);
  const [tokenQTap, setTokenQTap] = useState(null);

  // console.log("userName",userName)

  // To Change Direction In Body html and css
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [lang]);

  // To Fetch Products Data
  useEffect(() => {
    fetch(`${url_main}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadingProducts(false);
        setProductsData(data.data);
      });
  }, [lang]);

  useEffect(() => {
    setTokenQTap(
      localStorage.getItem("token-q-tap")
        ? JSON.parse(localStorage.getItem("token-q-tap"))
        : null
    );
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar setLang={setLang} lang={lang} tokenQTap={tokenQTap} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                lang={lang}
                productsData={productsData}
                loadingProducts={loadingProducts}
                tokenQTap={tokenQTap}
              />
            }
          />
          <Route path="/about" element={<About lang={lang} />} />
          <Route
            path="/store"
            element={
              <Store
                productsData={productsData}
                tokenQTap={tokenQTap}
                loadingProducts={loadingProducts}
                lang={lang}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <Product
                lang={lang}
                productsData={productsData}
                tokenQTap={tokenQTap}
              />
            }
          />
          <Route path="/register" element={<Register lang={lang} />} />
          <Route path="/login" element={<Login lang={lang} />} />
          <Route path="/terms" element={<Terms lang={lang} />} />
          <Route path="/policy" element={<Policy lang={lang} />} />
          <Route
            path="/forget-password"
            element={<ForgetPassword lang={lang} />}
          />
          <Route
            path="/cart"
            element={<Cart lang={lang} tokenQTap={tokenQTap} />}
          />
          <Route path="/Contact" element={<ContactUs lang={lang} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
