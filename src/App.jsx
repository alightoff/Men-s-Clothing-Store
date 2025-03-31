// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <Router>
      <div className="font-main bg-gradient-to-br from-pink-500 to-yellow-500 min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
