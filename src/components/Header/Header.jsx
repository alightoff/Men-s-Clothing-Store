import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, title: 'О нас', link: '/about' },
    { id: 2, title: 'Контакты', link: '/contacts' },
    { id: 3, title: 'Каталог', link: '/catalog' },
    { id: 4, title: 'Корзина', link: '/cart' },
    { id: 5, title: 'FAQ', link: '/faq' },
  ];

  const isActive = (link) => {
    return location.pathname === link;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Фиксированный header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 h-16 max-w-7xl mx-auto">
          {/* Логотип */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-dirt whitespace-nowrap">
            <Link 
              to="/" 
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Velvet & Cotton
            </Link>
          </h1>

          {/* Десктопное меню */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-base font-medium">
            {navItems.map(({ title, link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    isActive(link) ? 'text-yellow-400' : ''
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Кнопка бургер-меню */}
          <button
            className="lg:hidden p-2 -mr-2 focus:outline-none text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-current transition-all ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-current transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        <div
          className={`lg:hidden bg-gray-800 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-lg pb-4">
            {navItems.map(({ title, link, id }) => (
              <li key={id} className="w-full text-center">
                <Link
                  to={link}
                  className={`block py-2 font-medium ${
                    isActive(link)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Отступ для основного контента */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;