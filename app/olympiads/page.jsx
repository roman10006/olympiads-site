"use client";

import React, { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import CustomSelect from "../components/CustomSelect";
import PageTransition from "../components/PageTransition";

const olympiadsData = [
  { id: 1, name: "Физтех", subjects: [{ name: "Физика", level: 1 }, { name: "Математика", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "15 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 2, name: "Ломоносов", subjects: [{ name: "Математика", level: 1 }, { name: "Физика", level: 1 }, { name: "Информатика", level: 2 }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "30 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 3, name: "Высшая проба", subjects: [{ name: "Информатика", level: 1 }, { name: "Математика", level: 1 }, { name: "Физика", level: 1 }], season: "2026/27", nextAction: "Открыта регистрация", nextDate: "20 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 4, name: "Росатом", subjects: [{ name: "Физика", level: 2 }, { name: "Математика", level: 2 }], season: "2026/27", nextAction: "Регистрация откроется", nextDate: "10 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 5, name: "Покори Воробьёвы горы!", subjects: [{ name: "Математика", level: 1 }, { name: "Физика", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "25 ноября 2026", verified: "1 октября 2026", official: true },
  { id: 6, name: "Физик", subjects: [{ name: "Физика", level: 3 }], season: "2026/27", nextAction: "Открыта регистрация", nextDate: "1 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 7, name: "Технокубок", subjects: [{ name: "Информатика", level: 1 }], season: "2026/27", nextAction: "Отборочный этап", nextDate: "5 декабря 2026", verified: "1 октября 2026", official: true },
  { id: 8, name: "Московская олимпиада школьников", subjects: [{ name: "Математика", level: 1 }, { name: "Физика", level: 1 }, { name: "Информатика", level: 1 }], season: "2026/27", nextAction: "Регистрация участников", nextDate: "12 ноября 2026", verified: "1 октября 2026", official: true },
];

const subjectsList = ["Все предметы", "Физика", "Математика", "Информатика"];
const levelsList = ["Все уровни", "1", "2", "3"];
const formatsList = ["Все", "Очный", "Заочный", "Дистанционный"];
const sortList = ["По названию", "По дате", "По уровню"];
const seasonsList = ["2026/27", "2025/26", "2024/25"];
const classList = ["1-11", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const defaultFilters = {
  name: "", subject: "Все предметы", level: "Все уровни", classRange: "1-11",
  season: "2026/27", format: "Все", sort: "По названию",
  showOutsideList: false, registrationOpen: false, hasFutureEvents: false,
};

export default function OlympiadsPage() {
  const [filters, setFilters] = useState({ ...defaultFilters });

  const filteredOlympiads = olympiadsData.filter((o) => {
    if (filters.name && !o.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
    if (filters.subject !== "Все предметы" && !o.subjects.some((s) => s.name === filters.subject)) return false;
    if (filters.level !== "Все уровни" && !o.subjects.some((s) => s.level.toString() === filters.level)) return false;
    if (filters.season && o.season !== filters.season) return false;
    return true;
  });

  const resetFilters = () => setFilters({ ...defaultFilters });

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

      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 flex justify-between items-center" style={{ backgroundColor: '#2e1065', border: 'none' }}>
        <a href="/" className="px-8 py-4 rounded-[20px] text-white font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all" style={{ background: 'linear-gradient(to right, #9333ea, #d946ef)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Главная</span>
        </a>
        <button className="px-8 py-4 rounded-[20px] text-white font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all" style={{ background: 'linear-gradient(to right, #d946ef, #9333ea)' }}>
          <span>Календарь</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </button>
      </nav>

      <PageTransition direction="left">
        <div className="relative z-10 pt-32 pb-16 px-8 w-full">
          <div className="max-w-[1920px] mx-auto w-full">
            
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Олимпиады школьников</h1>
              <p className="text-purple-200 text-xl max-w-3xl">
                Перечень 2026/27: профили и уровни выбранного сезона. Прошлые годы доступны в фильтре «Сезон».
              </p>
            </div>

            {/* ФИЛЬТРЫ - НЕПРОЗРАЧНЫЕ */}
            <div className="p-8 md:p-10 rounded-[32px] mb-10 w-full" style={{ backgroundColor: '#3b0764', border: '2px solid #7c3aed' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Название</label>
                  <input type="text" placeholder="Например, Высшая проба" value={filters.name} onChange={(e) => setFilters({ ...filters, name: e.target.value })} className="w-full px-5 py-4 rounded-[20px] text-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-300 transition-all" style={{ backgroundColor: '#4c1d95', border: '2px solid #6d28d9' }} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Предмет</label>
                  <CustomSelect options={subjectsList} value={filters.subject} onChange={(v) => setFilters({ ...filters, subject: v })} placeholder="Выберите предмет" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Уровень</label>
                  <CustomSelect options={levelsList} value={filters.level} onChange={(v) => setFilters({ ...filters, level: v })} placeholder="Выберите уровень" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Класс</label>
                  <CustomSelect options={classList} value={filters.classRange} onChange={(v) => setFilters({ ...filters, classRange: v })} placeholder="Выберите класс" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Сезон</label>
                  <CustomSelect options={seasonsList} value={filters.season} onChange={(v) => setFilters({ ...filters, season: v })} placeholder="Выберите сезон" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Формат</label>
                  <CustomSelect options={formatsList} value={filters.format} onChange={(v) => setFilters({ ...filters, format: v })} placeholder="Выберите формат" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-3">Сортировка</label>
                  <CustomSelect options={sortList} value={filters.sort} onChange={(v) => setFilters({ ...filters, sort: v })} placeholder="Выберите сортировку" />
                </div>
                <div className="lg:col-span-2 flex flex-wrap items-center gap-6 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={filters.showOutsideList} onChange={(e) => setFilters({ ...filters, showOutsideList: e.target.checked })} className="w-5 h-5 rounded-lg accent-purple-500" />
                    <span className="text-base text-purple-200">Вне перечня</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={filters.registrationOpen} onChange={(e) => setFilters({ ...filters, registrationOpen: e.target.checked })} className="w-5 h-5 rounded-lg accent-purple-500" />
                    <span className="text-base text-purple-200">Регистрация открыта</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={filters.hasFutureEvents} onChange={(e) => setFilters({ ...filters, hasFutureEvents: e.target.checked })} className="w-5 h-5 rounded-lg accent-purple-500" />
                    <span className="text-base text-purple-200">Будущие события</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button onClick={resetFilters} className="px-8 py-4 rounded-[20px] text-white text-lg font-semibold flex items-center gap-2 hover:scale-105 transition-all" style={{ backgroundColor: '#6d28d9', border: '2px solid #8b5cf6' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                  Сбросить фильтры
                </button>
                <button className="px-10 py-4 rounded-[20px] text-white text-lg font-bold hover:scale-105 transition-all" style={{ backgroundColor: '#a855f7' }}>
                  Найти олимпиады
                </button>
              </div>
            </div>

            {/* КАРТОЧКИ - НЕПРОЗРАЧНЫЕ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {filteredOlympiads.map((o) => (
                <div key={o.id} className="rounded-[28px] overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col" style={{ backgroundColor: '#3b0764', border: '2px solid #7c3aed' }}>
                  <div className="p-6 flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7c3aed' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{o.name}</h3>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1.5 rounded-full text-sm font-semibold text-purple-100" style={{ backgroundColor: '#581c87', border: '1px solid #7c3aed' }}>
                        {o.official ? "Официальный" : "Неофициальный"} · {o.season}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {o.subjects.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ backgroundColor: '#4c1d95', border: '1px solid #6d28d9' }}>
                          <span className="text-sm text-purple-100">{s.name}</span>
                          <span className="px-2 py-0.5 rounded-lg text-xs font-bold text-fuchsia-100" style={{ backgroundColor: '#7e22ce', border: '1px dashed #c084fc' }}>
                            Уровень {s.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5" style={{ backgroundColor: '#4c1d95', borderTop: '2px solid #7c3aed' }}>
                    <div className="text-xs text-purple-200 mb-1">Ближайшее действие</div>
                    <div className="text-base font-semibold text-white mb-1">{o.nextAction}</div>
                    <div className="text-base text-purple-100 font-medium">{o.nextDate}</div>
                    <div className="mt-3 pt-3 flex justify-between text-sm text-purple-200" style={{ borderTop: '1px solid #6d28d9' }}>
                      <span>Данные о льготах</span>
                      <span>Проверено {o.verified}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredOlympiads.length === 0 && (
              <div className="text-center py-24">
                <div className="text-7xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-white mb-3">Ничего не найдено</h3>
                <p className="text-purple-200 text-lg">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </div>
        </div>
      </PageTransition>
    </div>
  );
}