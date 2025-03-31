import React from 'react';

const Contacts = () => {
  const setStyleIcon = (icon) => {
    const styleIcons = {
      display: "inline-block",
      width: "35px",
      height: "35px",
      background: `url(assets/icons/${icon}.svg) no-repeat center/contain`
    }
    return styleIcons
  }

  const inputStyle = "bg-inherit border-b border-black w-1/4 py-2 outline-none text-xl text-black placeholder:text-black"

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className=" w-3/4 rounded-lg border-2 border-dashed border-white p-7
      flex flex-col gap-14 text-black font-dirt">
        <h2 className="text-4xl text-center">Свяжитесь с нами – мы всегда на связи!</h2>
        <p className="text-xl text-center">Наши специалисты помогут подобрать стильный образ, ответят на вопросы о заказе и условиях доставки.</p>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl">Заполните форму, и мы вам перезвоним:</h3>
          <form action="" className="flex flex-row gap-4">
            <input className={inputStyle} placeholder="Ваше имя" type="text" />
            <input className={inputStyle} placeholder="Ваш номер" type="tel" />
            <input className={inputStyle} placeholder="Email" type="email" />
            <button className="bg-inherit border border-black w-1/5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-500">Отправить заявку</button>
          </form>
        </div>
        <div className="flex flex-row justify-between mx-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">ИЛИ СВЯЖИТЕСЬ С НАМИ НАПРЯМУЮ:</h3>
            <p className="text-xl flex items-center gap-3"><span style={setStyleIcon("call")}></span>+7 (900) 123-45-67</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">ПИШИТЕ В СОЦИАЛЬНЫХ СЕТЯХ:</h3>
            <div className="flex flex-row gap-3">
              <a href=""><span style={setStyleIcon("vk")}></span></a>
              <a href=""><span style={setStyleIcon("tg")}></span></a>
              <a href=""><span style={setStyleIcon("inst")}></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
