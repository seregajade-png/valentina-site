"use client";

import { useEffect, useState } from "react";

const LINKS = [
  {
    href: "https://t.me/ValentinaDesign",
    label: "Telegram",
    bg: "#229ED9",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9.036 16.57l-.396 3.958c.564 0 .81-.242 1.104-.532l2.648-2.525 5.487 4.017c1.006.554 1.715.263 1.987-.93l3.602-16.874c.32-1.492-.54-2.075-1.52-1.71L1.11 9.38c-1.459.566-1.437 1.376-.248 1.742l5.124 1.596L17.794 5.24c.56-.37 1.07-.165.65.204L9.036 16.57z" />
      </svg>
    ),
  },
  {
    href: "https://max.ru/u/f9LHodD0cOKk92NT2lZcYkvVlD1vmPfKCrC9DvLjND4l_XNVsG9ZIDJNFJ4",
    label: "MAX",
    bg: "#FFFFFF",
    border: "1px solid rgba(0,0,0,.08)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 42 42" aria-hidden>
        <circle cx="13" cy="13" r="8" fill="#FF3B5C" />
        <circle cx="29" cy="13" r="8" fill="#FFB400" />
        <circle cx="13" cy="29" r="8" fill="#00C853" />
        <circle cx="29" cy="29" r="8" fill="#1F8FFF" />
      </svg>
    ),
  },
  {
    href: "https://vk.com/valentina.design",
    label: "ВКонтакте",
    bg: "#0077FF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.162 18.994c.486 0 .689-.331.683-.747-.024-1.567.591-2.412 1.74-1.262 1.27 1.271 1.532 2.009 3.058 2.009h2.704c.51 0 .919-.16.971-.485.073-.453-.36-1.057-1.45-2.103-1.61-1.547-1.687-1.434-.279-3.025 2.063-2.33 3.295-3.911 3.295-4.602 0-.366-.297-.51-.785-.51h-2.736c-.595 0-.806.184-1.04.582-.985 1.679-2.348 3.797-3.183 4.292-1.06.632-.989-.484-.989-1.42v-2.847c0-.602-.276-.92-.781-.92h-3.69c-.475 0-.741.291-.741.591 0 .582.731.711.811 1.954v2.823c0 .957-.179 1.107-.776 1.107-.806 0-1.929-1.737-3.226-4.297-.297-.591-.503-.842-1.115-.842H2.094c-.508 0-.812.182-.812.594 0 .607.706 2.444 2.736 5.073 2.044 2.645 4.107 4.235 6.106 4.235h2.038z" />
      </svg>
    ),
  },
];

export function FloatingMessengers() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed right-6 z-40 flex flex-col gap-3 transition-all duration-500 ease-out max-md:right-4 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ bottom: "1.5rem" }}
    >
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          title={l.label}
          className="group relative grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
          style={{ background: l.bg, border: l.border ?? "none" }}
        >
          {l.icon}
          <span
            className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-medium opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background: "#1a1a1a", color: "#f3f1ec" }}
          >
            {l.label}
          </span>
        </a>
      ))}
    </div>
  );
}
