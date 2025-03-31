import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-dashed border-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Лого и описание */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-dirt mb-4">Velvet & Cotton</h2>
            <p className="text-gray-300 mb-6">
              Магазин качественной одежды и аксессуаров. 
              Создаем стиль, который говорит о вас.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-dirt text-xl mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-dirt text-xl mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiMail className="mr-3" />
                <span className="text-gray-300">info@velvetcotton.com</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3" />
                <span className="text-gray-300">+7 (123) 456-78-90</span>
              </li>
              <li className="text-gray-300">
                Пн-Пт: 9:00 - 20:00<br />
                Сб-Вс: 10:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Velvet & Cotton. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;