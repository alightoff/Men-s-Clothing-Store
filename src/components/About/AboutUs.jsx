import React from "react";

const AboutUs = () => {
  const blocks = [
    {
      title: "5 лет",
      description: "Мы создаём одежду, которая подчеркивает вашу индивидуальность",
    },
    {
      title: "Работаем с лучшими брендами",
      description: "Весна, лето и зима — каждая коллекция наполнена современными трендами.",
    },
    {
      title: "Работаем с лучшими тканями",
      description: "Наши материалы проходят строгий отбор, чтобы соответствовать высоким стандартам.",
    },
    {
      title: "Доставка по всей России",
      description: "Оперативная доставка в любой уголок страны. Заказы от 5000 рублей — бесплатно.",
    },
    {
      title: "Сертифицированное качество",
      description: "Все наши товары проходят контроль качества и соответствуют международным стандартам.",
    },
  ];

  // Базовые стили блоков
  const block = "duration-700 ease-in-out hover:bg-black text-black hover:text-white border-dashed border-slate-300 border-2 md:border-4 rounded-md p-4 md:p-6 flex flex-col justify-center";

  // Стили заголовков
  const title = "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dirt mb-2 md:mb-4";

  // Стили описания
  const description = "text-sm sm:text-base md:text-lg lg:text-xl font-dirt";

  return (
    <div className="container mx-auto min-h-[calc(100vh-10rem)] py-6 sm:py-8 md:py-12 flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6 md:mb-8 font-dirt tracking-wide sm:tracking-wider">
        О магазине
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-5 gap-3 sm:gap-4 text-center">
        
        {/* Блок 1 (занимает 2 колонки на sm/md, 3 на lg+) */}
        <div className={`sm:col-span-2 lg:col-span-3 lg:row-span-3 ${block}`}>
          <h3 className={title}>{blocks[1].title}</h3>
          <p className={description}>{blocks[1].description}</p>
        </div>

        {/* Блок 2 (полная ширина на sm, 2 колонки на md, 3 на lg+) */}
        <div className={`sm:col-span-2 md:col-span-1 lg:col-span-3 lg:col-start-4 ${block}`}>
          <h3 className={title}>{blocks[0].title}</h3>
          <p className={description}>{blocks[0].description}</p>
        </div>

        {/* Блок 3 (полная ширина на sm, 2 колонки на md, 3 на lg+) */}
        <div className={`sm:col-span-2 md:col-span-1 lg:col-span-3 lg:col-start-4 lg:row-start-3 ${block}`}>
          <h3 className={title}>{blocks[2].title}</h3>
          <p className={description}>{blocks[2].description}</p>
        </div>

        {/* Блок 4 (полная ширина на sm/md, 3 на lg+) */}
        <div className={`sm:col-span-2 lg:col-span-3 ${block}`}>
          <h3 className={title}>{blocks[3].title}</h3>
          <p className={description}>{blocks[3].description}</p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;