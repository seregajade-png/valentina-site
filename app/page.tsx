import Image from "next/image";
import { ContactForm } from "./contact-form";
import { FloatingMessengers } from "./floating-messengers";
import { HeroSlideshow } from "./hero-slideshow";
import { MobileMenu } from "./mobile-menu";
import { ClipReveal, Magnetic, MotionPhoto, Reveal, RevealItem, RevealStagger } from "./lib/motion";

const NB = " ";

const WHY = [
  {
    n: "01",
    title: "Архитектурное образование",
    text: `Профильное архитектурное образование. 11${NB}лет практики в${NB}интерьере. Создаю не${NB}просто красивые интерьеры, а${NB}эргономичные пространства, где продумана геометрия, свет и${NB}каждая деталь.`,
  },
  {
    n: "02",
    title: "Инженерная точность",
    text: `Работаю в${NB}паре с${NB}инженером, который разрабатывает безупречные чертежи. Для${NB}строителей${NB}— понятная инструкция, для${NB}вас${NB}— гарантия точной реализации.`,
  },
  {
    n: "03",
    title: "Без стресса на стройке",
    text: `У${NB}меня есть проверенные годами строительные бригады и${NB}надёжные поставщики. Не${NB}придётся искать подрядчиков и${NB}переплачивать.`,
  },
  {
    n: "04",
    title: "Скидки до 20%",
    text: `Эксклюзивные партнёрские скидки на${NB}материалы и${NB}мебель помогут оптимизировать ваш бюджет${NB}— до${NB}20${NB}% от${NB}розничных цен.`,
  },
];

const PROJECTS = [
  { src: "/assets/projects/living-3.jpg", title: "Тёплый минимализм", sub: "ЖК «Нева» · СПб · 2024" },
  { src: "/assets/projects/living-7.jpg", title: `Дом в${NB}сосновом бору`, sub: "Ленобласть · 2023" },
  { src: "/assets/projects/kitchen-3.jpg", title: `Студия у${NB}воды`, sub: "Васильевский о-в · 2024" },
  { src: "/assets/projects/kitchen-7.jpg", title: `Свет и${NB}камень`, sub: "Центр · СПб · 2024" },
];

const SERVICES = [
  { n: "01", title: "Планировочное решение", desc: `Удобная планировка, расстановка мебели и${NB}3D-модель с${NB}комментариями дизайнера, демонтаж и${NB}монтаж перегородок.`, price: "1 000", unit: "₽/м²" },
  { n: "02", title: `Смарт-проект с${NB}ИИ`, desc: `Разработка планировки и${NB}визуализации вместе с${NB}ИИ, подбор всех материалов и${NB}мебели.`, price: "2 500", unit: "₽/м²" },
  { n: "03", title: `Эскизный проект с${NB}визуализацией`, desc: `Планировочное решение и${NB}фотореалистичные 3D-визуализации каждой комнаты, подбор материалов.`, price: "3 000", unit: "₽/м²" },
  { n: "04", title: `Эскизный проект с${NB}чертежами`, desc: `Разработка планировок и${NB}общий пакет рабочих чертежей для${NB}строительной бригады.`, price: "3 000", unit: "₽/м²" },
  { n: "05", title: `Проект под${NB}ключ`, desc: `Концепция, визуализация, рабочие чертежи и${NB}спецификации${NB}— всё в${NB}одном пакете «всё включено».`, price: "4 000", unit: "₽/м²" },
  { n: "06", title: "Авторский надзор", desc: `Контроль ремонта, выезды на${NB}объект, согласование с${NB}бригадой и${NB}поставщиками. Возможен только при заказе «Проекта под${NB}ключ».`, price: "45 000", unit: "₽/мес" },
];

