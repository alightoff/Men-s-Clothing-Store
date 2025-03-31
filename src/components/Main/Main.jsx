import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-dirt text-white mb-6 leading-tight">
            Одежда, которая <br className="hidden md:block" /> <span className="text-yellow-400">подчеркнёт</span> ваш стиль
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Качественные материалы. Современные фасоны. Идеальная посадка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/catalog" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              В каталог
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              О нас
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="md:w-1/2 relative grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="relative group overflow-hidden rounded-xl aspect-square">
            <img
              src="/assets/mainIcons/shirt.png"
              alt="Рубашки"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300 flex items-end p-4">
              <span className="text-white font-bold text-xl">Рубашки</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl aspect-square">
            <img
              src="/assets/mainIcons/jeans.png"
              alt="Джинсы"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300 flex items-end p-4">
              <span className="text-white font-bold text-xl">Джинсы</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl aspect-square">
            <img
              src="/assets/mainIcons/jacket.png"
              alt="Куртки"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300 flex items-end p-4">
              <span className="text-white font-bold text-xl">Куртки</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl aspect-square">
            <img
              src="/assets/mainIcons/glasses.png"
              alt="Аксессуары"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300 flex items-end p-4">
              <span className="text-white font-bold text-xl">Аксессуары</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500 opacity-10 mix-blend-overlay"></div>
      <div className="hidden lg:block absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
    </div>
  );
};

export default Main;