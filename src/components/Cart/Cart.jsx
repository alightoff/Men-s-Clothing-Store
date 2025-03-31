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
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Корзина очищена!', {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-11rem)] py-6">
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
      
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-dirt mb-6 text-center">Корзина пуста</p>
          <Link 
            to="/catalog" 
            className="px-6 py-3 bg-black text-white rounded-full border-2 border-dashed border-white hover:bg-gray-800 transition-colors text-lg"
          >
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <>
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

            <div className="lg:w-80 bg-white/50 p-6 rounded-xl border-2 border-dashed border-black h-fit sticky top-28">
              <h3 className="text-xl font-dirt mb-4">Ваш заказ</h3>
              
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}-summary`} className="flex justify-between">
                    <span className="font-medium">
                      {item.title} ({item.size}) × {item.count}
                    </span>
                    <span>
                      {item.sale > 0 ? (
                        <span className="text-red-500">
                          {((item.price - (item.price * item.sale) / 100) * item.count).toFixed(2)}$
                        </span>
                      ) : (
                        <span>{(item.price * item.count).toFixed(2)}$</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Итого:</span>
                  <span>{getTotalPrice().toFixed(2)}$</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleClearCart}
                  className="w-full py-3 bg-white text-black rounded-lg border-2 border-dashed border-black hover:bg-gray-100 transition-colors"
                >
                  Очистить корзину
                </button>
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3 bg-black text-white rounded-lg border-2 border-dashed border-white hover:bg-gray-800 transition-colors"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;