import React, { useState } from "react";
import TrashIcon from "./TrashIcon";
import { useCart } from "../../store/store";

// фото, артикль, цвет, размер, цена товара

const CartItem = ({ cartItemPhoto, cartItemTitle, cartItemArticle, cartItemColor, cartItemSize, cartItemCost, cartItemSale }) => {
  const [counter, setCounter] = useState(1);
  const costOfClothes = 120;

  const { removeItemFromCart } = useCart()

  return (
    <div>
      <div className="bg-slate-300/50 rounded-xl flex items-center gap-16 py-5 px-10 font-dirt w-fit">
        <img
          className="w-36 border-2 border-dashed rounded-lg"
          src={cartItemPhoto}
          alt="basket item"
        />
        {/* фото товара */}
        {/* описание товара: актикль, цвет, размер*/}
        <div className="w-28">
          <h2 className="text-xl mb-3">{cartItemTitle}</h2>
          <p className="text-gray-700/60 text-lg">Article: {cartItemArticle}</p>
          <p className="text-gray-700/60 text-lg">Color: {cartItemColor}</p>
          <p className="text-gray-700/60 text-lg">Size: {cartItemSize}</p>
        </div>
        {/* Цена товара */}
        <p className="text-xl w-28">{cartItemCost}$</p>
        {/* Кнопка счетчик */}
        <div className="flex w-60">
          <div
            className="bg-white/30 h-12 w-20 rounded-l-full flex justify-center items-center cursor-pointer select-none"
            onClick={() =>
              setCounter((counter) => (counter <= 1 ? counter : counter - 1))
            }
          >
            -
          </div>
          <div className="bg-white/30 h-12 w-20 flex justify-center items-center">
            {counter === 5 ? "MAX" : counter}
          </div>
          <div
            className="bg-white/30 h-12 w-20 rounded-r-full flex justify-center items-center cursor-pointer select-none"
            onClick={() =>
              setCounter((counter) => (counter >= 5 ? counter : counter + 1))
            }
          >
            +
          </div>
        </div>
        {/* итоговая цена */}
        <p className="text-xl w-28">{cartItemCost * counter}$</p>
        {/* Кнопка удаления */}
        <TrashIcon removeItemFromCart={removeItemFromCart} cartItemArticle={cartItemArticle} />
      </div>
    </div>
  );
};

export default CartItem;