const STEPS = [
  { n: "01", title: `Обмер и${NB}тех. задание`, text: `Точные замеры помещения, фотофиксация и${NB}беседа о${NB}ваших привычках, сценариях, бюджете. На${NB}этом этапе складывается портрет дома.` },
  { n: "02", title: `Планировка и${NB}концепция`, text: `2–3 варианта планировок, зонирование, расстановка мебели и${NB}стилевое решение. Согласовываем направление, прежде${NB}чем идти в${NB}3D.` },
  { n: "03", title: `Визуализация в${NB}3D`, text: `Фотореалистичные ракурсы каждой комнаты${NB}— с${NB}реальной мебелью, светом и${NB}материалами. Можно «прожить» интерьер до${NB}старта ремонта.` },
  { n: "04", title: "Рабочие чертежи", text: `Полный пакет технической документации: планы, развёртки, узлы, схемы электрики и${NB}сантехники. По${NB}нему бригада строит без${NB}вопросов.` },
  { n: "05", title: "Выдача альбома", text: `Готовый дизайн-проект${NB}— в${NB}печатном и${NB}электронном виде. Полный пакет, по${NB}которому можно работать с${NB}любой бригадой.` },
  { n: "06", title: "Авторский надзор", text: `Регулярные выезды на${NB}объект, контроль точности воплощения, оперативные правки. Я${NB}остаюсь рядом до${NB}последнего штриха.` },
];

