"use client";

import { useEffect, useState } from "react";

const LINKS = [
  {
    href: "https://t.me/ValentinaDesign",
    label: "Telegram",
    bg: "#229ED9",
    border: undefined as string | undefined,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M9.036 16.57l-.396 3.958c.564 0 .81-.242 1.104-.532l2.648-2.525 5.487 4.017c1.006.554 1.715.263 1.987-.93l3.602-16.874.001-.001c.32-1.492-.54-2.075-1.52-1.71L1.11 9.38c-1.459.566-1.437 1.376-.248 1.742l5.124 1.596L17.794 5.24c.56-.37 1.07-.165.65.204L9.036 16.57z" />
      </svg>
    ),
  },
  {
    href: "https://max.ru/u/f9LHodD0cOKk92NT2lZcYkvVlD1vmPfKCrC9DvLjND4l_XNVsG9ZIDJNFJ4",
    label: "MAX",
    bg: "#FFFFFF",
    border: "1px solid rgba(0,0,0,.08)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 42 42" fill="#0077FF" aria-hidden>
        <path
          fillRule="evenodd"
          d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67m.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "https://vk.com/valentina.design",
    label: "ВКонтакте",
    bg: "#0077FF",
    border: undefined,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.07 14.27h-1.42c-.55 0-.71-.44-1.7-1.42-.86-.83-1.23-.94-1.45-.94-.3 0-.39.09-.39.51v1.27c0 .36-.11.57-1.07.57-1.59 0-3.35-.96-4.59-2.75C5.65 11.06 5.15 9.1 5.15 8.7c0-.21.09-.42.51-.42h1.42c.38 0 .52.17.66.59.7 2.03 1.87 3.81 2.34 3.81.18 0 .26-.08.26-.55V9.97c-.06-.96-.57-1.04-.57-1.39 0-.16.13-.32.34-.32h2.23c.32 0 .43.17.43.55v2.81c0 .32.14.43.23.43.18 0 .33-.11.66-.44 1.02-1.14 1.74-2.9 1.74-2.9.09-.21.26-.4.64-.4h1.42c.43 0 .52.22.43.52-.18.83-1.92 3.29-1.92 3.29-.15.24-.21.36 0 .64.15.21.65.65.99 1.04.6.7 1.07 1.29 1.2 1.7.13.42-.08.62-.5.62z" />
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
