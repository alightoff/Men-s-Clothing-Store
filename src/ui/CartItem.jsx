import React from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
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
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full group">
      {/* Product Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-lg border border-gray-700"
          src={img}
          alt={title}
        />
        {sale > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            -{sale}%
          </span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="flex-grow text-center sm:text-left">
        <h2 className="font-dirt text-white text-lg mb-1">{title}</h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-gray-400">
          <span>ID: {id}</span>
          <span>Размер: {size}</span>
        </div>
      </div>

      {/* Price and Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* Price */}
        <div className="text-center w-20">
          {sale > 0 ? (
            <>
              <span className="line-through text-gray-500 text-sm block">{price}$</span>
              <span className="text-yellow-400 font-medium">
                {(price - (price * sale) / 100).toFixed(2)}$
              </span>
            </>
          ) : (
            <span className="font-medium text-white">{price}$</span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center bg-gray-700 rounded-lg">
          <button
            className="h-10 w-10 flex justify-center items-center hover:bg-gray-600 rounded-l-lg transition-colors text-gray-300 disabled:text-gray-500"
            onClick={() => handleUpdateCount(count - 1)}
            disabled={count <= 1}
            aria-label="Уменьшить количество"
          >
            <FiMinus size={16} />
          </button>
          <div className="h-10 w-10 flex justify-center items-center text-white">
            {count === 5 ? "MAX" : count}
          </div>
          <button
            className="h-10 w-10 flex justify-center items-center hover:bg-gray-600 rounded-r-lg transition-colors text-gray-300 disabled:text-gray-500"
            onClick={() => handleUpdateCount(count + 1)}
            disabled={count >= 5}
            aria-label="Увеличить количество"
          >
            <FiPlus size={16} />
          </button>
        </div>

        {/* Total Price */}
        <div className="text-center w-20 font-dirt text-white">
          {finalPrice.toFixed(2)}$
        </div>

        {/* Remove Button */}
        <button 
          onClick={handleRemove}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Удалить товар"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;