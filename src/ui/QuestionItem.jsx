import React from "react";

const QuestionItem = ({ id, question, answer, isActive, handleActiveQuestion }) => {
  return (
    <div className="mb-3 last:mb-0">
      {/* Заголовок вопроса */}
      <div className="flex items-center border-2 border-dashed border-black bg-white/30 hover:bg-white/50 transition-colors">
        <span className="bg-white px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl">
          {id}
        </span>
        <h2 className="pl-3 pr-4 py-3 sm:pl-4 sm:py-4 w-full font-dirt text-lg sm:text-xl md:text-2xl">
          {question}
        </h2>
        <button
          className={`bg-white px-2 py-1 mr-3 sm:mr-4 sm:px-3 rounded-lg transition-all duration-300 ${
            isActive ? "rotate-45 transform" : ""
          }`}
          onClick={() => handleActiveQuestion(id)}
          aria-expanded={isActive}
          aria-controls={`answer-${id}`}
        >
          +
        </button>
      </div>

      {/* Ответ, если вопрос активен */}
      {isActive && (
        <div 
          id={`answer-${id}`}
          className="p-4 bg-gray-100/60 rounded-b-md border-l-2 border-r-2 border-b-2 border-dashed border-black text-base sm:text-lg"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;