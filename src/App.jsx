import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
