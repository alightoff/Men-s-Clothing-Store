import React, { useState, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { useCart } from '../../../store/store';

const CatalogItem = ({
  id,
  title,
  description,
  price,
  size,
  sale,
  img,
  elementOfClothing,
  inStock,
  onAddToCart,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalContentRef = useRef(null);
  const { cart, addItemToCart } = useCart();
  const isInCart = cart.some((cartItem) => cartItem.id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const item = {
      id,
      title,
      price: sale > 0 ? price - (price * sale) / 100 : price,
      size,
      sale,
      img,
      inStock,
      count: 1,
    };
    addItemToCart(item);
    onAddToCart();
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setIsAnimating(true);
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
        }
      }, 10);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsExpanded(false);
    }, 300);
  };

  return (
    <>
      {/* Карточка товара */}
      <div 
        className="flex flex-col bg-white border-2 border-dashed border-black rounded-lg p-3 h-full relative transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        {/* Бейдж скидки */}
        {sale > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg z-10 border-2 border-dashed border-white transform rotate-12">
            -{sale}%
          </span>
        )}

        {/* Изображение товара */}
        <div className="relative h-48 w-full mb-3 overflow-hidden">
          <img
            className="w-full h-full object-contain p-2"
            src={img}
            alt={elementOfClothing}
            loading="lazy"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-dirt text-lg bg-black/80 px-3 py-1 rounded-lg">
                Нет в наличии
              </span>
            </div>
          )}
        </div>

        {/* Информация о товаре */}
        <div className="flex flex-col flex-grow px-2">
          <h2 className="font-dirt text-lg sm:text-xl text-center mb-2 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-sm text-gray-700 mb-3 line-clamp-3">
            {description}
          </p>
          
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm">Размер:</span>
              <span className="border-2 border-dashed border-black px-2 py-1 rounded-lg text-sm">
                {size}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="text-center sm:text-left">
                {sale > 0 ? (
                  <>
                    <span className="line-through text-gray-500 text-sm">
                      {price}$
                    </span>
                    <span className="text-red-500 font-dirt text-lg ml-2">
                      {price - (price * sale) / 100}$
                    </span>
                  </>
                ) : (
                  <span className="font-dirt text-lg">
                    {price}$
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!inStock || isInCart}
                className={`w-full sm:w-auto px-3 py-1 rounded-lg border-2 border-dashed transition-colors text-sm ${
                  isInCart 
                    ? 'bg-gray-300 text-gray-600 border-gray-400 cursor-default'
                    : inStock
                      ? 'bg-orange-500 hover:bg-orange-600 text-white border-black'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'
                }`}
              >
                {isInCart ? 'В корзине' : inStock ? 'Купить' : 'Нет в наличии'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с описанием */}
      {isExpanded && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        >
          {/* Затемнение фона */}
          <div 
            className={`absolute inset-0 bg-black ${
              isAnimating ? 'bg-opacity-50' : 'bg-opacity-0'
            } backdrop-blur-sm transition-all duration-300`}
            onClick={handleClose}
          />
          
          {/* Контейнер модального окна */}
          <div
            className={`relative w-full max-w-md max-h-[90vh] bg-white/95 backdrop-blur-lg rounded-xl border-2 border-dashed border-black shadow-2xl transform ${
              isAnimating ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
            } transition-all duration-300 flex flex-col`}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-gray-500 hover:text-black transition-colors z-10"
            >
              <FiX size={24} />
            </button>
            
            {/* Прокручиваемый контент */}
            <div 
              ref={modalContentRef}
              className="flex-grow overflow-y-auto p-6"
            >
              {/* Изображение товара */}
              <div className="relative h-48 w-full mb-4">
                <img
                  className="w-full h-full object-contain border-b-2 border-dashed border-black"
                  src={img}
                  alt={elementOfClothing}
                />
              </div>
              
              {/* Заголовок */}
              <h2 className="font-dirt text-xl sm:text-2xl text-center mb-4">
                {title}
              </h2>
              
              {/* Описание товара */}
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {description}
              </p>
            </div>
            
            {/* Фиксированная нижняя часть */}
            <div className="border-t-2 border-dashed border-black p-4 bg-white sticky bottom-0">
              <div className="flex justify-between items-center mb-4">
                <span className="font-dirt">
                  Размер: <span className="border-2 border-dashed border-black px-2 py-1 rounded-lg ml-2">{size}</span>
                </span>
                
                <div className="text-right">
                  {sale > 0 && (
                    <span className="line-through text-gray-500 mr-2">{price}$</span>
                  )}
                  <span className={`font-dirt text-xl ${sale > 0 ? 'text-red-500' : ''}`}>
                    {sale > 0 ? price - (price * sale) / 100 : price}$
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!inStock || isInCart}
                className={`w-full py-3 px-4 rounded-lg border-2 border-dashed transition-colors ${
                  isInCart 
                    ? 'bg-gray-300 text-gray-600 border-gray-400 cursor-default'
                    : inStock
                      ? 'bg-orange-500 hover:bg-orange-600 text-white border-black'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'
                }`}
              >
                {isInCart ? 'Товар в корзине' : inStock ? 'Добавить в корзину' : 'Нет в наличии'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogItem;