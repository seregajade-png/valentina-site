import Image from "next/image";
import { ContactForm } from "./contact-form";
import { ClipReveal, Magnetic, MotionPhoto, Reveal, RevealItem, RevealStagger } from "./lib/motion";

const NB = " ";

const HERO_BAND = [
  "Эргономика пространства",
  "Авторский надзор",
  "Натуральные материалы",
  "Скидки партнёров до 30%",
  "3D-визуализация",
  "Технические чертежи",
];

const STEPS = [
  { num: "01", word: "Шаг первый", title: "Обмер", text: "Точные замеры помещения и создание исходного чертежа.", accent: false },
  { num: "02", word: "Шаг второй", title: "Тех. задание", text: "Фиксация ваших пожеланий, привычек и бюджета.", accent: false },
  { num: "03", word: "Шаг третий", title: "Планировка", text: "Зонирование, расстановка мебели и 3D-обзор с комментариями дизайнера.", accent: true },
  { num: "04", word: "Шаг четвёртый", title: "Визуализация", text: "Фотореалистичные 3D-эскизы каждой комнаты — до последней лампы.", accent: false },
  { num: "05", word: "Шаг пятый", title: "Рабочие чертежи", text: "Полный пакет технической документации для строительной бригады.", accent: false },
  { num: "06", word: "Шаг шестой", title: "Выдача альбома", text: "Готовый дизайн-проект в печатном и электронном виде.", accent: false },
  { num: "07", word: "Шаг седьмой", title: "Авторский надзор", text: "Контроль ремонта и хода работ для точного воплощения идеи в жизнь.", accent: true },
];

const FAQS = [
  {
    q: `Работаете${NB}ли вы${NB}с${NB}заказчиками из${NB}других${NB}городов?`,
    a: `Да. Около половины моих проектов${NB}— дистанционные. Замер делает мой партнёр или${NB}сертифицированный замерщик в${NB}вашем городе, дальше всё веду онлайн${NB}— от${NB}концепции до${NB}авторского надзора через регулярные видеовстречи с${NB}прорабом.`,
    open: true,
  },
  {
    q: `Какой срок разработки полного дизайн-проекта?`,
    a: `В${NB}среднем${NB}— от${NB}8 до${NB}14 недель в${NB}зависимости от${NB}площади и${NB}сложности. Планировочное решение с${NB}3D-обзором${NB}— 2–3 недели.`,
    open: false,
  },
  {
    q: `Что входит в${NB}смету и${NB}как${NB}она${NB}считается?`,
    a: `Стоимость рассчитывается за${NB}м² жилой площади и${NB}фиксируется в${NB}договоре до${NB}старта. В${NB}неё входит весь объём работ по${NB}выбранному пакету${NB}— без${NB}скрытых доплат за${NB}«дополнительные правки» или${NB}«ещё одну визуализацию».`,
    open: false,
  },
  {
    q: `Можно${NB}ли заказать только визуализацию?`,
    a: `Да, если у${NB}вас уже есть планировка и${NB}концепция. Стоимость${NB}— от${NB}6${NB}500${NB}₽ за${NB}ракурс, минимум 4 ракурса на${NB}помещение.`,
    open: false,
  },
  {
    q: `Какие гарантии вы${NB}даёте на${NB}реализацию?`,
    a: `На${NB}все строительно-отделочные работы${NB}— 24${NB}месяца. На${NB}инженерные системы${NB}— по${NB}паспортам производителей. Все обязательства закреплены договором и${NB}актом приёма-передачи.`,
    open: false,
  },
];

function Photo({
  src,
  alt,
  sizes = "(max-width: 980px) 100vw, 60vw",
  priority = false,
  clip = true,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  clip?: boolean;
}) {
  return <MotionPhoto src={src} alt={alt} sizes={sizes} priority={priority} clip={clip} />;
}

