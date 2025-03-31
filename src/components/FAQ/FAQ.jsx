import React, { useState } from "react";
import QuestionItem from "../../ui/QuestionItem";

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

  const handleActiveQuestion = (id) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === id ? null : id
    );
  };

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] flex items-center justify-center flex-col gap-16">
      <h2 className="text-5xl font-dirt w-6/12 text-center">У вас остались вопросы? Мы собрали самые часты, возможно, вы найдете ответ на свой</h2>
      <div className="flex flex-col gap-3 w-6/12">
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            id={question.id}
            question={question.question}
            answer={question.answer}
            isActive={activeQuestion === question.id}
            handleActiveQuestion={handleActiveQuestion}
          />
        ))}
      </div>
      <h2 className="text-2xl font-dirt w-6/12 text-center">Если у вас есть дополнительные вопросы, свяжитесь с нашей поддержкой! 😊</h2>
    </div>
  );
};

export default FAQ;