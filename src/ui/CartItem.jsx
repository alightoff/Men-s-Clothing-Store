// CartItem.jsx
import React from "react";
import TrashIcon from "./TrashIcon";
import { useCart } from "../../store/store";
import { toast } from 'react-toastify';

const CartItem = ({ item, onRemove }) => {
  const { 
    id,
    title,
    img,
    size,
    color,
    price,
    sale,
    count
  } = item;

  const { updateItemCount, removeItemFromCart } = useCart();

  const handleUpdateCount = (newCount) => {
    if (newCount >= 1 && newCount <= 5) {
      updateItemCount(id, newCount);
    }
  };

  const handleRemove = () => {
    removeItemFromCart(id);
    onRemove(title);
  };

  const finalPrice = sale > 0 
    ? (price - (price * sale) / 100) * count 
    : price * count;

  return (
    <div className="bg-slate-300/50 rounded-xl flex items-center gap-16 py-5 px-10 font-dirt w-fit">
      <img
        className="w-36 border-2 border-dashed rounded-lg"
        src={img}
        alt={title}
      />
      
      <div className="w-28">
        <h2 className="text-xl mb-3">{title}</h2>
        <p className="text-gray-700/60 text-lg">ID: {id}</p>
        <p className="text-gray-700/60 text-lg">Цвет: {color}</p>
        <p className="text-gray-700/60 text-lg">Размер: {size}</p>
      </div>

      <p className="text-xl w-28">
        {sale > 0 ? (
          <>
            <span className="line-through opacity-50">{price}$</span>
            <br/>
            <span className="text-red-500">
              {price - (price * sale) / 100}$
            </span>
          </>
        ) : (
          `${price}$`
        )}
      </p>

      <div className="flex w-60">
        <button
          className="bg-white/30 h-12 w-20 rounded-l-full flex justify-center items-center cursor-pointer select-none hover:bg-white/50 transition-colors"
          onClick={() => handleUpdateCount(count - 1)}
          disabled={count <= 1}
        >
          -
        </button>
        <div className="bg-white/30 h-12 w-20 flex justify-center items-center">
          {count === 5 ? "MAX" : count}
        </div>
        <button
          className="bg-white/30 h-12 w-20 rounded-r-full flex justify-center items-center cursor-pointer select-none hover:bg-white/50 transition-colors"
          onClick={() => handleUpdateCount(count + 1)}
          disabled={count >= 5}
        >
          +
        </button>
      </div>

      <p className="text-xl w-28 font-bold">
        {finalPrice.toFixed(2)}$
      </p>

      <TrashIcon onClick={handleRemove} />
    </div>
  );
};

export default CartItem;