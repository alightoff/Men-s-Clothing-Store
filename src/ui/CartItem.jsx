// CartItem.jsx
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../../store/store";

const CartItem = ({ item, onRemove }) => {
  const { 
    id,
    title,
    img,
    size,
    price,
    sale,
    count
  } = item;

  const { updateItemCount, removeItemFromCart } = useCart();

  const handleUpdateCount = (newCount) => {
    if (newCount >= 1 && newCount <= 5) {
      updateItemCount(id, size, newCount);
    }
  };

  const handleRemove = () => {
    removeItemFromCart(id, size);
    onRemove(title);
  };

  const finalPrice = sale > 0 
    ? (price - (price * sale) / 100) * count 
    : price * count;

  return (
    <div className="bg-white/80 rounded-xl flex flex-col sm:flex-row items-center gap-4 p-4 font-dirt w-full border-2 border-dashed border-gray-300">
      {/* Product Image */}
      <img
        className="w-20 sm:w-28 border-2 border-dashed rounded-lg"
        src={img}
        alt={title}
      />
      
      {/* Product Info */}
      <div className="flex-grow text-center sm:text-left">
        <h2 className="text-lg font-medium mb-1">{title}</h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-gray-600">
          <p>ID: {id}</p>
          <p>Размер: {size}</p>
        </div>
      </div>

      {/* Price and Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* Price */}
        <div className="text-center w-20">
          {sale > 0 ? (
            <>
              <span className="line-through opacity-50 text-sm block">{price}$</span>
              <span className="text-red-500 font-medium">
                {(price - (price * sale) / 100).toFixed(2)}$
              </span>
            </>
          ) : (
            <span className="font-medium">{price}$</span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center bg-white/30 rounded-full border border-gray-300">
          <button
            className="h-8 w-8 flex justify-center items-center hover:bg-gray-100 rounded-l-full transition-colors"
            onClick={() => handleUpdateCount(count - 1)}
            disabled={count <= 1}
            aria-label="Уменьшить количество"
          >
            -
          </button>
          <div className="h-8 w-8 flex justify-center items-center">
            {count === 5 ? "MAX" : count}
          </div>
          <button
            className="h-8 w-8 flex justify-center items-center hover:bg-gray-100 rounded-r-full transition-colors"
            onClick={() => handleUpdateCount(count + 1)}
            disabled={count >= 5}
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="text-center w-20 font-bold">
          {finalPrice.toFixed(2)}$
        </div>

        {/* Remove Button */}
        <button 
          onClick={handleRemove}
          className="p-2 text-gray-500 hover:text-black transition-colors"
          aria-label="Удалить товар"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;