"use client";

import { useState } from "react";

// Данные об олимпиадах (потом можно вынести в отдельный файл или БД)
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

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState("Все");

  const filtered =
    selectedSubject === "Все"
      ? olympiads
      : olympiads.filter((o) => o.subject === selectedSubject);

  return (
    <div className="animated-gradient min-h-screen w-full">
      {/* ===== HERO-СЕКЦИЯ ===== */}
      <header className="w-full px-6 md:px-12 py-16 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
          <span className="text-purple-300 text-sm">🚀 Твой путь в МФТИ</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold glow-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent mb-6">
          OlympTracker
        </h1>
        <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl">
          Все олимпиады в одном месте. Отслеживай сроки, уровни РСОШ и готовься к поступлению эффективно.
        </p>
      </header>

      {/* ===== СТАТИСТИКА ===== */}
      <section className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Всего олимпиад", value: olympiads.length, icon: "🏆" },
            { label: "Уровень I", value: olympiads.filter((o) => o.level === "I").length, icon: "⭐" },
            { label: "Открыта регистрация", value: olympiads.filter((o) => o.status === "Регистрация открыта").length, icon: "✅" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-purple-300">{stat.value}</div>
              <div className="text-purple-200/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ФИЛЬТРЫ ===== */}
      <section className="w-full px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedSubject === subject
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-purple-900/30 text-purple-200 border border-purple-500/30 hover:border-purple-400"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </section>

      {/* ===== КАРТОЧКИ ОЛИМПИАД ===== */}
      <section className="w-full px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((o, i) => (
            <div
              key={o.id}
              className="animate-fade-in p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-950/50 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {o.subject}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30">
                  Уровень {o.level}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{o.name}</h3>

              <div className="space-y-2 text-sm text-purple-200/80 mb-4">
                <div className="flex justify-between">
                  <span>📝 Регистрация:</span>
                  <span className="text-purple-100">{o.registrationEnd}</span>
                </div>
                <div className="flex justify-between">
                  <span>🎯 Финал:</span>
                  <span className="text-purple-100">{o.finalDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    o.status === "Регистрация открыта"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  }`}
                >
                  {o.status}
                </span>
                <a
                  href={o.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Перейти →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ФУТЕР ===== */}
      <footer className="w-full px-6 md:px-12 py-8 text-center text-purple-300/50 text-sm border-t border-purple-500/10">
        <p>OlympTracker © 2026 · Создано для подготовки к поступлению в МФТИ</p>
      </footer>
    </div>
  );
}