import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Как подобрать правильный размер?",
      answer:
        "Мы предоставляем подробную таблицу размеров на странице каждого товара. Если у вас есть сомнения, свяжитесь с нашей поддержкой, и мы поможем вам выбрать подходящий размер.",
    },
    {
      id: 2,
      question: "Какие способы оплаты доступны?",
      answer:
        "Вы можете оплатить заказ с помощью банковских карт (Visa, MasterCard, Мир), электронных кошельков и наложенным платежом при получении.",
    },
    {
      id: 3,
      question: "Сколько времени занимает доставка?",
      answer:
        "Сроки доставки зависят от вашего региона и выбранного способа доставки. Обычно доставка занимает от 2 до 7 рабочих дней.",
    },
    {
      id: 4,
      question: "Можно ли вернуть или обменять товар?",
      answer:
        "Да, вы можете вернуть или обменять товар в течение 14 дней с момента получения, если он не был в использовании и сохранил товарный вид.",
    },
    {
      id: 5,
      question: "Как ухаживать за одеждой?",
      answer:
        "Рекомендации по уходу указаны на бирке изделия. Мы советуем стирать вещи согласно инструкциям, чтобы сохранить их первоначальный вид.",
    },
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-[calc(100vh-10rem)] py-12 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dirt text-center text-white mb-12 md:mb-16">
          Часто задаваемые вопросы
        </h2>
        
        <div className="space-y-4 mb-12">
          {questions.map((q) => (
            <div 
              key={q.id} 
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(q.id)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-medium text-white">
                  {q.question}
                </h3>
                <span className="text-gray-400 ml-4">
                  {activeQuestion === q.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                  activeQuestion === q.id 
                    ? 'max-h-96 pb-4 md:pb-6 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 whitespace-pre-line">
                  {q.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-dirt text-white mb-4">
            Остались вопросы?
          </h3>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Наша служба поддержки с радостью поможет вам с любыми вопросами. Свяжитесь с нами удобным для вас способом!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;