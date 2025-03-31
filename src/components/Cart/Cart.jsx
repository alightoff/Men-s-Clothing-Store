import React, { useState } from "react";
import CartItem from "../../ui/CartItem";
import { useCart } from "../../../store/store";

const Cart = () => {
  const { cart } = useCart()

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center mt-10 gap-5">
        {
          cart.map(item => (
            <CartItem key={item.id} cartItemPhoto={item.img} cartItemArticle={item.id} cartItemTitle={item.title} cartItemColor={item.color} cartItemSize={item.size} cartItemCost={item.price} cartItemSale={item.sale} />
          ))
        }
      </div>
    </div>
  );
};

export default Cart;
