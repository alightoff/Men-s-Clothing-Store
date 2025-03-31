import React, { useState } from 'react';
import { useCart } from '../../../store/store';
import { toast } from 'react-toastify';
import { FiX } from 'react-icons/fi';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных на сервер
    console.log('Order submitted:', { 
      customer: formData, 
      items: cart,
      total: getTotalPrice()
    });
    
    toast.success('Заказ успешно оформлен!', {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
    });
    
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-md relative">
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>
        
        <h2 className="text-2xl font-dirt text-white mb-6">Оформление заказа</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm mb-2">Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm mb-2">Адрес</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              required
            />
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-lg font-dirt text-white">
              Итого: <span className="text-yellow-400">{getTotalPrice().toFixed(2)}$</span>
            </p>
          </div>
          
          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg border border-gray-600 transition-colors"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg border border-yellow-500 transition-colors font-medium"
            >
              Подтвердить заказ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;