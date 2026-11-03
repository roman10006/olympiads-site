"use client";

import React, { useState } from "react";
import Link from "next/link";

// Расширенные данные об олимпиадах
const olympiadsData = [
  {
    id: 1,
    name: "XIX Южно-Российская межрегиональная олимпиада школьников \"Архитектура и искусство\" по комплексу предметов (рисунок, живопись, композиция, черчение)",
    subjects: [{ name: "рисунок, живопись, композиция, черчение", level: "I" }],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Расписание ожидается",
    nextActionDate: null,
    verified: "1 октября 2026",
  },
  {
    id: 2,
    name: "Всероссийская Сеченовская олимпиада школьников",
    subjects: [
      { name: "биология", level: "II" },
      { name: "химия", level: "II" },
    ],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Отборочный этап · Химия",
    nextActionDate: "10 ноября 2026",
    verified: "1 октября 2026",
  },
  {
    id: 3,
    name: "Всероссийская Толстовская олимпиада",
    subjects: [
      { name: "история", level: "III" },
      { name: "литература", level: "III" },
      { name: "обществознание", level: "III" },
      { name: "право", level: "III" },
    ],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Открытие регистрации",
    nextActionDate: "1 декабря 2026",
    verified: "1 октября 2026",
  },
  {
    id: 4,
    name: "Всероссийская академическая олимпиада школьников имени В.И. Вернадского",
    subjects: [
      { name: "гуманитарные и социальные науки", level: "I" },
      { name: "экономика", level: "I" },
    ],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Регистрация участников",
    nextActionDate: "8 ноября 2026",
    verified: "1 октября 2026",
  },
  {
    id: 5,
    name: "Физтех",
    subjects: [
      { name: "физика", level: "I" },
      { name: "математика", level: "I" },
    ],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Регистрация открыта",
    nextActionDate: "15 ноября 2026",
    verified: "1 октября 2026",
  },
  {
    id: 6,
    name: "Ломоносов",
    subjects: [
      { name: "математика", level: "I" },
      { name: "физика", level: "I" },
      { name: "химия", level: "I" },
    ],
    status: "Официальный",
    season: "2026/27",
    nextAction: "Регистрация открыта",
    nextActionDate: "30 ноября 2026",
    verified: "1 октября 2026",
  },
];

export default function AllOlympiadsPage() {
  const [filters, setFilters] = useState({
    name: "",
    subject: "Все предметы",
    level: "Все уровни",
    class: "1-11",
    season: "2026/27",
    format: "Все",
    sort: "По названию",
    showOutsideList: false,
    registrationOpen: false,
    hasFutureEvents: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ===== НАВИГАЦИЯ ===== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">Поступай правильно</div>
              <div className="text-xs text-gray-500">спецпроект Академии</div>
            </div>
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">BETA 2.0</span>
          </Link>

          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-2">
            <Link href="/" className="px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 transition-all font-medium">
              Вузы
            </Link>
            <Link href="/all-olympiads" className="px-4 py-2 rounded-full bg-white text-gray-900 shadow-sm font-medium">
              Олимпиады
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 transition-all font-medium">
              Календарь
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 transition-all font-medium">
              TG-бот
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="text-blue-600 hover:underline">Главная</Link>
          <span>/</span>
          <span>Олимпиады</span>
        </div>

        {/* Заголовок */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Олимпиады школьников</h1>
            <p className="text-gray-600 max-w-2xl">
              Перечень 2026/27: профили и уровни выбранного сезона. Прошлые годы доступны в фильтре «Сезон».
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              </div>
              <span className="font-semibold text-gray-900">{olympiadsData.length} олимпиад</span>
            </div>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              Календарь
            </button>
          </div>
        </div>

        {/* ===== БЛОК ФИЛЬТРОВ ===== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {/* Название */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Название</label>
              <input
                type="text"
                placeholder="Например, Высшая проба"
                value={filters.name}
                onChange={(e) => handleFilterChange("name", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            {/* Предмет */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Предмет</label>
              <select
                value={filters.subject}
                onChange={(e) => handleFilterChange("subject", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option>Все предметы</option>
                <option>Математика</option>
                <option>Физика</option>
                <option>Химия</option>
                <option>Биология</option>
                <option>Информатика</option>
                <option>История</option>
                <option>Литература</option>
              </select>
            </div>

            {/* Уровень */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Уровень</label>
              <select
                value={filters.level}
                onChange={(e) => handleFilterChange("level", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option>Все уровни</option>
                <option>Уровень I</option>
                <option>Уровень II</option>
                <option>Уровень III</option>
              </select>
            </div>

            {/* Класс */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Класс</label>
              <input
                type="text"
                value={filters.class}
                onChange={(e) => handleFilterChange("class", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            {/* Сезон */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Сезон</label>
              <select
                value={filters.season}
                onChange={(e) => handleFilterChange("season", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option>2026/27</option>
                <option>2025/26</option>
                <option>2024/25</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {/* Формат */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Формат</label>
              <select
                value={filters.format}
                onChange={(e) => handleFilterChange("format", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option>Все</option>
                <option>Очный</option>
                <option>Заочный</option>
                <option>Смешанный</option>
              </select>
            </div>

            {/* Сортировка */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Сортировка</label>
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange("sort", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
              >
                <option>По названию</option>
                <option>По дате</option>
                <option>По уровню</option>
              </select>
            </div>

            {/* Чекбоксы */}
            <div className="md:col-span-3 flex flex-wrap gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.showOutsideList}
                  onChange={(e) => handleFilterChange("showOutsideList", e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Показать также олимпиады вне перечня</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.registrationOpen}
                  onChange={(e) => handleFilterChange("registrationOpen", e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Регистрация открыта</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.hasFutureEvents}
                  onChange={(e) => handleFilterChange("hasFutureEvents", e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Есть будущие события</span>
              </label>
            </div>

            {/* Кнопка Найти */}
            <div className="flex items-end">
              <button className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                Найти
              </button>
            </div>
          </div>
        </div>

        {/* ===== КАРТОЧКИ ОЛИМПИАД ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {olympiadsData.map((olymp) => (
            <div
              key={olymp.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Заголовок карточки */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{olymp.name}</h3>
                </div>

                {/* Бейдж статуса */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-700 mb-4">
                  {olymp.status} · {olymp.season}
                </div>

                {/* Предметы и уровни */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {olymp.subjects.map((subj, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">{subj.name}</span>
                      <span className="px-2 py-0.5 rounded-md border border-dashed border-blue-400 text-xs font-semibold text-blue-600 bg-blue-50">
                        Уровень {subj.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ближайшее действие */}
              <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                <div className="text-xs text-gray-500 mb-1">Ближайшее действие</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{olymp.nextAction}</div>
                {olymp.nextActionDate && (
                  <div className="text-sm font-semibold text-blue-600">{olymp.nextActionDate}</div>
                )}
              </div>

              {/* Футер карточки */}
              <div className="border-t border-gray-100 px-6 py-3 flex justify-between items-center text-xs text-gray-500">
                <div>Вузов с данными о льготах за разные годы</div>
                <div className="font-semibold text-gray-700">Проверено {olymp.verified}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}