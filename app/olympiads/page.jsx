"use client";

import React, { useState, useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";

const olympiadsData = [
  { id: 1, name: "Физтех", subjects: [{ name: "Физика", level: "1" }, { name: "Математика", level: "1" }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "15 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 2, name: "Ломоносов", subjects: [{ name: "Математика", level: "1" }, { name: "Физика", level: "1" }, { name: "Информатика", level: "2" }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "30 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 3, name: "Высшая проба", subjects: [{ name: "Информатика", level: "1" }, { name: "Математика", level: "1" }, { name: "Физика", level: "1" }], season: "2026/27", nextAction: "Открыта регистрация", nextDate: "20 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 4, name: "Росатом", subjects: [{ name: "Физика", level: "2" }, { name: "Математика", level: "2" }], season: "2026/27", nextAction: "Регистрация откроется", nextDate: "10 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 5, name: "Покори Воробьёвы горы!", subjects: [{ name: "Математика", level: "1" }, { name: "Физика", level: "1" }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "25 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 6, name: "Физик", subjects: [{ name: "Физика", level: "3" }], season: "2026/27", nextAction: "Открыта регистрация", nextDate: "1 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 7, name: "Технокубок", subjects: [{ name: "Информатика", level: "1" }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "5 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 8, name: "Московская олимпиада школьников", subjects: [{ name: "Математика", level: "1" }, { name: "Физика", level: "1" }, { name: "Информатика", level: "1" }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "12 ноября 2026", verified: "1 октября 2026", official: true },
];

const subjectsList = ["Все предметы", "Физика", "Математика", "Информатика"];
const levelsList = ["Все уровни", "1", "2", "3"];
const formatsList = ["Все", "Очный", "Заочный", "Дистанционный"];
const sortList = ["По названию", "По дате", "По уровню"];
const seasonsList = ["2026/27", "2025/26", "2024/25"];

export default function OlympiadsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState({
    name: "", subject: "Все предметы", level: "Все уровни", classRange: "1-11",
    season: "2026/27", format: "Все", sort: "По названию",
    showOutsideList: false, registrationOpen: false, hasFutureEvents: false,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredOlympiads = olympiadsData.filter((o) => {
    if (filters.name && !o.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
    if (filters.subject !== "Все предметы" && !o.subjects.some((s) => s.name === filters.subject)) return false;
    if (filters.level !== "Все уровни" && !o.subjects.some((s) => s.level === filters.level)) return false;
    if (filters.season && o.season !== filters.season) return false;
    return true;
  });

  return (
    <div className={`animated-gradient min-h-screen w-full relative overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
        <a href="/" className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 border border-purple-400/30 text-white font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-rotate-12 transition-transform"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Главная</span>
        </a>
        <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 border border-purple-400/30 text-white font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <span>Календарь</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </button>
      </nav>

      <div className="relative z-10 pt-32 pb-16 px-8 md:px-16 w-full">
        <div className="max-w-[1920px] mx-auto w-full">
          
          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Олимпиады школьников</h1>
            <p className="text-purple-200/70 text-xl max-w-3xl leading-relaxed">
              Перечень 2026/27: профили и уровни выбранного сезона. Прошлые годы доступны в фильтре «Сезон».
            </p>
          </div>

          {/* ШИРОКАЯ ПАНЕЛЬ ФИЛЬТРОВ */}
          <div className="p-8 md:p-10 rounded-[32px] bg-purple-900/20 border border-purple-500/20 backdrop-blur-xl mb-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Название</label>
                <input type="text" placeholder="Например, Высшая проба" value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Предмет</label>
                <select value={filters.subject} onChange={(e) => setFilters({ ...filters, subject: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all appearance-none cursor-pointer">
                  {subjectsList.map((s) => <option key={s} value={s} className="bg-purple-950 text-lg">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Уровень</label>
                <select value={filters.level} onChange={(e) => setFilters({ ...filters, level: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all appearance-none cursor-pointer">
                  {levelsList.map((l) => <option key={l} value={l} className="bg-purple-950 text-lg">{l}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Класс</label>
                <input type="text" value={filters.classRange} onChange={(e) => setFilters({ ...filters, classRange: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Сезон</label>
                <select value={filters.season} onChange={(e) => setFilters({ ...filters, season: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all appearance-none cursor-pointer">
                  {seasonsList.map((s) => <option key={s} value={s} className="bg-purple-950 text-lg">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Формат</label>
                <select value={filters.format} onChange={(e) => setFilters({ ...filters, format: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all appearance-none cursor-pointer">
                  {formatsList.map((f) => <option key={f} value={f} className="bg-purple-950 text-lg">{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Сортировка</label>
                <select value={filters.sort} onChange={(e) => setFilters({ ...filters, sort: e.target.value })} className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all appearance-none cursor-pointer">
                  {sortList.map((s) => <option key={s} value={s} className="bg-purple-950 text-lg">{s}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={filters.showOutsideList} onChange={(e) => setFilters({ ...filters, showOutsideList: e.target.checked })} className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500" />
                <span className="text-base text-purple-200 group-hover:text-white transition-colors">Вне перечня</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={filters.registrationOpen} onChange={(e) => setFilters({ ...filters, registrationOpen: e.target.checked })} className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500" />
                <span className="text-base text-purple-200 group-hover:text-white transition-colors">Регистрация открыта</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={filters.hasFutureEvents} onChange={(e) => setFilters({ ...filters, hasFutureEvents: e.target.checked })} className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500" />
                <span className="text-base text-purple-200 group-hover:text-white transition-colors">Будущие события</span>
              </label>
            </div>

            <div className="flex justify-end">
              <button className="px-10 py-4 rounded-[20px] bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg font-bold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300">
                Найти олимпиады
              </button>
            </div>
          </div>

          {/* ОЧЕНЬ ШИРОКИЕ КАРТОЧКИ (2 колонки) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {filteredOlympiads.map((o) => (
              <div key={o.id} className="rounded-[28px] bg-purple-900/20 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="p-8 flex-1">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{o.name}</h3>
                  </div>

                  <div className="mb-5">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {o.official ? "Официальный" : "Неофициальный"} · {o.season}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {o.subjects.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-purple-950/40 px-3 py-1.5 rounded-xl border border-purple-500/20">
                        <span className="text-sm text-purple-200">{s.name}</span>
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-fuchsia-500/20 text-fuchsia-300 border border-dashed border-fuchsia-400/50">
                          Ур. {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-purple-500/20 p-6 bg-purple-950/40">
                  <div className="text-sm text-purple-300/60 mb-1.5">Ближайшее действие</div>
                  <div className="text-base font-semibold text-white mb-1">{o.nextAction}</div>
                  <div className="text-base text-purple-300 font-medium">{o.nextDate}</div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-500/10 flex justify-between text-sm text-purple-300/50">
                    <span>Данные о льготах</span>
                    <span className="text-purple-200">Проверено {o.verified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOlympiads.length === 0 && (
            <div className="text-center py-24">
              <div className="text-7xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-white mb-3">Ничего не найдено</h3>
              <p className="text-purple-200/70 text-lg">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}