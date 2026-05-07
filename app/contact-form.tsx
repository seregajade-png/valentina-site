"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        <input className="vl-field" type="text" placeholder="Ваше имя" required />
        <input className="vl-field" type="tel" placeholder="Телефон" required />
      </div>
      <select className="vl-field" defaultValue="">
        <option value="" disabled>Какая услуга интересует?</option>
        <option>Планировочное решение</option>
        <option>Полный дизайн-проект</option>
        <option>Авторский надзор и реализация</option>
        <option>Не знаю, нужна консультация</option>
      </select>
      <textarea className="vl-field" placeholder="Коротко о проекте — площадь, сроки, что важно" />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <span className="max-w-[36ch] text-[11px] leading-[1.5] text-ink-mute">
          Нажимая «Отправить», вы&nbsp;соглашаетесь с&nbsp;политикой обработки персональных&nbsp;данных.
        </span>
        <button type="submit" className="btn-primary">
          {sent ? "Спасибо, скоро свяжемся ✓" : (<>Отправить заявку <span>→</span></>)}
        </button>
      </div>
    </form>
  );
}
