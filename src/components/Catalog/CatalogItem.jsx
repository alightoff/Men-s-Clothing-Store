import React from "react";
import { useCart } from "../../../store/store";
import { Link } from "react-router-dom";

const CatalogItem = ({
  id,
  title,
  description,
  price,
  size,
  sale,
  img,
  elementOfClothing,
  inStock
}) => {
  const { cart, addItemToCart } = useCart();
  
  // Проверяем, есть ли товар в корзине
  const isInCart = cart.some(cartItem => cartItem.id === id);

  const item = {
    id, 
    title, 
    price: sale > 0 ? price - (price * sale) / 100 : price, 
    size, 
    sale, 
    img, 
    inStock,
    count: 1 // начальное количество
  };

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <div>
      <div className="flex flex-col bg-white border-2 border-dashed border-black rounded-lg px-3 h-[625px] relative">
      <img
          className="h-72 w-fit border-b-2 border-black p-5 self-center"
          src={img}
          alt={elementOfClothing}
        />
        <span className={`text-white bg-red-500 p-1 px-2 rounded-lg absolute -top-2 -right-5 transform -rotate-12 scale-150 border-2 border-dashed border-black ${sale > 0 ? "block" : "hidden"}`}>
          -{sale}%
        </span>
        <div className="flex flex-col p-3 gap-4">
          <h2 className="font-dirt text-center text-2xl">{title}</h2>
          <p className="text-lg my-5">{description.length > 40 ? description.slice(0, 40) + "..." : description}</p>
          <p className="text-lg">
            Размер:
            <span className="border-2 border-black p-2 rounded-lg mx-3">
              {size}
            </span>
          </p>
          <h3 className="font-dirt text-center text-2xl mt-3">Цена: <span className="line-through mx-3 opacity-50">{price}$</span><span className="text-red-500">{sale > 0 ? price - (price * sale) / 100 : price}$</span></h3>
        </div>
        
        {isInCart ? (
          <div className="flex mx-auto border-2 border-dashed border-black hover:border-white p-2 mt-5 rounded-lg hover:bg-black hover:text-white duration-300">
            <Link to={'/cart'}>В корзину</Link>
          </div>
        ) : (
          <button
            className={`${inStock ? "bg-orange-500 hover:bg-orange-600" : "bg-orange-500/30 cursor-not-allowed"} w-5/12 self-center border-2 border-dashed border-black p-2 rounded-lg mt-5 transition-colors duration-500`}
            disabled={!inStock}
            onClick={handleAddToCart}
          >
            {inStock ? "Купить" : "Нет в наличии"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;