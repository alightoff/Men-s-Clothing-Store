import React from "react";

const QuestionItem = ({ id, question, answer, isActive, handleActiveQuestion }) => {
  return (
    <div>
      {/* Заголовок вопроса */}
      <div className="flex text-2xl items-center border-2 border-dashed border-black bg-white/30">
        <span className="bg-white px-8 py-5">{id}</span>
        <h2 className="pl-4 pr-5 py-5 w-full font-dirt">{question}</h2>
        <button
          className={`bg-white px-3 py-1 mr-5 ml-3 rounded-lg transition-transform ${
            isActive ? "rotate-45" : ""
          }`}
          onClick={() => handleActiveQuestion(id)}
        >
          +
        </button>
      </div>

      {/* Ответ, если вопрос активен */}
      {isActive && (
        <div className="p-4 bg-gray-100/60 rounded-md mt-2">
          <p className="text-xl">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;