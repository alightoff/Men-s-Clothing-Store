import React from "react";

const AboutBlocks = () => {
  const blocks = [
    {
      title: "5 лет",
      description:
        "Мы создаём одежду, которая подчеркивает вашу индивидуальность",
    },
    {
      title: "Работаем с лучшими брендами",
      description:
        "Весна, лето и зима — каждая коллекция наполнена современными трендами.",
    },
    {
      title: "Работаем с лучшими тканями",
      description:
        "Наши материалы проходят строгий отбор, чтобы соответствовать высоким стандартам.",
    },
    {
      title: "Доставка по всей России",
      description:
        "Оперативная доставка в любой уголок страны. Заказы от 5000 рублей — бесплатно.",
    },
    {
      title: "Сертифицированное качество",
      description:
        "Все наши товары проходят контроль качества и соответствуют международным стандартам.",
    },
  ];

  const block = "duration-700 ease-in-out hover:bg-black text-black hover:text-white border-dashed border-slate-300 border-4 rounded-md p-6 flex flex-col justify-center";

  const title = "text-3xl font-dirt mb-4";

  const description = "text-xl font-dirt text-white";

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] py-12 flex flex-col justify-center gap-32">
      <h2 className="text-5xl text-center mb-8 font-dirt tracking-widest">О магазине</h2>
      <div className="grid grid-cols-6 grid-rows-5 gap-4 text-center">

        <div className={`col-span-3 row-span-3 + ${block}`}>
          <h3 className={`${title}`}>{blocks[1].title}</h3>
          <p className={`${description}`}>{blocks[1].description}</p>
        </div>

        <div className={`col-span-3 row-span-2 col-start-4 + ${block}`}>
          <h3 className={`${title}`}>{blocks[0].title}</h3>
          <p className={`${description}`}>{blocks[0].description}</p>
        </div>

        <div className={`col-span-3 row-span-3 col-start-4 row-start-3 + ${block}`}>
          <h3 className={`${title}`}>{blocks[2].title}</h3>
          <p className={`${description}`}>{blocks[2].description}</p>
        </div>

        <div className={`col-span-3 row-span-2 row-start-4 + ${block}`}>
          <h3 className={`${title}`}>{blocks[3].title}</h3>
          <p className={`${description}`}>{blocks[3].description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutBlocks;
