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
        setIsSearchSticky(false);
      } else if (currentScrollY < lastScrollY) {
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
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-6 px-4 sm:px-6">
      {/* Панель поиска и фильтров */}
      <div className={`sticky top-16 z-30 transition-all duration-300 mb-8 ${
        isSearchSticky ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Поиск */}
              <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск по каталогу..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-400 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <FiX />
                  </button>
                )}
              </div>

              {/* Кнопка фильтров для мобильных */}
              <button
                onClick={() => setFiltersOpen(true)}
                className="md:hidden flex items-center justify-center w-full px-4 py-2 rounded-full bg-gray-700 text-white border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                <FiFilter className="mr-2" />
                <span>Фильтры</span>
              </button>

              {/* Фильтры для десктопа */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Сортировка:</span>
                  <select
                    value={sortParams.price || ''}
                    onChange={(e) => setSortParams({...sortParams, price: e.target.value || null})}
                    className="bg-gray-700 text-white border border-gray-600 rounded-full px-3 py-1 focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">По умолчанию</option>
                    <option value="asc">Цена ↑</option>
                    <option value="desc">Цена ↓</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">В наличии:</span>
                  <button
                    type="button"
                    className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none ${
                      sortParams.inStock ? 'bg-yellow-500' : 'bg-gray-600'
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
      </div>

      {/* Мобильная панель фильтров */}
      <div 
        ref={filtersPanelRef}
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-gray-800 border-l border-gray-700 z-40 transform ${
          filtersOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '64px' }}
      >
        <div className="p-4 h-[calc(100%-64px)] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-dirt text-white">Фильтры</h3>
            <button 
              onClick={() => setFiltersOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="space-y-6 flex-grow overflow-y-auto">
            <div>
              <label className="block text-gray-300 mb-2">Сортировка:</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSortParams({...sortParams, price: null})}
                  className={`px-3 py-1 rounded-full border ${
                    sortParams.price === null 
                      ? 'bg-yellow-500 text-black border-yellow-500' 
                      : 'bg-gray-700 text-white border-gray-600'
                  }`}
                >
                  По умолчанию
                </button>
                <button
                  onClick={() => setSortParams({...sortParams, price: "asc"})}
                  className={`px-3 py-1 rounded-full border ${
                    sortParams.price === "asc" 
                      ? 'bg-yellow-500 text-black border-yellow-500' 
                      : 'bg-gray-700 text-white border-gray-600'
                  }`}
                >
                  Цена ↑
                </button>
                <button
                  onClick={() => setSortParams({...sortParams, price: "desc"})}
                  className={`px-3 py-1 rounded-full border ${
                    sortParams.price === "desc" 
                      ? 'bg-yellow-500 text-black border-yellow-500' 
                      : 'bg-gray-700 text-white border-gray-600'
                  }`}
                >
                  Цена ↓
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-gray-300 cursor-pointer" onClick={toggleInStock}>
                Только в наличии
              </label>
              <button
                type="button"
                className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors focus:outline-none ${
                  sortParams.inStock ? 'bg-yellow-500' : 'bg-gray-600'
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
              className="flex-1 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 hover:bg-gray-600"
            >
              Сбросить
            </button>
            <button
              onClick={() => setFiltersOpen(false)}
              className="flex-1 py-2 bg-yellow-500 text-black rounded-lg border border-yellow-500 hover:bg-yellow-600"
            >
              Применить
            </button>
          </div>
        </div>
      </div>

      {/* Затемнение фона для мобильных */}
      {filtersOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          style={{ top: '64px' }}
          onClick={() => setFiltersOpen(false)}
        />
      )}

      {/* Сетка товаров */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              <p className="text-2xl font-dirt text-white mb-4">Товары не найдены</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSortParams({ price: null, inStock: false });
                }}
                className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition-colors"
              >
                Показать все
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;