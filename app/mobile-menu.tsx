"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "#about", label: "Мы" },
  { href: "#projects", label: "Проекты" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Этапы работы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#cta", label: "Контакты" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 md:hidden"
          style={{
            zIndex: 999,
            background: "rgba(0,0,0,.6)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <motion.aside
          key="drawer"
          className="fixed right-0 top-0 flex h-full w-[88%] flex-col p-8 pt-24 md:hidden"
          style={{
            zIndex: 1000,
            background: "#1a1a1a",
            borderLeft: "1px solid #333",
            maxWidth: 400,
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="flex flex-col">
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                className="border-b border-line py-5 font-serif text-[26px] font-normal leading-[1.1] text-ink transition hover:text-accent"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <a
              href="tel:+79829610131"
              onClick={() => setOpen(false)}
              className="btn-primary btn-lg w-full justify-center"
            >
              +7 982 961 01 31
            </a>
            <div className="mt-4 text-[12px] text-ink-mute">
              hello@valentina-design.ru<br />СПб · Большая Морская, 12
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-11 w-11 place-items-center rounded-full border border-line-2 text-ink-dim transition hover:border-accent hover:text-accent md:hidden"
        style={{ zIndex: 1001 }}
      >
        <span className="relative block h-3.5 w-5">
          <span
            className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300"
            style={{
              top: open ? "50%" : 0,
              transform: open ? "translateY(-50%) rotate(45deg)" : "none",
            }}
          />
          <span
            className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300"
            style={{
              bottom: open ? "50%" : 0,
              transform: open ? "translateY(50%) rotate(-45deg)" : "none",
            }}
          />
        </span>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
