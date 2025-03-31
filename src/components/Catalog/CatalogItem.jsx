import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiShoppingCart } from 'react-icons/fi';
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
        className="flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-4 h-full relative transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 cursor-pointer group"
        onClick={() => setIsExpanded(true)}
      >
        {/* Бейдж скидки */}
        {sale > 0 && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-lg z-10">
            -{sale}%
          </span>
        )}

        {/* Изображение товара */}
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-700 flex items-center justify-center">
          <img
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            src={img}
            alt={elementOfClothing}
            loading="lazy"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-medium px-3 py-1 rounded-lg">
                Нет в наличии
              </span>
            </div>
          )}
        </div>

        {/* Информация о товаре */}
        <div className="flex flex-col flex-grow px-1">
          <h2 className="font-dirt text-lg text-white text-center mb-2 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-400">Размер:</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded-lg text-sm">
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
                    <span className="text-yellow-400 font-dirt text-lg ml-2">
                      {price - (price * sale) / 100}$
                    </span>
                  </>
                ) : (
                  <span className="font-dirt text-lg text-white">
                    {price}$
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!inStock || isInCart}
                className={`w-full flex items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors text-sm ${
                  isInCart 
                    ? 'bg-gray-600 text-gray-400 cursor-default'
                    : inStock
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isInCart ? (
                  <>
                    <FiShoppingCart /> В корзине
                  </>
                ) : inStock ? (
                  <>
                    <FiShoppingCart /> Купить
                  </>
                ) : (
                  'Нет в наличии'
                )}
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
              isAnimating ? 'bg-opacity-70' : 'bg-opacity-0'
            } backdrop-blur-sm transition-all duration-300`}
            onClick={handleClose}
          />
          
          {/* Контейнер модального окна */}
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] bg-gray-800 border border-gray-700 rounded-xl shadow-2xl transform ${
              isAnimating ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
            } transition-all duration-300 flex flex-col`}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white transition-colors z-10"
            >
              <FiX size={24} />
            </button>
            
            {/* Прокручиваемый контент */}
            <div 
              ref={modalContentRef}
              className="flex-grow overflow-y-auto p-6"
            >
              {/* Изображение товара */}
              <div className="relative h-64 w-full mb-6 bg-gray-700 rounded-lg flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-6"
                  src={img}
                  alt={elementOfClothing}
                />
              </div>
              
              {/* Заголовок */}
              <h2 className="font-dirt text-2xl text-white text-center mb-4">
                {title}
              </h2>
              
              {/* Описание товара */}
              <div className="text-gray-300 whitespace-pre-line mb-6 space-y-4">
                {description.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Фиксированная нижняя часть */}
            <div className="border-t border-gray-700 p-6 bg-gray-800 sticky bottom-0">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Размер:</span>
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-lg">
                    {size}
                  </span>
                  
                  <div className="text-right">
                    {sale > 0 && (
                      <span className="line-through text-gray-500 mr-2">{price}$</span>
                    )}
                    <span className={`font-dirt text-xl ${sale > 0 ? 'text-yellow-400' : 'text-white'}`}>
                      {sale > 0 ? price - (price * sale) / 100 : price}$
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={!inStock || isInCart}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-colors ${
                    isInCart 
                      ? 'bg-gray-700 text-gray-400 cursor-default'
                      : inStock
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FiShoppingCart size={18} />
                  {isInCart ? 'Товар в корзине' : inStock ? 'Добавить в корзину' : 'Нет в наличии'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogItem;