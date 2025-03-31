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
import Footer from "./components/Footer/Footer"; // Импортируем новый компонент Footer

function App() {
  return (
    <Router>
      <div className="font-main min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow"> {/* Основной контент с отступом под header */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        
        <Footer /> {/* Футер добавлен здесь */}
        
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