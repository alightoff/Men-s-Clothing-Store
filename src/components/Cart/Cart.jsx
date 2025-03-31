// Cart.jsx
import React from "react";
import CartItem from "../../ui/CartItem";
import { useCart } from "../../../store/store";
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart } = useCart();

  const handleRemoveItem = (itemTitle) => {
    toast.success(`${itemTitle} удален из корзины!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center mt-10 gap-5">
        {cart.length === 0 ? (
          <p className="text-3xl font-dirt">Корзина пуста</p>
        ) : (
          cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item}
              onRemove={handleRemoveItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;