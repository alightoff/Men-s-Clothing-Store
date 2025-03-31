import React, { useState } from "react";
import SearchInput from "../../ui/SearchInput";
import CatalogItem from "./CatalogItem";
import SortBlock from "../../ui/SortBlock";
import { useCatalogItems } from "../../../store/store.js";

const Catalog = () => {
  const { catalogItems } = useCatalogItems()

  const [searchClothes, setSearchСlothes] = useState("");
  const [isFocusFilter, setIsFocusFilter] = useState(false);

  const [sortParams, setSortParams] = useState({
    price: null, // 'asc' | 'desc' | null
    sizes: [], // массив выбранных размеров
    inStock: false, // фильтр по наличию
  });

  // Функция для фильтрации и сортировки каталога
  const getProcessedCatalog = () => {
    let result = [...catalogItems];

    // Фильтрация по поиску (названию)
    if (searchClothes) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchClothes.toLowerCase())
      );
    }

    // Фильтрация по размеру
    if (sortParams.sizes.length > 0) {
      result = result.filter((item) => sortParams.sizes.includes(item.size));
    }

    // Фильтрация по наличию (добавьте поле inStock в данные товаров)
    if (sortParams.inStock) {
      result = result.filter((item) => item.inStock);
    }

    // Сортировка по цене
    if (sortParams.price) {
      result.sort((a, b) =>
        sortParams.price === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return result;
  };

  const filteredCatalog = getProcessedCatalog();
  const isCatalogEmpty = filteredCatalog.length === 0;

  return (
    <div className="container mx-auto">
      {/* Фильтр */}
      <div className="mt-7 flex justify-center gap-20 items-center">
        <SearchInput searchClothes={searchClothes} setSearchСlothes={setSearchСlothes} />
        <div className="relative">
          <div
            className={`size-11 cursor-pointer border-2 border-dashed border-black rounded-lg flex justify-center items-center bg-${isFocusFilter ? "black" : ""}`}
            onClick={() => setIsFocusFilter(!isFocusFilter)}
          >
            <img src={`assets/filter-icon-${isFocusFilter ? "white" : "black"}.svg`} alt="filter" />
          </div>
        </div>
      </div>

      {/* Блок сортировки (отключается при пустом каталоге) */}
      <div className={`w-8/12 mx-auto duration-300 ${isFocusFilter ? "block" : "hidden"}`}>
        <SortBlock sortParams={sortParams} onSortChange={setSortParams} disabled={isCatalogEmpty} />
      </div>

      {/* Блок каталога */}
      <div className="grid grid-cols-3 gap-10 mt-10 h-full">
        {isCatalogEmpty ? (
          <p className="text-center text-3xl col-span-3 font-dirt">Нет товаров, соответствующих вашему запросу.</p>
        ) : (
          filteredCatalog.map((item) => <CatalogItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Catalog;
