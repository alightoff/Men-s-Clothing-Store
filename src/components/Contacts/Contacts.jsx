import React from 'react';

const Contacts = () => {
  const setStyleIcon = (icon) => {
    const styleIcons = {
      display: "inline-block",
      width: "25px",
      height: "25px",
      background: `url(assets/icons/${icon}.svg) no-repeat center/contain`,
      transition: "all 0.3s ease"
    }
    return styleIcons
  }

  const inputStyle = "bg-inherit border-b border-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 outline-none text-base sm:text-lg md:text-xl placeholder:text-black focus:border-b-2"

  return (
    <div className="container mx-auto min-h-[calc(100vh-10rem)] flex justify-center items-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full md:w-5/6 lg:w-3/4 rounded-lg border-2 border-dashed border-white p-4 sm:p-6 md:p-7 flex flex-col gap-6 sm:gap-8 md:gap-14 text-black font-dirt">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center">Свяжитесь с нами – мы всегда на связи!</h2>
        
        <p className="text-base sm:text-lg md:text-xl text-center">
          Наши специалисты помогут подобрать стильный образ, ответят на вопросы о заказе и условиях доставки.
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h3 className="text-lg sm:text-xl">Заполните форму, и мы вам перезвоним:</h3>
          <form action="" className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            <input className={inputStyle} placeholder="Ваше имя" type="text" />
            <input className={inputStyle} placeholder="Ваш номер" type="tel" />
            <input className={inputStyle} placeholder="Email" type="email" />
            <button className="bg-inherit border border-black w-full sm:w-auto sm:flex-1 md:w-1/5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-base sm:text-lg">
              Отправить заявку
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 mx-0 sm:mx-4 md:mx-10">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-lg sm:text-xl">ИЛИ СВЯЖИТЕСЬ С НАМИ НАПРЯМУЮ:</h3>
            <p className="text-base sm:text-lg flex items-center gap-2 sm:gap-3">
              <span style={setStyleIcon("call")}></span>
              +7 (900) 123-45-67
            </p>
          </div>
          
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-lg sm:text-xl">ПИШИТЕ В СОЦИАЛЬНЫХ СЕТЯХ:</h3>
            <div className="flex gap-2 sm:gap-3">
              <a href="" className="hover:opacity-70">
                <span style={setStyleIcon("vk")}></span>
              </a>
              <a href="" className="hover:opacity-70">
                <span style={setStyleIcon("tg")}></span>
              </a>
              <a href="" className="hover:opacity-70">
                <span style={setStyleIcon("inst")}></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;