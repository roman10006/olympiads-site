"use client";

import React, { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import React, { useState, useEffect } from "react";

// Данные об олимпиадах
const olympiads = [
  {
    id: 1,
    name: "Физтех",
    subject: "Физика",
    level: "I",
    registrationStart: "01.09.2026",
    registrationEnd: "15.11.2026",
    finalDate: "15.02.2027",
    status: "Регистрация открыта",
    link: "https://phystech.edu",
  },
  {
    id: 2,
    name: "Ломоносов",
    subject: "Математика",
    level: "I",
    registrationStart: "01.10.2026",
    registrationEnd: "30.11.2026",
    finalDate: "20.02.2027",
    status: "Регистрация открыта",
    link: "https://lomonosov.msu.ru",
  },
  {
    id: 3,
    name: "Высшая проба",
    subject: "Информатика",
    level: "I",
    registrationStart: "15.09.2026",
    registrationEnd: "20.11.2026",
    finalDate: "25.02.2027",
    status: "Регистрация открыта",
    link: "https://olymp.hse.ru",
  },
  {
    id: 4,
    name: "Росатом",
    subject: "Физика",
    level: "II",
    registrationStart: "01.11.2026",
    registrationEnd: "10.12.2026",
    finalDate: "05.03.2027",
    status: "Скоро",
    link: "https://olymp.mephi.ru",
  },
  {
    id: 5,
    name: "Покори Воробьёвы горы!",
    subject: "Математика",
    level: "I",
    registrationStart: "01.10.2026",
    registrationEnd: "25.11.2026",
    finalDate: "18.02.2027",
    status: "Регистрация открыта",
    link: "https://pvg.msu.ru",
  },
  {
    id: 6,
    name: "Физик",
    subject: "Физика",
    level: "III",
    registrationStart: "15.10.2026",
    registrationEnd: "01.12.2026",
    finalDate: "10.03.2027",
    status: "Регистрация открыта",
    link: "https://fizikus.ru",
  },
];

const subjects = ["Все", "Физика", "Математика", "Информатика"];

// Иконки (SVG)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Все");

// Генерация точек только на клиенте (useEffect выполняется после монтирования)
const [dots, setDots] = useState([]);

useEffect(() => {
  setDots(
    Array.from({ length: 12 }, () => ({
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 3}s`,
    }))
  );
}, []);

  const handleComingSoon = () => setShowModal(true);
  const filtered =
    selectedSubject === "Все"
      ? olympiads
      : olympiads.filter((o) => o.subject === selectedSubject);

  // Стили для кнопок навигации
  const navBtnClass =
    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95";
  const navBtnTextClass = isDark
    ? "text-purple-200 hover:text-white bg-purple-900/30"
    : "text-purple-700 hover:text-purple-900 bg-purple-100/50";

  return (
    <div
      className={`${
        isDark ? "dark" : "light"
      } min-h-screen w-full relative overflow-hidden transition-colors duration-500`}
    >
      <ParticleBackground isDark={isDark} />

      {/* Фоновые пятна */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Светящиеся точки — позиции из state */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="glow-dot"
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
          }}
        ></div>
      ))}

      {/* ===== НАВИГАЦИОННАЯ ПАНЕЛЬ ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 backdrop-blur-xl border-b transition-colors duration-500 ${
          isDark
            ? "bg-black/20 border-purple-500/20"
            : "bg-white/40 border-purple-200"
        }`}
      >
        {/* Левая кнопка */}
        <button onClick={handleComingSoon} className={`${navBtnClass} ${navBtnTextClass}`}>
          <ListIcon />
          <span className="hidden sm:inline">Все олимпиады</span>
        </button>

        {/* Правая группа кнопок */}
        <div className="flex items-center gap-3">
          <button onClick={handleComingSoon} className={`${navBtnClass} ${navBtnTextClass}`}>
            <CalendarIcon />
            <span className="hidden sm:inline">Календарь</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 active:scale-95 ${
              isDark
                ? "text-yellow-300 bg-purple-900/30 hover:bg-purple-800/50"
                : "text-purple-600 bg-purple-100/50 hover:bg-purple-200/50"
            }`}
            title={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* ===== МОДАЛЬНОЕ ОКНО "СКОРО" ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`text-5xl mb-4 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              🚧
            </div>
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDark ? "text-white" : "text-purple-900"
              }`}
            >
              Скоро всё будет!
            </h3>
            <p className={`mb-6 ${isDark ? "text-purple-200/80" : "text-purple-700"}`}>
              Эта функция находится в активной разработке. Мы добавим её в
              ближайшем обновлении.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 active:scale-95"
            >
              Понятно, жду!
            </button>
          </div>
        </div>
      )}

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      <div className="relative z-10 pt-24">
        <header className="w-full px-6 md:px-12 py-12 flex flex-col items-center text-center">
          <div
            className={`inline-block px-4 py-1 mb-6 rounded-full border backdrop-blur-sm ${
              isDark
                ? "border-purple-500/30 bg-purple-500/10"
                : "border-purple-300 bg-purple-100/50"
            }`}
          >
            <span
              className={
                isDark
                  ? "text-purple-300 text-sm"
                  : "text-purple-700 text-sm font-medium"
              }
            >
              🚀 Твой путь в МФТИ
            </span>
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent ${
              isDark ? "glow-text" : ""
            }`}
          >
            OlympTracker
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl ${
              isDark ? "text-purple-200/80" : "text-purple-700/80"
            }`}
          >
            Все олимпиады в одном месте. Отслеживай сроки, уровни РСОШ и
            готовься к поступлению эффективно.
          </p>
        </header>

        {/* СТАТИСТИКА */}
        <section className="w-full px-6 md:px-12 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Всего олимпиад",
                value: olympiads.length,
                icon: "🏆",
              },
              {
                label: "Уровень I",
                value: olympiads.filter((o) => o.level === "I").length,
                icon: "⭐",
              },
              {
                label: "Открыта регистрация",
                value: olympiads.filter(
                  (o) => o.status === "Регистрация открыта"
                ).length,
                icon: "✅",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-purple-900/20 border-purple-500/20 hover:border-purple-400/50"
                    : "bg-white/60 border-purple-200 hover:border-purple-400 shadow-sm"
                }`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className={`text-4xl font-bold ${
                    isDark ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm mt-1 ${
                    isDark ? "text-purple-200/70" : "text-purple-600/70"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ФИЛЬТРЫ */}
        <section className="w-full px-6 md:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedSubject === subject
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/50"
                    : isDark
                    ? "bg-purple-900/30 text-purple-200 border border-purple-500/30 hover:border-purple-400"
                    : "bg-purple-100 text-purple-700 border border-purple-200 hover:border-purple-400"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </section>

        {/* КАРТОЧКИ ОЛИМПИАД */}
        <section className="w-full px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((o, i) => (
              <div
                key={o.id}
                className={`animate-fade-in p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-gradient-to-br from-purple-900/30 to-purple-950/50 border-purple-500/20 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20"
                    : "bg-white/70 border-purple-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200/50"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      isDark
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                        : "bg-purple-100 text-purple-700 border-purple-200"
                    }`}
                  >
                    {o.subject}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 border border-yellow-500/30">
                    Уровень {o.level}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-purple-900"
                  }`}
                >
                  {o.name}
                </h3>

                <div
                  className={`space-y-2 text-sm mb-4 ${
                    isDark ? "text-purple-200/80" : "text-purple-700/80"
                  }`}
                >
                  <div className="flex justify-between">
                    <span>📝 Регистрация до:</span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-purple-100" : "text-purple-900"
                      }`}
                    >
                      {o.registrationEnd}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎯 Финал:</span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-purple-100" : "text-purple-900"
                      }`}
                    >
                      {o.finalDate}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-between pt-4 border-t ${
                    isDark ? "border-purple-500/20" : "border-purple-200"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      o.status === "Регистрация открыта"
                        ? "bg-green-500/20 text-green-600 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30"
                    }`}
                  >
                    {o.status}
                  </span>
                  <a
                    href={o.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition-colors ${
                      isDark
                        ? "text-purple-300 hover:text-white"
                        : "text-purple-600 hover:text-purple-900"
                    }`}
                  >
                    Перейти →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer
          className={`w-full px-6 md:px-12 py-8 text-center text-sm border-t ${
            isDark
              ? "text-purple-300/50 border-purple-500/10"
              : "text-purple-600/50 border-purple-200"
          }`}
        >
          <p>
            OlympTracker © 2026 · Создано для подготовки к поступлению в МФТИ
          </p>
        </footer>
      </div>
    </div>
  );
}