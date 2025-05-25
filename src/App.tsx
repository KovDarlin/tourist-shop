import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
