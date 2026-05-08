"use client";

import { useState } from "react";
import { Magnetic } from "./lib/motion";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-3.5 rounded-[12px] border border-line bg-panel p-10 max-md:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="mb-2">
        <h3 className="m-0 mb-2 font-serif text-[30px] font-normal leading-tight tracking-[-.005em]">
          Оставить заявку
        </h3>
        <p className="m-0 text-[13px] text-ink-mute">Я перезвоню и пришлю КП в тот же день</p>
      </div>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <input className="vl-field" type="text" placeholder="Ваше имя" required />
        <input className="vl-field" type="tel" placeholder="Телефон" required />
      </div>
      <select className="vl-field" defaultValue="">
        <option value="" disabled>Какая услуга интересует?</option>
        <option>Планировочное решение</option>
        <option>Смарт-проект с ПИ</option>
        <option>Эскизный проект с визуализацией</option>
        <option>Эскизный проект с чертежами</option>
        <option>Проект под ключ</option>
        <option>Авторский надзор</option>
        <option>Не знаю, нужна консультация</option>
      </select>
      <textarea className="vl-field" placeholder="Коротко о проекте — площадь, сроки, что важно" />
      <Magnetic strength={0.18} className="w-full">
        <button type="submit" disabled={sent} className="btn-primary btn-lg w-full justify-center" style={{ width: "100%" }}>
          {sent ? "Спасибо, скоро свяжемся ✓" : "Отправить заявку"}
        </button>
      </Magnetic>
      <div className="mt-1 max-w-[46ch] text-[11.5px] leading-[1.5] text-ink-mute">
        Нажимая кнопку, вы&nbsp;соглашаетесь с&nbsp;<a href="#" className="text-ink-dim underline">политикой обработки персональных данных</a>.
      </div>
    </form>
  );
}
