import React, { useState } from "react";
import CartItem from "../../ui/CartItem";
import { useCart } from "../../../store/store";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CheckoutModal from "../CheckoutModal/CheckoutModal";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleRemoveItem = (itemTitle) => {
    toast.success(`${itemTitle} удален из корзины!`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Корзина очищена!', {
      position: "bottom-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6">
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
      
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-dirt text-white mb-6 text-center">Корзина пуста</p>
          <Link 
            to="/catalog" 
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full transition-colors text-lg font-medium"
          >
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow space-y-4">
              {cart.map(item => (
                <CartItem 
                  key={`${item.id}-${item.size}`} 
                  item={item}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>

            <div className="lg:w-96 bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm h-fit sticky top-28">
              <h3 className="text-xl font-dirt text-white mb-4">Ваш заказ</h3>
              
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}-summary`} className="flex justify-between">
                    <span className="text-gray-300">
                      {item.title} ({item.size}) × {item.count}
                    </span>
                    <span className="font-medium">
                      {item.sale > 0 ? (
                        <span className="text-yellow-400">
                          {((item.price - (item.price * item.sale) / 100) * item.count).toFixed(2)}$
                        </span>
                      ) : (
                        <span className="text-white">{(item.price * item.count).toFixed(2)}$</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between font-dirt text-lg text-white">
                  <span>Итого:</span>
                  <span>{getTotalPrice().toFixed(2)}$</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleClearCart}
                  className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg border border-gray-600 transition-colors"
                >
                  Очистить корзину
                </button>
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg border border-yellow-500 transition-colors font-medium"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;