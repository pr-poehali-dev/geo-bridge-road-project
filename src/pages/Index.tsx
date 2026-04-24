import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const GridBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a4fa0" strokeWidth="0.5" />
      </pattern>
      <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect width="200" height="200" fill="url(#smallGrid)" />
        <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#1a4fa0" strokeWidth="1.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const CoordinateCrosshair = ({ x, y, label }: { x: string; y: string; label: string }) => (
  <div className="absolute" style={{ left: x, top: y }}>
    <div className="relative">
      <div className="w-3 h-3 border border-[#f97316] rounded-full absolute -translate-x-1/2 -translate-y-1/2 bg-[#f97316]/20" />
      <div className="w-[1px] h-6 bg-[#f97316]/40 absolute left-0 -translate-x-1/2 -translate-y-6" />
      <div className="h-[1px] w-6 bg-[#f97316]/40 absolute top-0 -translate-y-1/2 -translate-x-6" />
      <span className="absolute text-[9px] font-mono text-[#f97316]/60 whitespace-nowrap ml-2 mt-1">{label}</span>
    </div>
  </div>
);

const LogoMark = ({ size = 52 }: { size?: number }) => {
  return (
  <svg width={size} height={size} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Буква Г — вертикаль + горизонталь, образуют форму пилона и пролёта */}
    {/* Вертикаль (пилон/стойка) */}
    <rect x="8" y="8" width="7" height="36" fill="#1a4fa0" />
    {/* Горизонталь верхняя (перекладина Г) */}
    <rect x="8" y="8" width="28" height="7" fill="#1a4fa0" />

    {/* Арка-пролёт — абстрактная дуга от конца перекладины вниз */}
    <path d="M36 15 Q44 15 44 36" stroke="#1a4fa0" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Дорога — горизонтальная линия у основания */}
    <line x1="4" y1="44" x2="48" y2="44" stroke="#1a4fa0" strokeWidth="3.5" strokeLinecap="round" />

    {/* Геодезическая точка — акцент оранжевым в углу Г */}
    <circle cx="36" cy="15" r="4" fill="#f97316" />
    {/* Маленький крест вокруг точки — отсылка к геодезии */}
    <line x1="36" y1="10" x2="36" y2="20" stroke="#f97316" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="31" y1="15" x2="41" y2="15" stroke="#f97316" strokeWidth="1" strokeOpacity="0.4" />
  </svg>
  );
};

const services = [
  {
    icon: "MapPin",
    title: "Геодезические изыскания",
    desc: "Топографическая съёмка, разбивочные работы, мониторинг деформаций",
    tag: "ГЕОДЕЗИЯ",
  },
  {
    icon: "Layers",
    title: "Проектирование",
    desc: "Разработка проектной документации мостов, дорог и инженерных сооружений",
    tag: "ПРОЕКТ",
  },
  {
    icon: "Building2",
    title: "Строительный контроль",
    desc: "Технический надзор, исполнительная документация, экспертиза",
    tag: "КОНТРОЛЬ",
  },
  {
    icon: "Compass",
    title: "Кадастровые работы",
    desc: "Межевание земельных участков, постановка на кадастровый учёт",
    tag: "КАДАСТР",
  },
];