const QFEATS = [
  {
    title: `Ответ в${NB}течение 30${NB}минут`,
    desc: `В${NB}будни с${NB}9:00 до${NB}21:00, в${NB}остальное время${NB}— утром следующего дня.`,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Бесплатная консультация",
    desc: `До${NB}часа разбора${NB}— онлайн или${NB}на${NB}объекте. Без${NB}обязательств.`,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Прозрачная смета",
    desc: `КП с${NB}точной разбивкой по${NB}этапам, без${NB}«звёздочек» и${NB}скрытых строк.`,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* NAV — no logo, stretched pills, accent phone button */}
      <nav
        className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
        style={{ background: "rgba(26,26,26,.82)" }}
      >
        <div className="mx-auto flex h-24 max-w-[1280px] items-center gap-4 px-8 max-md:gap-3 max-md:h-20">
          <ul className="flex flex-1 list-none items-center gap-1.5 p-1 m-0 rounded-full border border-line-2 text-[13px] text-ink-dim max-md:hidden">
            <NavPill href="#about">Мы</NavPill>
            <NavPill href="#projects">Проекты</NavPill>
            <NavPill href="#services">Услуги</NavPill>
            <NavPill href="#cta" active>Контакты</NavPill>
          </ul>
          <span className="flex-1 font-serif text-[22px] italic text-ink md:hidden">Valentina</span>
          <Magnetic strength={0.18} className="max-md:hidden">
            <a href="tel:+79789425595" className="btn-primary">
              +7 978 942 55 95
            </a>
          </Magnetic>
          <MobileMenu />
        </div>
      </nav>

      {/* HERO — full-bleed slideshow with darkening overlay */}
      <header>
        <div className="relative w-full overflow-hidden bg-panel" style={{ height: "min(85vh, 820px)" }}>
          <HeroSlideshow />
        </div>

        <div className="mx-auto max-w-[1280px] px-8 pt-12">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
            <Reveal as="h1" className="h-display">
              Создаю дома, в которых&nbsp;<em>хочется жить</em>,<br />а не просто находиться.
            </Reveal>
            <Reveal delay={0.15}>
              <Magnetic strength={0.22}>
                <a href="#cta" className="btn-primary btn-lg">Бесплатная консультация →</a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </header>

      {/* WHY US — eyebrow brighter, 4 cards aligned to designer photo height */}
      <section id="about" className="py-[140px] max-md:py-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <Reveal>
            <div className="mb-16 grid items-end gap-16 md:grid-cols-2">
              <div>
                <span className="eyebrow">Почему мы</span>
                <h2 className="h-section mt-5">
                  Архитектурный подход <em>и&nbsp;инженерная точность</em>
                </h2>
              </div>
              <p className="lede">
                Я&nbsp;не&nbsp;продаю «красивые картинки». Проектирую дом как&nbsp;систему&nbsp;— геометрию, свет, маршруты, бюджет&nbsp;— и&nbsp;довожу её до&nbsp;состояния, в&nbsp;котором каждая деталь работает.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-[1.35fr_.9fr] md:items-stretch md:gap-20">
            <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
              {WHY.map((p) => (
                <RevealItem key={p.n} className="flex flex-col gap-3.5 bg-bg p-8 px-7 max-md:p-6 max-md:px-6">
                  <span className="font-serif text-[32px] font-normal italic leading-none text-accent">{p.n}</span>
                  <h3 className="m-0 font-serif text-[22px] font-normal leading-[1.18] tracking-[-.005em]">{p.title}</h3>
                  <p className="m-0 text-[14px] leading-[1.6] text-ink-dim">{p.text}</p>
                </RevealItem>
              ))}
            </RevealStagger>

            <ClipReveal className="relative overflow-hidden rounded-[8px] bg-panel min-h-[480px] md:min-h-0">
              <Image
                src="/assets/designer-white.jpeg"
                alt="Валентина Захрялова"
                fill
                sizes="(max-width: 980px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "center 18%" }}
              />
              <div
                className="absolute bottom-6 left-6 max-w-[240px] rounded-[6px] border px-5 py-4 backdrop-blur-md"
                style={{
                  background: "rgba(26,26,26,.78)",
                  borderColor: "rgba(255,255,255,.08)",
                }}
              >
                <div className="font-serif text-[22px] italic leading-[1.1]">Валентина Захрялова</div>
                <div className="mt-2 text-[11px] uppercase tracking-[.18em] text-ink-mute">Дизайнер · архитектор</div>
              </div>
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* PROJECTS — full-bleed (no max-width on grid) */}
      <section id="projects" className="pb-[140px] max-md:pb-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <Reveal>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
              <div>
                <span className="eyebrow">Наши проекты</span>
                <h2 className="h-section mt-5">
                  Реализованные <em>интерьеры</em>
                </h2>
              </div>
              <a href="#" className="btn-ghost">Все проекты →</a>
            </div>
          </Reveal>
        </div>

        <div className="px-8 max-md:px-4">
          <RevealStagger className="mx-auto grid max-w-[1640px] grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-2">
            {PROJECTS.map((p) => (
              <RevealItem key={p.title} className="group flex flex-col bg-panel">
                <div className="relative aspect-[16/10] overflow-hidden vl-tint">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 980px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-end justify-between p-6 px-7">
                  <div>
                    <div className="font-serif text-[24px] font-normal leading-[1.1]">{p.title}</div>
                    <div className="mt-1.5 text-[12px] tracking-[.06em] text-ink-mute">{p.sub}</div>
                  </div>
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line-2 text-[16px] text-ink-dim transition group-hover:rotate-[-45deg] group-hover:border-accent group-hover:bg-accent group-hover:text-[#1a1a1a]">
                    →
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* SERVICES — new lede, heading with explicit break */}
      <section id="services" className="pb-[140px] max-md:pb-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <Reveal>
            <div className="mb-16 grid items-end gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
              <div>
                <span className="eyebrow">Услуги</span>
                <h2 className="h-section mt-5">
                  Давайте подберём услугу<br />
                  <em>под ваш запрос</em>
                </h2>
              </div>
              <p className="lede">
                От&nbsp;планировочного решения до&nbsp;проекта под&nbsp;ключ с&nbsp;авторским надзором. Шесть форматов&nbsp;— выбирайте под&nbsp;свою задачу и&nbsp;бюджет.
              </p>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-3">
            {SERVICES.map((s) => (
              <RevealItem
                key={s.n}
                className="group relative flex min-h-[340px] flex-col bg-bg p-9 px-8 pb-8 transition-colors hover:bg-bg-2"
              >
                <span className="font-serif text-[18px] font-normal italic text-accent">{s.n}</span>
                <h3 className="m-0 mb-2.5 mt-4 font-serif text-[30px] font-normal leading-[1.12] tracking-[-.005em]">
                  {s.title}
                </h3>
                <p className="m-0 mb-auto text-[14px] leading-[1.6] text-ink-dim">{s.desc}</p>
                <div className="mt-8 flex items-end justify-between border-t border-line-2 pt-6">
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[.16em] text-ink-mute">от</div>
                    <div className="font-serif text-[32px] font-normal leading-none text-ink">
                      {s.price} <em className="text-[18px] italic text-accent">{s.unit}</em>
                    </div>
                  </div>
                  <a
                    href="#cta"
                    aria-label="Заказать услугу"
                    className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line-2 text-[14px] text-ink-mute transition group-hover:border-accent group-hover:text-accent"
                  >
                    →
                  </a>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* BIG CTA — symmetric vertical padding, centered buttons same width */}
      <Reveal>
        <section className="mx-auto max-w-[1280px] px-8 pb-[140px] max-md:pb-20">
          <div
            className="relative grid items-center gap-12 overflow-hidden rounded-[120px] border border-line-2 px-20 py-14 max-md:rounded-[32px] max-md:p-7 md:grid-cols-[1fr_auto]"
            style={{ background: "linear-gradient(135deg,#272320 0%,#1f1c19 100%)" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(217,205,184,.12), transparent 70%)" }}
            />
            <div className="relative">
              <h2 className="m-0 font-serif text-[48px] font-light leading-[1.05] tracking-[-.015em] max-md:text-[34px]">
                Записаться на&nbsp;<em>бесплатную консультацию</em>
              </h2>
              <div className="mt-3.5 max-w-[48ch] text-[14px] text-ink-dim">
                Покажите планировку или&nbsp;опишите задачу&nbsp;— я&nbsp;перезвоню в&nbsp;течение 30&nbsp;минут, обсудим проект и&nbsp;пришлю коммерческое предложение в&nbsp;тот&nbsp;же день.
              </div>
            </div>
            <div className="relative flex w-[260px] flex-col items-stretch gap-3.5 max-md:w-full">
              <Magnetic strength={0.22} className="w-full">
                <a href="#cta" className="btn-primary btn-lg w-full justify-center">Записаться →</a>
              </Magnetic>
              <a href="tel:+79789425595" className="btn-ghost w-full justify-center">+7 978 942 55 95</a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* STEPS — 6 steps, no "Закупка и логистика", with "Выдача альбома" */}
      <section id="process" className="pb-[140px] max-md:pb-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <Reveal>
            <div className="mb-16">
              <span className="eyebrow">Этапы работы</span>
              <h2 className="h-section mt-5">
                От&nbsp;первого замера <em>до&nbsp;последнего штриха</em>
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-2">
            {STEPS.map((s) => (
              <RevealItem
                key={s.n}
                className="grid grid-cols-[64px_1fr] items-start gap-6 bg-bg p-9 px-9"
              >
                <span className="font-serif text-[42px] font-normal italic leading-none text-accent">{s.n}</span>
                <div>
                  <h4 className="m-0 mb-2 font-serif text-[24px] font-normal leading-[1.15] tracking-[-.005em]">{s.title}</h4>
                  <p className="m-0 text-[14px] leading-[1.65] text-ink-dim">{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="pb-[140px] max-md:pb-20">
        <div className="mx-auto max-w-[1280px] px-8">
          <Reveal>
            <div className="mb-14">
              <span className="eyebrow">Отзывы</span>
              <h2 className="h-section mt-5">
                Что&nbsp;говорят <em>о&nbsp;работе</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-panel">
              <MotionPhoto src="/assets/projects/living-9.jpg" alt="Реализованный проект" sizes="(max-width:980px) 100vw, 50vw" />
            </div>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-[8px] border border-line bg-panel p-12 max-md:p-8">
                <div className="mb-2 font-serif text-[96px] italic leading-[.6] text-accent">“</div>
                <div className="font-serif text-[24px] font-normal leading-[1.4] text-ink">
                  Когда&nbsp;мы пришли, у&nbsp;нас была голая квартира и&nbsp;куча сомнений. Валентина не&nbsp;просто нарисовала красивую картинку&nbsp;— она&nbsp;продумала, как&nbsp;мы будем жить здесь утром, вечером и&nbsp;в&nbsp;дождь. Через&nbsp;год мы&nbsp;до&nbsp;сих пор находим продуманные мелочи.
                </div>
                <div className="mt-8 flex items-center gap-3.5 border-t border-line pt-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full font-serif text-[20px] italic text-accent" style={{ background: "linear-gradient(135deg,#3a3a36,#2a2a26)" }}>С</div>
                  <div>
                    <div className="text-[14px] font-medium text-ink">Семья Соколовых</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[.1em] text-ink-mute">Квартира 87&nbsp;м² · ЖК «Нева» · СПб</div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end gap-2.5">
                  <button aria-label="Предыдущий" className="grid h-12 w-12 place-items-center rounded-full border border-line-2 text-ink-dim transition hover:border-accent hover:text-accent">←</button>
                  <button aria-label="Следующий" className="grid h-12 w-12 place-items-center rounded-full border border-line-2 text-ink-dim transition hover:border-accent hover:text-accent">→</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QBLOCK + FORM */}
      <section id="cta" className="border-y border-line bg-bg-2 py-[120px] max-md:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-20 px-8 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <span className="eyebrow">Есть вопросы?</span>
              <h2 className="h-section mt-5">
                Напишите мне&nbsp;— <em>отвечу лично</em>
              </h2>
              <p className="lede mt-6">
                Расскажите о&nbsp;квартире, доме или&nbsp;коммерческом помещении. Любая стадия: голые стены, готовый ремонт, мысли о&nbsp;переезде. Перезвоню в&nbsp;течение 30&nbsp;минут.
              </p>

              <RevealStagger className="mt-10 grid gap-5">
                {QFEATS.map((f) => (
                  <RevealItem key={f.title} className="grid grid-cols-[36px_1fr] items-start gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-accent text-accent">
                      {f.icon}
                    </span>
                    <div>
                      <div className="mb-1 font-serif text-[20px] leading-[1.2]">{f.title}</div>
                      <div className="text-[13.5px] leading-[1.55] text-ink-dim">{f.desc}</div>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER — nav left, contacts right (text links) */}
      <footer id="contacts" className="border-t border-line bg-bg pb-9 pt-20 max-md:pt-16">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-16 grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h5 className="m-0 mb-5 text-[11px] font-normal uppercase tracking-[.22em] text-ink-mute">Навигация</h5>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[14px] text-ink-dim">
                <li><a href="#about" className="hover:text-accent">Почему мы</a></li>
                <li><a href="#projects" className="hover:text-accent">Проекты</a></li>
                <li><a href="#services" className="hover:text-accent">Услуги</a></li>
                <li><a href="#process" className="hover:text-accent">Этапы работы</a></li>
                <li><a href="#reviews" className="hover:text-accent">Отзывы</a></li>
              </ul>
            </div>
            <div className="md:text-right">
              <h5 className="m-0 mb-5 text-[11px] font-normal uppercase tracking-[.22em] text-ink-mute">Контакты</h5>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[14px] text-ink-dim">
                <li><a href="tel:+79789425595" className="hover:text-accent">+7 978 942 55 95</a></li>
                <li><a href="mailto:Valentina.design@mail.ru" className="hover:text-accent">Valentina.design@mail.ru</a></li>
                <li><a href="https://t.me/ValentinaDesign" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Telegram</a></li>
                <li><a href="https://max.ru/u/f9LHodD0cOKk92NT2lZcYkvVlD1vmPfKCrC9DvLjND4l_XNVsG9ZIDJNFJ4" target="_blank" rel="noopener noreferrer" className="hover:text-accent">MAX</a></li>
                <li><a href="https://vk.com/valentina.design" target="_blank" rel="noopener noreferrer" className="hover:text-accent">ВКонтакте</a></li>
                <li>СПб · Большая Морская, 12</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-[12px] text-ink-mute">
            <span>© 2026 Valentina Захрялова · Студия дизайна интерьера</span>
            <span>
              <a href="#" className="hover:text-ink-dim">Политика конфиденциальности</a> · <a href="#" className="hover:text-ink-dim">Договор-оферта</a>
            </span>
          </div>
        </div>
      </footer>

      <FloatingMessengers />
    </>
  );
}

function NavPill({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <li className="flex-1">
      <a
        href={href}
        className={`block w-full rounded-full px-4 py-2.5 text-center tracking-[.04em] transition ${
          active
            ? "bg-grey text-ink hover:bg-accent hover:text-[#1a1a1a]"
            : "hover:bg-white/[.05] hover:text-ink"
        }`}
        style={{ fontWeight: 400 }}
      >
        {children}
      </a>
    </li>
  );
}