export default function Page() {
  return (
    <>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
        style={{ background: "rgba(28,25,22,.78)" }}
      >
        <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-8">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/assets/logo-valentina.png"
              alt="Valentina Interior Design"
              width={108}
              height={54}
              className="h-[54px] w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </a>
          <ul className="hidden gap-9 text-[13px] text-ink-dim md:flex">
            <li><a href="#projects" className="transition hover:text-accent">Проекты</a></li>
            <li><a href="#services" className="transition hover:text-accent">Услуги</a></li>
            <li><a href="#process" className="transition hover:text-accent">Процесс</a></li>
            <li><a href="#about" className="transition hover:text-accent">О студии</a></li>
            <li><a href="#contacts" className="transition hover:text-accent">Контакты</a></li>
          </ul>
          <div className="flex items-center gap-6">
            <span className="hidden text-[13px] tracking-[.04em] text-ink lg:inline">+7 982 961 01 31</span>
            <Magnetic strength={0.2}>
              <a href="#cta" className="btn-primary">Обсудить проект</a>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-16">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid items-end gap-12 md:grid-cols-[1.1fr_.9fr]">
            <RevealStagger>
              <RevealItem>
                <h1 className="h-display mb-7">
                  <span className="mb-6 block text-[14px] font-normal uppercase tracking-[.22em] text-accent">
                    Студия дизайна интерьера
                  </span>
                  Создаю дома, в которых{NB}<em>хочется{NB}жить</em>, а{NB}не просто{NB}находиться.
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="lede">
                  Архитектурный подход, инженерная точность и{NB}11 лет опыта. Веду проект от{NB}первого{NB}замера до{NB}последнего штриха{NB}— и{NB}остаюсь рядом, пока вы{NB}не{NB}скажете «дома».
                </p>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Magnetic strength={0.25}>
                    <a href="#cta" className="btn-primary">Записаться на консультацию <span>→</span></a>
                  </Magnetic>
                  <a href="#projects" className="btn-ghost">Смотреть проекты</a>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="mt-10 flex flex-wrap gap-12 border-t border-line pt-7">
                  <Stat num="11" label={`лет в${NB}профессии`} />
                  <Stat num="84" label="завершённых проекта" />
                  <Stat num="7" label={`шагов до${NB}ключа`} />
                </div>
              </RevealItem>
            </RevealStagger>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-panel">
              <Photo src="/assets/projects/living-1.jpg" alt="Интерьер гостиной — проект Valentina" priority clip={false} />
            </div>
          </div>

          {/* MARQUEE */}
          <div className="mt-20 overflow-hidden border-y border-line py-6">
            <div className="vl-marquee flex gap-16 whitespace-nowrap font-serif text-[22px] italic text-ink-mute">
              {[0, 1].map((i) => (
                <span key={i} className="inline-flex items-center gap-16">
                  {HERO_BAND.map((t, idx) => (
                    <span key={idx} className="inline-flex items-center gap-16">
                      {t}
                      <i className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* BLEED IMAGE */}
      <section className="mt-20">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-[4px] bg-panel">
            <Photo src="/assets/projects/living-5.jpg" alt="Гостиная в светлых тонах" sizes="100vw" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="py-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid gap-20 md:grid-cols-2">
            <Reveal>
              <span className="eyebrow">— Почему{NB}нам доверяют</span>
              <h2 className="h-section my-6">
                Архитектурный фундамент, инженерная{NB}точность <em>и{NB}человеческое отношение.</em>
              </h2>
              <p className="lede">
                Я{NB}не{NB}продаю «красивые картинки». Я{NB}проектирую дом как{NB}систему{NB}— геометрию, свет, маршруты, бюджет{NB}— и{NB}довожу её до{NB}состояния, в{NB}котором каждая деталь работает.
              </p>
            </Reveal>
            <RevealStagger className="flex flex-col gap-px overflow-hidden rounded-[6px] border border-line bg-line">
              <RevealItem>
                <WhyCard num={`— 01 ·${NB}Образование`} title={`Архитектурный${NB}фундамент и${NB}11 лет опыта`} text="Я — дизайнер с профильным архитектурным образованием. Создаю не просто красивые интерьеры, а эргономичные пространства, где продумана геометрия, свет и каждая деталь вашей будущей жизни." />
              </RevealItem>
              <RevealItem>
                <WhyCard num={`— 02 ·${NB}Инженерия`} title={`Точность в${NB}каждом миллиметре`} text="Красивый дизайн-проект ничего не стоит без грамотной технической базы. Работаю в паре с инженером, который разрабатывает безупречные, детализированные чертежи. Для строителей — это понятная инструкция, для вас — гарантия, что всё будет реализовано точно по задумке." />
              </RevealItem>
              <RevealItem>
                <WhyCard num={`— 03 ·${NB}Реализация`} title={`Без${NB}стресса: от${NB}закупки до${NB}стройки`} text="Вам не придётся искать подрядчиков и переплачивать. У меня есть проверенные годами строительные бригады и надёжные поставщики. А эксклюзивные партнёрские скидки на материалы и мебель помогут существенно оптимизировать ваш бюджет." />
              </RevealItem>
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="process" className="pb-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mb-14 grid items-end gap-20 md:grid-cols-2">
            <Reveal>
              <span className="eyebrow">— Процесс работы</span>
              <h2 className="h-section mt-4">
                7 шагов к{NB}идеальному <em>дому</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">
                Маршрут понятен с{NB}первой встречи и{NB}до{NB}момента, когда вы{NB}вешаете на{NB}стену последнюю картину. Никаких сюрпризов в{NB}смете и{NB}никаких «потом доделаем».
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-7">
            {STEPS.map((s) => (
              <RevealItem
                key={s.num}
                className={`relative flex min-h-[240px] flex-col px-6 pt-8 pb-9 ${s.accent ? "border-l border-accent" : "bg-bg"}`}
                style={s.accent ? { background: "#2a201a" } : undefined}
              >
                <div className="mb-auto pb-4 font-serif text-[13px] uppercase tracking-[.2em] text-ink-mute">
                  <b className="mb-1.5 block text-[32px] font-normal italic tracking-normal text-accent normal-case">{s.num}</b>
                  {s.word}
                </div>
                <h4 className="mb-2.5 font-serif text-[21px] font-normal leading-[1.15]">{s.title}</h4>
                <p className="m-0 text-[13px] leading-[1.55] text-ink-dim">{s.text}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="pb-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow">— Реализованные интерьеры</span>
              <h2 className="h-section mt-4">
                Избранные <em>проекты</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="#" className="btn-ghost">Все проекты <span>→</span></a>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-6">
              <RevealItem>
                <ProjCard src="/assets/projects/living-3.jpg" alt="Гостиная с фресковым панно" title="Тёплый минимализм" sub="ЖК «Нева» · Санкт-Петербург · 2024" ratio="aspect-[4/3]" />
              </RevealItem>
              <RevealItem>
                <ProjCard src="/assets/projects/kitchen-3.jpg" alt="Кухня-столовая" title={`Студия у${NB}воды`} sub="Васильевский о-в · 2024" ratio="aspect-[16/9]" />
              </RevealItem>
            </div>
            <div className="flex flex-col gap-6">
              <RevealItem>
                <ProjCard src="/assets/projects/living-7.jpg" alt="Гостиная в загородном доме" title={`Дом в${NB}сосновом бору`} sub="Ленобласть · 2023" ratio="aspect-[3/4]" />
              </RevealItem>
              <RevealItem>
                <ProjCard src="/assets/projects/kitchen-7.jpg" alt="Кухня — свет и камень" title={`Свет и${NB}камень`} sub="Центр · 2024" ratio="aspect-[4/3]" />
              </RevealItem>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="pb-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mb-14 grid items-end gap-20 md:grid-cols-2">
            <Reveal>
              <span className="eyebrow">— Услуги и{NB}цены</span>
              <h2 className="h-section mt-4">
                Выбирайте{NB}то, что{NB}нужно <em>именно вам</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">
                Я{NB}не{NB}навязываю «полный пакет», если он{NB}вам не{NB}нужен. Три формата сотрудничества{NB}— от{NB}планировочного решения до{NB}проекта под{NB}ключ.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-6 md:grid-cols-3">
            <RevealItem>
              <ServiceCard
                tag="— Базовый"
                title="Планировочное решение"
                sub="Когда нужна точная планировка"
                items={[
                  `Замер и${NB}фотофиксация объекта`,
                  "2–3 варианта планировки",
                  `Расстановка мебели и${NB}освещения`,
                  `План демонтажа и${NB}монтажа перегородок`,
                  `3D-обзор с${NB}комментариями`,
                ]}
                priceFrom="3 000"
                priceUnit={`${NB}₽/м²`}
                cta="ghost"
              />
            </RevealItem>
            <RevealItem>
              <ServiceCard
                tag="— Популярный"
                title="Полный дизайн-проект"
                sub={`Готовая документация и${NB}3D`}
                feat
                items={[
                  `Всё из${NB}«Планировочного решения»`,
                  `Концепция и${NB}стилевое решение`,
                  "Фотореалистичная 3D-визуализация",
                  "Полный пакет рабочих чертежей",
                  "Спецификации мебели, света, отделки",
                  `Подбор поставщиков и${NB}скидки до${NB}30%`,
                ]}
                priceFrom="4 000"
                priceUnit={`${NB}₽/м²`}
                cta="primary"
              />
            </RevealItem>
            <RevealItem>
              <ServiceCard
                tag="— Под ключ"
                title={`Авторский надзор и${NB}реализация`}
                sub={`Мы${NB}ведём проект до${NB}ключа`}
                items={[
                  "Проверенная строительная бригада",
                  `Закупка материалов и${NB}логистика`,
                  `Контроль качества на${NB}всех этапах`,
                  `Авторский надзор раз в${NB}неделю`,
                  `Финальный клининг и${NB}стилизация`,
                  `Гарантия на${NB}работы 24${NB}месяца`,
                ]}
                priceFrom="45 000"
                priceUnit={`${NB}₽/мес`}
                cta="ghost"
              />
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* DESIGNER */}
      <section className="border-y border-line bg-bg-2 py-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid items-center gap-16 md:grid-cols-[1fr_1.1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-panel">
              <ClipReveal className="absolute inset-0">
                <Image
                  src="/assets/designer-blue.jpg"
                  alt="Валентина Захрялова — основательница студии"
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  className="object-cover"
                  style={{ filter: "contrast(1.02) saturate(.95)" }}
                />
              </ClipReveal>
            </div>
            <RevealStagger>
              <RevealItem>
                <span className="eyebrow">— Основательница студии</span>
                <h2 className="h-section my-6">
                  Валентина <em>Захрялова</em>
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="m-0 mb-7 font-serif text-[24px] font-light italic leading-[1.45] text-ink">
                  «Я{NB}не{NB}верю в{NB}интерьеры «на{NB}один сезон». Дом должен взрослеть вместе с{NB}вами{NB}— и{NB}каждый раз, возвращаясь, вы{NB}должны выдыхать. Это и{NB}есть результат, за{NB}который я{NB}берусь.»
                </p>
              </RevealItem>
              <RevealItem>
                <p className="text-[14px] leading-[1.6] text-ink-dim">
                  Архитектор по{NB}образованию (СПбГАСУ, 2014). 11 лет частной практики, более 80{NB}завершённых проектов в{NB}Санкт-Петербурге, Москве, Сочи и{NB}Тюмени. Преподаю основы композиции на{NB}курсах для{NB}начинающих дизайнеров.
                </p>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 flex items-center gap-5 border-t border-line pt-6">
                  <svg width="86" height="44" viewBox="0 0 86 44" fill="none" stroke="#c8956d" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M4 28 C 10 12, 18 8, 22 22 C 24 32, 30 36, 36 26 C 40 18, 46 14, 50 24 C 54 32, 62 32, 68 22 C 72 14, 78 16, 82 22" />
                  </svg>
                  <div>
                    <div className="font-serif text-[22px] italic">Валентина З.</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[.18em] text-ink-mute">Основатель · главный{NB}дизайнер</div>
                  </div>
                </div>
              </RevealItem>
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow">— Отзывы клиентов</span>
              <h2 className="h-section mt-4">
                Что{NB}о{NB}нас говорят <em>заказчики</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-2.5">
                <button className="btn-ghost px-4">←</button>
                <button className="btn-ghost px-4">→</button>
              </div>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <RevealItem className="grid grid-rows-[1fr_auto] overflow-hidden rounded-[6px] border border-line bg-panel">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Photo src="/assets/projects/living-9.jpg" alt="Квартира Соколовых" />
              </div>
              <div className="p-8">
                <div className="vl-quote font-serif text-[21px] font-normal leading-[1.4]">
                  Когда мы{NB}пришли, у{NB}нас была голая квартира и{NB}куча сомнений. Валентина не{NB}просто нарисовала красивую картинку{NB}— она продумала как{NB}мы{NB}живём, где сидим утром с{NB}кофе, где работает муж. Получилось не{NB}«дизайнерское жильё», а{NB}именно наш{NB}дом.
                </div>
                <Who name={`Анна и${NB}Михаил Соколовы`} position={`Заказчики · 116${NB}м² · 2024`} />
              </div>
            </RevealItem>

            <RevealItem className="flex flex-col gap-6 rounded-[6px] border border-line bg-panel p-10">
              <div className="vl-quote font-serif text-[21px] font-normal leading-[1.4]">
                Мы{NB}до{NB}этого работали с{NB}двумя студиями{NB}— и{NB}каждый раз получали либо красиво, либо удобно. С{NB}Валентиной впервые сошлось всё. Особенно ценно, что в{NB}смете не{NB}было ни{NB}одного «вдруг» — Валентина закладывает ресурсы заранее.
              </div>
              <Who name="Ирина Дёмина" position={`Загородный дом · 220${NB}м²`} mtAuto />
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="grid items-start gap-20 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <span className="eyebrow">— FAQ</span>
              <h2 className="h-section mt-4">
                Ответы на{NB}частые <em>вопросы</em>
              </h2>
              <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.6] text-ink-dim">
                Не{NB}нашли свой вопрос{NB}— напишите его в{NB}форме ниже, ответим в{NB}течение дня.
              </p>
            </Reveal>
            <RevealStagger className="border-t border-line">
              {FAQS.map((f, i) => (
                <RevealItem key={i}>
                  <details className="vl-faq border-b border-line py-6" open={f.open}>
                    <summary className="flex cursor-pointer items-center justify-between gap-6 font-serif text-[22px] font-normal text-ink">
                      <span>{f.q}</span>
                      <span className="vl-faq-ic grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-line text-ink-dim transition">+</span>
                    </summary>
                    <div className="max-w-[62ch] py-4 text-[14px] leading-[1.7] text-ink-dim">{f.a}</div>
                  </details>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-y border-line bg-bg-2 py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-8 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">— Свяжитесь с{NB}нами</span>
            <h2 className="h-section mt-4">
              Давайте создадим интерьер <em>вашей мечты</em>
            </h2>
            <p className="lede mt-5">
              Оставьте заявку{NB}— я{NB}перезвоню в{NB}течение 30{NB}минут, обсудим проект и{NB}пришлю коммерческое предложение в{NB}этот{NB}же день.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 text-[14px] text-ink-dim">
              <ContactRow icon="phone" text="+7 982 961 01 31" />
              <ContactRow icon="mail" text="hello@valentina-studio.ru" />
              <ContactRow icon="pin" text={`Санкт-Петербург, ул.${NB}Большая${NB}Морская, 12`} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacts" className="bg-bg pb-10 pt-16">
        <div className="mx-auto max-w-[1240px] px-8">
          <div className="mb-12 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="mb-4 inline-block">
                <Image
                  src="/assets/logo-valentina.png"
                  alt="Valentina Interior Design"
                  width={128}
                  height={64}
                  className="h-16 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
              <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.6] text-ink-dim">
                Авторская студия интерьера Валентины Захряловой. Архитектурный подход, инженерная точность, авторский надзор от{NB}первого замера до{NB}готового дома.
              </p>
            </div>
            <FootCol
              title="Навигация"
              items={[
                ["Проекты", "#projects"],
                ["Услуги", "#services"],
                ["Процесс", "#process"],
                [`О${NB}студии`, "#about"],
              ]}
            />
            <FootCol
              title="Контакты"
              items={[
                ["+7 982 961 01 31"],
                ["hello@valentina-studio.ru"],
                [`СПб · Большая${NB}Морская, 12`],
              ]}
            />
            <FootCol
              title="Социальные сети"
              items={[
                ["Instagram", "#"],
                ["Pinterest", "#"],
                ["Telegram", "#"],
                ["Behance", "#"],
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7 text-[12px] text-ink-mute">
            <span>© 2026 Valentina Interior Design. Все{NB}права{NB}защищены.</span>
            <span>
              <a href="#" className="hover:text-accent">Политика конфиденциальности</a> · <a href="#" className="hover:text-accent">Договор-оферта</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ───── helpers ───── */

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-[38px] font-light leading-none text-accent">{num}</div>
      <div className="mt-2 text-[11px] uppercase tracking-[.18em] text-ink-mute">{label}</div>
    </div>
  );
}

function WhyCard({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="bg-bg p-9 px-8">
      <span className="mb-3.5 block font-serif text-[18px] italic text-accent">{num}</span>
      <h3 className="m-0 mb-3 font-serif text-[24px] font-normal leading-[1.2] tracking-[-.005em]">{title}</h3>
      <p className="m-0 text-[14px] leading-[1.65] text-ink-dim">{text}</p>
    </div>
  );
}

function ProjCard({
  src, alt, title, sub, ratio,
}: { src: string; alt: string; title: string; sub: string; ratio: string }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-[4px] bg-panel transition-transform duration-300 hover:-translate-y-1">
      <div className={`relative overflow-hidden ${ratio}`}>
        <Photo src={src} alt={alt} />
      </div>
      <div className="flex items-end justify-between p-6">
        <div>
          <div className="font-serif text-[22px] font-normal">{title}</div>
          <div className="mt-1 text-[12px] tracking-[.06em] text-ink-mute">{sub}</div>
        </div>
        <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line text-ink-dim transition group-hover:border-accent group-hover:bg-accent group-hover:text-[#1c1916]">↗</span>
      </div>
    </div>
  );
}

function ServiceCard({
  tag, title, sub, items, priceFrom, priceUnit, cta, feat,
}: {
  tag: string;
  title: string;
  sub: string;
  items: string[];
  priceFrom: string;
  priceUnit: string;
  cta: "primary" | "ghost";
  feat?: boolean;
}) {
  const bgStyle = feat ? { background: "linear-gradient(180deg,#2c241d,#241e1a)" } : undefined;
  return (
    <div
      className="flex min-h-[480px] flex-col rounded-[6px] border border-line bg-panel p-9 px-8 transition-colors hover:border-accent"
      style={bgStyle}
    >
      <span className="mb-4 text-[10px] uppercase tracking-[.22em] text-accent">{tag}</span>
      <h3 className="m-0 mb-2 font-serif text-[28px] font-normal leading-[1.15]">{title}</h3>
      <div className="mb-6 text-[13px] text-ink-mute">{sub}</div>
      <ul className="vl-bullets m-0 mb-7 flex list-none flex-col gap-2.5 p-0 text-[13.5px] text-ink-dim">
        {items.map((it) => <li key={it}>{it}</li>)}
      </ul>
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-5">
        <div>
          <div className="text-[11px] uppercase tracking-[.08em] text-ink-mute">от</div>
          <div className="font-serif text-[30px] font-normal text-ink">
            {priceFrom}<em className="italic text-accent">{priceUnit}</em>
          </div>
        </div>
        <a href="#cta" className={cta === "primary" ? "btn-primary" : "btn-ghost"}>Заказать</a>
      </div>
    </div>
  );
}

function Who({ name, position, mtAuto }: { name: string; position: string; mtAuto?: boolean }) {
  return (
    <div className={`flex items-center gap-3.5 ${mtAuto ? "mt-auto" : "mt-6"}`}>
      <div
        className="h-[46px] w-[46px] rounded-full"
        style={{ background: "linear-gradient(135deg,#3a342f,#2a2622)" }}
      />
      <div>
        <div className="text-[14px]">{name}</div>
        <div className="mt-0.5 text-[11px] tracking-[.08em] text-ink-mute">{position}</div>
      </div>
    </div>
  );
}

function ContactRow({ icon, text }: { icon: "phone" | "mail" | "pin"; text: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="inline-grid h-[34px] w-[34px] flex-shrink-0 place-items-center rounded-full border border-line text-accent">
        {icon === "phone" && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )}
        {icon === "mail" && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )}
        {icon === "pin" && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )}
      </span>
      <span>{text}</span>
    </div>
  );
}

function FootCol({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h5 className="m-0 mb-4 text-[11px] font-normal uppercase tracking-[.22em] text-ink-mute">{title}</h5>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[13.5px] text-ink-dim">
        {items.map((it, i) => (
          <li key={i}>
            {it.length === 2 ? <a href={it[1]} className="hover:text-accent">{it[0]}</a> : it[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}