const stats = [
  { value: "18+", label: "лет на рынке" },
  { value: "340+", label: "объектов сдано" },
  { value: "12", label: "регионов России" },
  { value: "99%", label: "точность измерений" },
];

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#0d1f3c] font-['IBM_Plex_Sans',sans-serif] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="font-['Oswald',sans-serif] font-semibold text-[#0d1f3c] text-lg leading-tight tracking-wide">
                ГЕОСТРОЙПРОЕКТ
              </div>
              <div className="text-[10px] text-[#f97316] tracking-[0.2em] font-medium uppercase">
                Геодезия · Строительство
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a5568]">
            <a href="#services" className="hover:text-[#1a4fa0] transition-colors">Услуги</a>
            <a href="#about" className="hover:text-[#1a4fa0] transition-colors">О компании</a>
            <a href="#projects" className="hover:text-[#1a4fa0] transition-colors">Проекты</a>
            <a href="#contact" className="bg-[#f97316] text-white px-5 py-2 text-xs tracking-widest uppercase font-semibold hover:bg-[#ea6c0a] transition-colors">
              Связаться
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0d1f3c]">
        <GridBackground />

        {/* Coordinate markers */}
        <CoordinateCrosshair x="15%" y="25%" label="N 55°45′21″" />
        <CoordinateCrosshair x="75%" y="60%" label="E 37°37′04″" />
        <CoordinateCrosshair x="55%" y="20%" label="H 142.38m" />

        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div
            className="transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            <div className="inline-flex items-center gap-2 border border-[#f97316]/40 px-4 py-1.5 mb-8 text-[#f97316] text-xs tracking-[0.25em] uppercase font-semibold">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
              Геодезические изыскания и проектирование
            </div>

            <h1 className="font-['Oswald',sans-serif] font-bold text-white leading-[0.95] mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
              ТОЧНОСТЬ<br />
              <span className="text-[#f97316]">В КАЖДОЙ</span><br />
              КООРДИНАТЕ
            </h1>

            <p className="text-[#8fa8c8] text-lg max-w-xl mb-12 leading-relaxed font-light">
              Геодезические изыскания, проектирование мостов и дорог, строительный контроль — с 2006 года.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f97316] text-white px-10 py-4 font-['Oswald',sans-serif] tracking-widest text-sm uppercase hover:bg-[#ea6c0a] transition-all duration-200 hover:scale-105">
                Получить расчёт
              </button>
              <button className="border border-white/20 text-white px-10 py-4 font-['Oswald',sans-serif] tracking-widest text-sm uppercase hover:border-white/50 transition-all duration-200">
                Наши проекты
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="py-6 px-4 border-r border-white/10 last:border-r-0 text-center">
                <div className="font-['Oswald',sans-serif] text-3xl font-bold text-[#f97316]">{s.value}</div>
                <div className="text-[#8fa8c8] text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[#f97316] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Что мы делаем</div>
            <h2 className="font-['Oswald',sans-serif] font-bold text-[#0d1f3c] text-5xl leading-tight">
              УСЛУГИ
            </h2>
          </div>
          <div className="hidden md:block w-24 h-[2px] bg-[#f97316] mb-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#e2e8f0]">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 group hover:bg-[#0d1f3c] transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[#e2e8f0] group-hover:border-[#f97316]/30 flex items-center justify-center transition-colors">
                  <Icon name={s.icon} fallback="CircleAlert" size={22} className="text-[#1a4fa0] group-hover:text-[#f97316] transition-colors" />
                </div>
                <span className="text-[10px] tracking-[0.2em] text-[#a0aec0] group-hover:text-[#4a6080] font-mono transition-colors">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-['Oswald',sans-serif] font-semibold text-xl text-[#0d1f3c] group-hover:text-white mb-3 transition-colors">
                {s.title}
              </h3>
              <p className="text-[#718096] group-hover:text-[#8fa8c8] text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#f97316] text-xs tracking-[0.3em] uppercase font-semibold mb-3">О компании</div>
            <h2 className="font-['Oswald',sans-serif] font-bold text-[#0d1f3c] text-5xl leading-tight mb-8">
              ГЕОДЕЗИЯ —<br />
              <span className="text-[#1a4fa0]">ЭТО ТОЧНОСТЬ</span>
            </h2>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              «Геостройпроект» — команда сертифицированных геодезистов и проектировщиков с опытом работы на крупных инфраструктурных объектах России.
            </p>
            <p className="text-[#4a5568] leading-relaxed mb-10">
              Мы применяем современные геодезические приборы Leica и Trimble, работаем с BIM-технологиями и обеспечиваем точность измерений до 1 мм.
            </p>
            <div className="flex flex-wrap gap-3">
              {["СРО ИГ", "ISO 9001", "Геоидентика", "Росреестр"].map((cert) => (
                <span key={cert} className="border border-[#e2e8f0] text-[#4a5568] px-4 py-2 text-xs tracking-widest uppercase font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="bg-[#0d1f3c] aspect-square relative overflow-hidden">
              <GridBackground />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Concentric circles */}
                  {[80, 60, 40, 20].map((r) => (
                    <div
                      key={r}
                      className="absolute border border-[#f97316]/20 rounded-full"
                      style={{
                        width: r * 2.5,
                        height: r * 2.5,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                  {/* Cross lines */}
                  <div className="w-[200px] h-[1px] bg-[#f97316]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="h-[200px] w-[1px] bg-[#f97316]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  {/* Center dot */}
                  <div className="w-4 h-4 bg-[#f97316] rounded-full relative z-10" />
                  <div className="absolute -top-24 -left-24 font-mono text-[10px] text-[#f97316]/50">
                    N 55°45′21.4″<br />E 37°37′04.2″
                  </div>
                  <div className="absolute bottom-[-28px] right-[-28px] font-['Oswald',sans-serif] text-[#1a4fa0]/40 text-2xl font-bold">
                    ГСП
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#f97316]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0d1f3c] py-24 relative overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="text-[#f97316] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Начать сотрудничество</div>
          <h2 className="font-['Oswald',sans-serif] font-bold text-white text-5xl leading-tight mb-6">
            ГОТОВЫ К РАБОТЕ<br />
            <span className="text-[#f97316]">НА ВАШЕМ ОБЪЕКТЕ</span>
          </h2>
          <p className="text-[#8fa8c8] mb-12 text-lg leading-relaxed">
            Оставьте заявку — мы свяжемся в течение 2 часов и подготовим коммерческое предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Ваш телефон или email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-6 py-4 text-sm focus:outline-none focus:border-[#f97316] transition-colors"
            />
            <button className="bg-[#f97316] text-white px-10 py-4 font-['Oswald',sans-serif] tracking-widest text-sm uppercase whitespace-nowrap hover:bg-[#ea6c0a] transition-colors">
              Отправить
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080f1e] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="font-['Oswald',sans-serif] font-semibold text-white text-sm tracking-wide">ГЕОСТРОЙПРОЕКТ</div>
              <div className="text-[#4a6080] text-[10px] tracking-widest">© 2006–2026</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#4a6080] text-xs">
            <span>+7 (495) 000-00-00</span>
            <span>info@geostroy.ru</span>
            <span>Москва, ул. Примерная, 1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}