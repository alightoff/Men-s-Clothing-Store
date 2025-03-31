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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 mx-6 rounded-lg shadow-2xl">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 h-16 max-w-7xl mx-auto">
          {/* Логотип */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dirt whitespace-nowrap">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Velvet & Cotton
            </Link>
          </h1>

          {/* Десктопное меню */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm md:text-base lg:text-xl font-dirt">
            {navItems.map(({ title, link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`hover:opacity-80 transition-opacity ${
                    isActive(link) ? 'border-b-2 border-black' : ''
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Кнопка бургер-меню */}
          <button
            className="lg:hidden p-2 -mr-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-black transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-black transition-all ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-black transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        <div
          className={`lg:hidden bg-white z-50 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-lg pb-4">
            {navItems.map(({ title, link, id }) => (
              <li key={id} className="w-full text-center">
                <Link
                  to={link}
                  className={`block py-2 font-dirt ${
                    isActive(link)
                      ? 'border-b-2 border-black font-medium'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Отступ для основного контента (равный высоте header) */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;