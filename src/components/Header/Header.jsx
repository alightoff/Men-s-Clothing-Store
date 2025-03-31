import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Хук для получения текущего пути

  const navItems = [
    { id: 1, title: 'О нас', link: '/about' },
    { id: 2, title: 'Контакты', link: '/contacts' },
    { id: 3, title: 'Каталог', link: '/catalog' },
    { id: 4, title: 'Корзина', link: '/cart' },
    { id: 5, title: 'FAQ', link: '/faq' },
  ];

  // Проверяем, соответствует ли текущий путь ссылке в навигации
  const isActive = (link) => {
    return location.pathname === link;
  };

  return (
    <div className="flex justify-around items-center px-10 h-16 m-auto text-black tracking-wide">
      <h1 className="text-5xl font-dirt text-stroke">
        <Link to="/">Velvet & Cotton</Link>
      </h1>
      <ul className="flex gap-10 text-2xl font-dirt">
        {navItems.map(({ title, link, id }) => (
          <li key={id}>
            <Link 
              to={link} 
              className={isActive(link) ? 'border-b-2 border-black' : ''}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;