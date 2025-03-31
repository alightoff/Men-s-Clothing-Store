import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./components/About/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <Router>
      <div className="font-main bg-gradient-to-br from-pink-500 to-yellow-500 min-h-screen">
        <Header />
        <div className="flex-grow pt-16"> {/* Добавлен pt-16 для отступа под фиксированный header */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;