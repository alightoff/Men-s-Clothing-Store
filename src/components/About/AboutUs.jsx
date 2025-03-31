import React from "react";

const AboutUs = () => {
  const blocks = [
    {
      title: "5 лет",
      description: "Мы создаём одежду, которая подчеркивает вашу индивидуальность",
      accent: "text-yellow-400"
    },
    {
      title: "Работаем с лучшими брендами",
      description: "Весна, лето и зима — каждая коллекция наполнена современными трендами.",
      accent: "text-white"
    },
    {
      title: "Работаем с лучшими тканями",
      description: "Наши материалы проходят строгий отбор, чтобы соответствовать высоким стандартам.",
      accent: "text-white"
    },
    {
      title: "Доставка по всей России",
      description: "Оперативная доставка в любой уголок страны. Заказы от 5000 рублей — бесплатно.",
      accent: "text-yellow-400"
    },
    {
      title: "Сертифицированное качество",
      description: "Все наши товары проходят контроль качества и соответствуют международным стандартам.",
      accent: "text-white"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-12 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dirt text-center text-white mb-12 md:mb-16">
          О нашем магазине
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 hover:bg-gray-800 transition-all duration-300 group`}
            >
              <h3 className={`text-2xl md:text-3xl font-dirt mb-4 ${block.accent} group-hover:text-yellow-400 transition-colors`}>
                {block.title}
              </h3>
              <p className="text-gray-300 text-lg md:text-xl">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-dirt text-white mb-6">
            Почему выбирают нас?
          </h3>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
            Velvet & Cotton — это не просто магазин одежды, а пространство стиля и качества. 
            Мы тщательно отбираем каждую вещь, чтобы предложить вам только лучшее.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;