import React from "react";

const SortBlock = ({ sortParams, onSortChange, disabled }) => {

  const baseStyle =
    "border-2 border-black rounded-md p-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-300";

  const getStyle = (isActive) =>
    `${baseStyle} ${isActive ? "bg-black text-white" : ""}`;

  return (
    <div className="bg-white mt-10 rounded-lg border-2 border-dashed border-black p-4">
      <h2 className="text-2xl font-bold">Сортировать по:</h2>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-3">
        {/* Сортировка по цене */}
        <div>
          <h3 className="text-xl font-semibold">По цене:</h3>
          <ul className="text-lg mt-3 flex flex-col gap-1 w-2/3">
            <li
              className={`${getStyle(sortParams.price === "asc")} ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() =>
                !disabled &&
                onSortChange({
                  ...sortParams,
                  price: sortParams.price === "asc" ? null : "asc",
                })
              }
            >
              По возрастанию
            </li>
            <li
              className={`${getStyle(sortParams.price === "desc")} ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() =>
                !disabled &&
                onSortChange({
                  ...sortParams,
                  price: sortParams.price === "desc" ? null : "desc",
                })
              }
            >
              По убыванию
            </li>
          </ul>
        </div>

        {/* Фильтр по размеру */}
        <div>
          <h3 className="text-xl font-semibold">По размеру</h3>
          <ul className="text-lg mt-3 grid grid-cols-3 gap-2 w-2/4 text-center">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <li
                key={size}
                className={getStyle(sortParams.sizes.includes(size))}
                onClick={() => {
                  const newSizes = sortParams.sizes.includes(size)
                    ? sortParams.sizes.filter((s) => s !== size)
                    : [...sortParams.sizes, size];
                  onSortChange({ ...sortParams, sizes: newSizes });
                }}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>

        {/* Фильтр по наличию */}
        <div>
          <h3 className="text-xl font-semibold">По наличию на складе</h3>
          <ul className="text-lg mt-3 w-fit">
            <li
              className={getStyle(sortParams.inStock) + " px-2"}
              onClick={() =>
                onSortChange({
                  ...sortParams,
                  inStock: !sortParams.inStock,
                })
              }
            >
              В наличии
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortBlock;
