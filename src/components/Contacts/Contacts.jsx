import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaVk, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Contacts = () => {
  const contacts = [
    {
      icon: <FiPhone className="text-yellow-400" size={20} />,
      text: '+7 (900) 123-45-67',
      link: 'tel:+79001234567'
    },
    {
      icon: <FiMail className="text-yellow-400" size={20} />,
      text: 'info@velvetcotton.com',
      link: 'mailto:info@velvetcotton.com'
    },
    {
      icon: <FiMapPin className="text-yellow-400" size={20} />,
      text: 'г. Москва, ул. Примерная, 123',
      link: 'https://maps.google.com'
    }
  ];

  const socials = [
    { icon: <FaVk size={20} />, name: 'VK', link: 'https://vk.com' },
    { icon: <FaTelegramPlane size={20} />, name: 'Telegram', link: 'https://telegram.org' },
    { icon: <FaInstagram size={20} />, name: 'Instagram', link: 'https://instagram.com' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-12 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 sm:p-10 md:p-12 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-dirt text-white text-center mb-6 md:mb-10">
            Свяжитесь с нами
          </h2>
          
          <p className="text-gray-300 text-center text-lg md:text-xl mb-8 md:mb-12">
            Наши специалисты помогут подобрать стильный образ, ответят на вопросы о заказе и условиях доставки.
          </p>

          {/* Форма обратной связи */}
          <div className="mb-12">
            <h3 className="text-xl font-dirt text-yellow-400 mb-4">Заполните форму</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  className="bg-gray-700 border-b border-gray-600 w-full py-3 px-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                  type="text"
                />
                <input 
                  className="bg-gray-700 border-b border-gray-600 w-full py-3 px-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Ваш номер"
                  type="tel"
                />
                <input 
                  className="bg-gray-700 border-b border-gray-600 w-full py-3 px-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className="bg-gray-700 border-b border-gray-600 w-full py-3 px-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors md:col-span-2"
                  placeholder="Ваше сообщение"
                  rows="3"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 text-lg w-full md:w-auto"
              >
                Отправить заявку
              </button>
            </form>
          </div>

          {/* Контактная информация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-dirt text-yellow-400 mb-4">Контакты</h3>
              <ul className="space-y-4">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                      {contact.icon}
                    </div>
                    <a 
                      href={contact.link} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-xl font-dirt text-yellow-400 mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  {socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors text-white"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-dirt text-yellow-400 mb-4">Режим работы</h3>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <FiClock className="text-yellow-400" size={20} />
                  </div>
                  <p className="text-gray-300">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;