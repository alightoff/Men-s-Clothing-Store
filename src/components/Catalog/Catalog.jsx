import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiFilter, FiX, FiChevronDown } from "react-icons/fi";
import CatalogItem from "./CatalogItem.jsx";
import { useCatalogItems } from "../../../store/store.js";
import { toast } from 'react-toastify';

const Catalog = () => {
  const { catalogItems } = useCatalogItems();
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortParams, setSortParams] = useState({
    price: null,
    inStock: false,
  });
  const [isSearchSticky, setIsSearchSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const filtersPanelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersPanelRef.current && !filtersPanelRef.current.contains(event.target) && 
          !event.target.closest('.filter-button')) {
        setFiltersOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Прокрутка вниз
        setIsSearchSticky(false);
      } else if (currentScrollY < lastScrollY) {
        // Прокрутка вверх
        setIsSearchSticky(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const filteredCatalog = catalogItems
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!sortParams.inStock || item.inStock)
    )
    .sort((a, b) => {
      if (sortParams.price === "asc") return a.price - b.price;
      if (sortParams.price === "desc") return b.price - a.price;
      return 0;
    });

  const showAddToCartToast = (title) => {
    toast.success(`${title} добавлен в корзину!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  const toggleInStock = () => {
    setSortParams({...sortParams, inStock: !sortParams.inStock});
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 relative">
      {/* Панель поиска и фильтров - теперь с анимацией появления/исчезания */}
      <div className={`flex flex-col items-center mb-8 z-30 transition-all duration-300 ${
        isSearchSticky 
          ? 'sticky top-16 transform translate-y-0' 
          : 'sticky top-0 transform -translate-y-full'
      }`}>
        <div className="w-full max-w-3xl backdrop-blur-md bg-white/40 mx-6 rounded-lg shadow-2xl p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Поиск */}
            <div className="relative w-full sm:w-80">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-dashed border-gray-300 focus:border-black focus:outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* Кнопка фильтров для мобильных */}
            <div className="sm:hidden relative w-full">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className={`filter-button flex items-center justify-center w-full px-4 py-2 rounded-full border-2 border-dashed ${
                  filtersOpen ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'
                } transition-all`}
              >
                <FiFilter className="mr-2" />
                <span>Фильтры</span>
              </button>
            </div>

            {/* Фильтры для десктопа */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-dirt text-sm">Сортировка:</span>
                <select
                  value={sortParams.price || ''}
                  onChange={(e) => setSortParams({...sortParams, price: e.target.value || null})}
                  className="px-3 py-1 text-sm rounded-full border-2 border-dashed border-gray-300 focus:border-black focus:outline-none"
                >
                  <option value="">По умолчанию</option>
                  <option value="asc">Цена по возрастанию</option>
                  <option value="desc">Цена по убыванию</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-dirt text-sm">В наличии:</span>
                <button
                  type="button"
                  className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none ${
                    sortParams.inStock ? 'bg-black' : 'bg-gray-300'
                  }`}
                  onClick={toggleInStock}
                >
                  <span
                    className={`inline-block w-5 h-5 transform transition-transform bg-white rounded-full ${
                      sortParams.inStock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильная панель фильтров */}
      <div 
        ref={filtersPanelRef}
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl border-l-2 border-dashed border-black z-40 transform ${
          filtersOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden`}
        style={{ top: '80px' }}
      >
        <div className="p-4 h-[calc(100%-80px)] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-dirt">Фильтры</h3>
            <button 
              onClick={() => setFiltersOpen(false)}
              className="p-2 text-gray-500 hover:text-black"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="space-y-6 flex-grow overflow-y-auto">
            <div>
              <label className="block font-dirt mb-2 text-sm">Сортировка:</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSortParams({...sortParams, price: null})}
                  className={`px-3 py-1 text-sm rounded-full border-2 border-dashed ${
                    sortParams.price === null ? 'bg-black text-white border-black' : 'border-gray-300'
                  }`}
                >
                  По умолчанию
                </button>
                <button
                  onClick={() => setSortParams({...sortParams, price: "asc"})}
                  className={`px-3 py-1 text-sm rounded-full border-2 border-dashed ${
                    sortParams.price === "asc" ? 'bg-black text-white border-black' : 'border-gray-300'
                  }`}
                >
                  Цена ↑
                </button>
                <button
                  onClick={() => setSortParams({...sortParams, price: "desc"})}
                  className={`px-3 py-1 text-sm rounded-full border-2 border-dashed ${
                    sortParams.price === "desc" ? 'bg-black text-white border-black' : 'border-gray-300'
                  }`}
                >
                  Цена ↓
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="inStock" className="font-dirt text-sm cursor-pointer" onClick={toggleInStock}>
                Только в наличии
              </label>
              <button
                type="button"
                className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none ${
                  sortParams.inStock ? 'bg-black' : 'bg-gray-300'
                }`}
                onClick={toggleInStock}
              >
                <span
                  className={`inline-block w-5 h-5 transform transition-transform bg-white rounded-full ${
                    sortParams.inStock ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-auto pt-4 flex space-x-3">
            <button
              onClick={() => {
                setSortParams({ price: null, inStock: false });
              }}
              className="flex-1 py-2 text-sm bg-white text-black rounded-lg border-2 border-dashed border-black hover:bg-gray-100"
            >
              Сбросить
            </button>
            <button
              onClick={() => setFiltersOpen(false)}
              className="flex-1 py-2 text-sm bg-black text-white rounded-lg border-2 border-dashed border-white hover:bg-gray-800"
            >
              Применить
            </button>
          </div>
        </div>
      </div>

      {/* Затемнение фона для мобильных */}
      {filtersOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          style={{ top: '80px' }}
          onClick={() => setFiltersOpen(false)}
        />
      )}

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
        {filteredCatalog.length > 0 ? (
          filteredCatalog.map((item) => (
            <CatalogItem
              key={item.id}
              {...item}
              onAddToCart={() => showAddToCartToast(item.title)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-2xl font-dirt mb-4">Товары не найдены</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSortParams({ price: null, inStock: false });
              }}
              className="px-6 py-2 bg-black text-white rounded-full border-2 border-dashed border-white hover:bg-gray-800 transition-colors"
            >
              Показать все
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;