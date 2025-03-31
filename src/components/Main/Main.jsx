import React from "react";

const Main = () => {
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] relative">
        <h2 className="text-white text-5xl absolute top-32 font-dirt tracking-wide">
          Мы - гарант качества, доверяйтесь нам для надежных покупок.
        </h2>
        <div className="relative">
          <div className="size-[37rem] border-dashed border-4 border-slate-400 rounded-full bg-white animate-spin"></div>
          <img
            className="w-fit -rotate-12 absolute top-0 right-1/2 translate-x-1/2 translate-y-1/4 scale-110 hover:scale-150 transition-all ease-in-out duration-500 hover:pointer-events-auto"
            src="assets/main-png.png"
            alt="sneakers"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
