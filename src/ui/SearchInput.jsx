import React from "react";

const SearchInput = ({ searchClothes, setSearchСlothes }) => {
  return (
    <div className="inline-block w-1/4 border-2 border-dashed border-black rounded-lg">
      <div className="relative w-full">
        <input
          className="py-2 pl-12 rounded-lg w-full outline-none font-dirt"
          type="text"
          onChange={(e) => setSearchСlothes(e.target.value)}
          value={searchClothes}
          placeholder="Поиск"
        />
        <span className="absolute top-1/2 left-3 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchInput;