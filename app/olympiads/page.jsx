"use client";

import React, { useState, useMemo } from "react";
import ParticleBackground from "../components/ParticleBackground";
import PageTransition from "../components/PageTransition";
import FilterPanel from "../components/FilterPanel";
import OlympCard from "../components/OlympCard";
import Pagination from "../components/Pagination";
import UnlistedSection from "../components/UnlistedSection";
import Footer from "../components/Footer";

// ===== ДАННЫЕ ВСТРОЕНЫ ПРЯМО СЮДА =====
const olympiads = [
  { id: 1, name: "XIX Южно-Российская межрегиональная олимпиада школьников \"Архитектура и искусство\" по комплексу предметов (рисунок, живопись, композиция, черчение)", subjects: [{ name: "рисунок, живопись, композиция, черчение", level: 1 }], season: "2026/27", nextAction: "Расписание ожидается", nextDate: null, universities: 3, verified: "1 октября 2026", official: true },
  { id: 2, name: "Всероссийская Сеченовская олимпиада школьников", subjects: [{ name: "биология", level: 2 }, { name: "химия", level: 2 }], season: "2026/27", nextAction: "Отборочный этап · Химия", nextDate: "10 ноября 2026", universities: 21, verified: "1 октября 2026", official: true },
  { id: 3, name: "Всероссийская Толстовская олимпиада", subjects: [{ name: "история", level: 3 }, { name: "литература", level: 3 }, { name: "обществознание", level: 3 }, { name: "право", level: 3 }], season: "2026/27", nextAction: "Открытие регистрации", nextDate: "1 декабря 2026", universities: 20, verified: "1 октября 2026", official: true },
  { id: 4, name: "Всероссийская академическая олимпиада школьников имени В.И. Вернадского", subjects: [{ name: "гуманитарные и социальные науки", level: 1 }, { name: "экономика", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "8 ноября 2026", universities: 22, verified: "1 октября 2026", official: true },
  { id: 5, name: "Всероссийская междисциплинарная олимпиада школьников 8-11 классов \"Национальная технологическая олимпиада\"", subjects: [{ name: "автоматизация бизнес-процессов", level: 2 }, { name: "беспилотные авиационные системы", level: 3 }, { name: "большие данные и машинное обучение", level: 3 }, { name: "искусственный интеллект", level: 2 }, { name: "информационная безопасность", level: 3 }, { name: "квантовый инжиниринг", level: 3 }, { name: "робототехника", level: 3 }], season: "2026/27", nextAction: "Отборочный этап · Геномное редактирование", nextDate: "15 октября 2026", universities: 20, verified: "1 октября 2026", official: true },
  { id: 6, name: "Всероссийская олимпиада по агрогенетике \"Иннагрика\"", subjects: [{ name: "аграрная генетика", level: 1 }], season: "2026/27", nextAction: "Подготовка к Полуфиналу, онлайн-курс", nextDate: "20 октября 2026", universities: 14, verified: "1 октября 2026", official: true },
  { id: 7, name: "Всероссийская олимпиада по искусственному интеллекту", subjects: [{ name: "искусственный интеллект", level: 2 }], season: "2026/27", nextAction: "Заключительный этап (Москва)", nextDate: "16 ноября 2026", universities: 22, verified: "1 октября 2026", official: true },
  { id: 8, name: "Всероссийская олимпиада школьников \"Высшая проба\"", subjects: [{ name: "биология", level: 2 }, { name: "дизайн", level: 1 }, { name: "журналистика", level: 1 }, { name: "иностранный язык", level: 1 }, { name: "информатика", level: 1 }, { name: "история", level: 1 }, { name: "математика", level: 1 }, { name: "обществознание", level: 1 }, { name: "право", level: 1 }, { name: "русский язык", level: 1 }, { name: "физика", level: 1 }, { name: "химия", level: 1 }, { name: "экономика", level: 1 }], season: "2026/27", nextAction: "Отборочный этап, 2 тур", nextDate: "13 ноября 2026", universities: 31, verified: "1 октября 2026", official: true },
  { id: 9, name: "Всероссийская олимпиада школьников \"Миссия выполнима. Твое призвание - финансист!\"", subjects: [{ name: "иностранный язык", level: 3 }, { name: "история", level: 3 }, { name: "обществознание", level: 3 }, { name: "финансовая грамотность", level: 2 }, { name: "экономика", level: 2 }], season: "2026/27", nextAction: "Регистрация на отборочный этап · Экономика", nextDate: "30 ноября 2026", universities: 21, verified: "1 октября 2026", official: true },
  { id: 10, name: "Всероссийская олимпиада школьников \"Юридические высоты!\"", subjects: [{ name: "право", level: 2 }], season: "2026/27", nextAction: "Регистрация", nextDate: "1 сентября 2026", universities: 15, verified: "1 октября 2026", official: true },
  { id: 11, name: "Всесибирская открытая олимпиада школьников", subjects: [{ name: "биология", level: 2 }, { name: "информатика", level: 1 }, { name: "математика", level: 2 }, { name: "физика", level: 2 }, { name: "химия", level: 1 }], season: "2026/27", nextAction: "Регистрация на отборочный этап · Информатика", nextDate: "19 октября 2026", universities: 31, verified: "1 октября 2026", official: true },
  { id: 12, name: "Герценовская олимпиада школьников", subjects: [{ name: "география", level: 2 }, { name: "иностранный язык", level: 2 }, { name: "образование и педагогика", level: 3 }], season: "2026/27", nextAction: "Расписание ожидается", nextDate: null, universities: 21, verified: "1 октября 2026", official: true },
  { id: 13, name: "Инженерная олимпиада школьников", subjects: [{ name: "физика", level: 1 }], season: "2026/27", nextAction: "Расписание ожидается", nextDate: null, universities: 28, verified: "1 октября 2026", official: true },
  { id: 14, name: "Интернет-олимпиада школьников по физике", subjects: [{ name: "физика", level: 2 }], season: "2026/27", nextAction: "Дистанционный тур 1 · Физика", nextDate: "22 ноября 2026", universities: 24, verified: "1 октября 2026", official: true },
  { id: 15, name: "Кутафинская олимпиада школьников по праву", subjects: [{ name: "право", level: 1 }], season: "2026/27", nextAction: "Регистрация на отборочный этап", nextDate: "1 октября 2026", universities: 19, verified: "1 октября 2026", official: true },
  { id: 16, name: "Международная олимпиада Иннополиса", subjects: [{ name: "информатика", level: 2 }, { name: "информационная безопасность", level: 2 }, { name: "искусственный интеллект", level: 3 }, { name: "математика", level: 2 }, { name: "робототехника", level: 3 }], season: "2026/27", nextAction: "Отборочный этап, 1-й тур · Математика", nextDate: "2 ноября 2026", universities: 0, verified: "1 октября 2026", official: true },
  { id: 17, name: "Международная олимпиада по финансовой безопасности", subjects: [{ name: "финансовая безопасность", level: 1 }], season: "2026/27", nextAction: "Расписание ожидается", nextDate: null, universities: 0, verified: "1 октября 2026", official: true },
  { id: 18, name: "Международная олимпиада школьников \"Евразийская лингвистическая олимпиада\"", subjects: [{ name: "иностранный язык", level: 2 }], season: "2026/27", nextAction: "Регистрация на отборочный этап", nextDate: "16 ноября 2026", universities: 0, verified: "1 октября 2026", official: true },
  { id: 19, name: "Международная олимпиада школьников Уральского федерального университета \"Изумруд\"", subjects: [{ name: "информатика", level: 2 }, { name: "история", level: 3 }, { name: "математика", level: 3 }, { name: "обществознание", level: 3 }, { name: "русский язык", level: 3 }, { name: "химия", level: 3 }], season: "2026/27", nextAction: "Регистрация и отборочный этап", nextDate: "1 сентября 2026", universities: 0, verified: "1 октября 2026", official: true },
  { id: 20, name: "Межрегиональная олимпиада школьников \"Будущие исследователи - будущее науки\"", subjects: [{ name: "биология", level: 2 }, { name: "история", level: 2 }, { name: "математика", level: 3 }, { name: "русский язык", level: 3 }, { name: "физика", level: 3 }, { name: "химия", level: 2 }], season: "2026/27", nextAction: "Отборочный этап, очно · Математика", nextDate: "7 ноября 2026", universities: 27, verified: "1 октября 2026", official: true },
  { id: 21, name: "Московская олимпиада школьников", subjects: [{ name: "астрономия", level: 2 }, { name: "биология", level: 2 }, { name: "география", level: 2 }, { name: "информатика", level: 1 }, { name: "история", level: 1 }, { name: "математика", level: 1 }, { name: "обществознание", level: 1 }, { name: "право", level: 1 }, { name: "физика", level: 1 }, { name: "химия", level: 1 }, { name: "экономика", level: 1 }], season: "2026/27", nextAction: "Регистрация на отборочный этап", nextDate: "15 октября 2026", universities: 45, verified: "1 октября 2026", official: true },
  { id: 22, name: "Олимпиада школьников \"Ломоносов\"", subjects: [{ name: "биология", level: 1 }, { name: "география", level: 2 }, { name: "геология", level: 2 }, { name: "иностранный язык", level: 1 }, { name: "информатика", level: 1 }, { name: "история", level: 1 }, { name: "литература", level: 1 }, { name: "математика", level: 1 }, { name: "обществознание", level: 1 }, { name: "право", level: 1 }, { name: "психология", level: 2 }, { name: "русский язык", level: 1 }, { name: "физика", level: 1 }, { name: "философия", level: 2 }, { name: "химия", level: 1 }, { name: "экология", level: 2 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "1 октября 2026", universities: 38, verified: "1 октября 2026", official: true },
  { id: 23, name: "Олимпиада школьников \"Покори Воробьёвы горы!\"", subjects: [{ name: "география", level: 2 }, { name: "журналистика", level: 2 }, { name: "иностранный язык", level: 1 }, { name: "история", level: 1 }, { name: "литература", level: 1 }, { name: "математика", level: 1 }, { name: "обществознание", level: 1 }, { name: "физика", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "1 октября 2026", universities: 29, verified: "1 октября 2026", official: true },
  { id: 24, name: "Олимпиада школьников \"Физтех\"", subjects: [{ name: "биология", level: 2 }, { name: "инженерное дело", level: 2 }, { name: "информатика", level: 1 }, { name: "математика", level: 1 }, { name: "физика", level: 1 }, { name: "химия", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "15 ноября 2026", universities: 35, verified: "1 октября 2026", official: true },
  { id: 25, name: "Олимпиада школьников по программированию \"ТехноКубок\"", subjects: [{ name: "информатика", level: 1 }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "5 декабря 2026", universities: 18, verified: "1 октября 2026", official: true },
  { id: 26, name: "Отраслевая физико-математическая олимпиада школьников \"Росатом\"", subjects: [{ name: "информатика", level: 2 }, { name: "математика", level: 2 }, { name: "физика", level: 2 }], season: "2026/27", nextAction: "Регистрация откроется", nextDate: "10 декабря 2026", universities: 26, verified: "1 октября 2026", official: true },
  { id: 27, name: "Пироговская олимпиада для школьников по химии и биологии", subjects: [{ name: "биология", level: 2 }, { name: "химия", level: 2 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "20 октября 2026", universities: 12, verified: "1 октября 2026", official: true },
  { id: 28, name: "Санкт-Петербургская олимпиада школьников", subjects: [{ name: "математика", level: 1 }, { name: "физика", level: 1 }, { name: "химия", level: 1 }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "25 ноября 2026", universities: 16, verified: "1 октября 2026", official: true },
  { id: 29, name: "Турнир имени М.В. Ломоносова", subjects: [{ name: "астрономия", level: 2 }, { name: "биология", level: 2 }, { name: "иностранный язык", level: 2 }, { name: "история", level: 2 }, { name: "литература", level: 2 }, { name: "математика", level: 1 }, { name: "физика", level: 1 }, { name: "химия", level: 2 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "1 октября 2026", universities: 22, verified: "1 октября 2026", official: true },
  { id: 30, name: "Университетская олимпиада школьников \"Бельчонок\"", subjects: [{ name: "информатика", level: 2 }, { name: "математика", level: 2 }, { name: "физика", level: 2 }, { name: "химия", level: 2 }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "12 ноября 2026", universities: 8, verified: "1 октября 2026", official: true },
];

const ITEMS_PER_PAGE = 6;

export default function OlympiadsPage() {
  const [filters, setFilters] = useState({
    name: "",
    subject: "Все предметы",
    level: "Все уровни",
    classRange: "1-11",
    season: "2026/27",
    format: "Все",
    sort: "По названию",
    showOutsideList: false,
    registrationOpen: false,
    hasFutureEvents: false,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOlympiads = useMemo(() => {
    let result = olympiads.filter((o) => {
      if (filters.name && !o.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
      if (filters.subject !== "Все предметы" && !o.subjects.some((s) => s.name.toLowerCase().includes(filters.subject.toLowerCase()))) return false;
      if (filters.level !== "Все уровни" && !o.subjects.some((s) => s.level.toString() === filters.level)) return false;
      if (filters.season && o.season !== filters.season) return false;
      return true;
    });

    if (filters.sort === "По названию") {
      result.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    } else if (filters.sort === "По уровню профиля") {
      result.sort((a, b) => {
        const minA = Math.min(...a.subjects.map((s) => s.level));
        const minB = Math.min(...b.subjects.map((s) => s.level));
        return minA - minB;
      });
    }

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filteredOlympiads.length / ITEMS_PER_PAGE);
  const paginatedOlympiads = filteredOlympiads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = () => setCurrentPage(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animated-gradient min-h-screen w-full relative overflow-hidden">
      <div className="blob blob-1"></div><div className="blob blob-2"></div>
      <div className="blob blob-3"></div><div className="blob blob-4"></div>
      <div className="blob blob-5"></div><div className="blob blob-6"></div>
      <div className="blob blob-7"></div><div className="blob blob-8"></div>
      <div className="glow-dot" style={{ top: "10%", left: "15%", animationDelay: "0s" }}></div>
      <div className="glow-dot" style={{ top: "20%", left: "85%", animationDelay: "0.5s" }}></div>
      <div className="glow-dot" style={{ top: "40%", left: "10%", animationDelay: "1s" }}></div>
      <div className="glow-dot" style={{ top: "60%", left: "90%", animationDelay: "1.5s" }}></div>
      <div className="glow-dot" style={{ top: "80%", left: "20%", animationDelay: "2s" }}></div>

      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex justify-between items-center bg-purple-950/40 backdrop-blur-xl border-b border-purple-500/20">
        <a href="/" className="group relative px-8 py-4 rounded-[20px] bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 border border-purple-400/30 text-white font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-rotate-12 transition-transform">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Главная</span>
        </a>
        <button className="group relative px-8 py-4 rounded-[20px] bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 border border-purple-400/30 text-white font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <span>Календарь</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
        </button>
      </nav>

      <PageTransition direction="left">
        <div className="relative z-10 pt-32 pb-16 px-4 md:px-8 w-full">
          <div className="max-w-[1920px] mx-auto w-full">
            
            <div className="mb-10 px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Олимпиады школьников</h1>
              <p className="text-purple-200/70 text-xl max-w-3xl leading-relaxed">
                Перечень 2026/27: профили и уровни выбранного сезона. Прошлые годы доступны в фильтре «Сезон».
              </p>
            </div>

            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              onSearch={handleSearch}
              totalFound={filteredOlympiads.length}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4">
              {paginatedOlympiads.map((o) => (
                <OlympCard key={o.id} olympiad={o} />
              ))}
            </div>

            {paginatedOlympiads.length === 0 && (
              <div className="text-center py-24">
                <div className="text-7xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-3">Ничего не найдено</h3>
                <p className="text-purple-200/70 text-lg">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            <UnlistedSection />
            <Footer />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}