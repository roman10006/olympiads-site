"use client";

import CustomSelect from "./CustomSelect";

export default function FilterPanel({ filters, setFilters, onSearch, totalFound }) {
  const subjects = ["Все предметы", "Физика", "Математика", "Информатика", "Химия", "Биология", "История", "Обществознание", "Право", "Русский язык", "Литература", "Иностранный язык", "География", "Экономика", "Журналистика", "Психология", "Философия", "Дизайн", "Искусство", "Астрономия", "Экология", "Медицина", "Робототехника", "Искусственный интеллект", "Информационная безопасность", "Финансовая грамотность", "Финансовая безопасность", "Аграрная генетика", "Автоматизация бизнес-процессов", "Гуманитарные и социальные науки", "Инженерное дело", "Геология", "География"];
  const levels = ["Все уровни", "1", "2", "3"];
  const formats = ["Все", "Отборочный", "Финал"];
  const sorts = ["По названию", "По ближайшей дате", "По уровню профиля"];
  const seasons = ["2026/27", "2025/26", "2024/25"];

  return (
    <div className="p-8 md:p-10 rounded-[32px] bg-purple-900/20 border border-purple-500/20 backdrop-blur-xl mb-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Название</label>
          <input
            type="text"
            placeholder="Например, Высшая проба"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Предмет</label>
          <CustomSelect options={subjects} value={filters.subject} onChange={(v) => setFilters({ ...filters, subject: v })} placeholder="Выберите предмет" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Уровень</label>
          <CustomSelect options={levels} value={filters.level} onChange={(v) => setFilters({ ...filters, level: v })} placeholder="Выберите уровень" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Класс</label>
          <input
            type="text"
            value={filters.classRange}
            onChange={(e) => setFilters({ ...filters, classRange: e.target.value })}
            placeholder="1–11"
            className="w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border border-purple-500/30 text-lg text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Сезон</label>
          <CustomSelect options={seasons} value={filters.season} onChange={(v) => setFilters({ ...filters, season: v })} placeholder="Выберите сезон" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Формат</label>
          <CustomSelect options={formats} value={filters.format} onChange={(v) => setFilters({ ...filters, format: v })} placeholder="Выберите формат" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-purple-300/80 uppercase tracking-wider mb-3">Сортировка</label>
          <CustomSelect options={sorts} value={filters.sort} onChange={(v) => setFilters({ ...filters, sort: v })} placeholder="Выберите сортировку" />
        </div>
        <div className="lg:col-span-2 flex flex-wrap items-center gap-6 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.showOutsideList}
              onChange={(e) => setFilters({ ...filters, showOutsideList: e.target.checked })}
              className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500"
            />
            <span className="text-base text-purple-200 group-hover:text-white transition-colors">Вне перечня</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.registrationOpen}
              onChange={(e) => setFilters({ ...filters, registrationOpen: e.target.checked })}
              className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500"
            />
            <span className="text-base text-purple-200 group-hover:text-white transition-colors">Регистрация открыта</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.hasFutureEvents}
              onChange={(e) => setFilters({ ...filters, hasFutureEvents: e.target.checked })}
              className="w-5 h-5 rounded-lg border-purple-500/50 bg-purple-950/50 accent-purple-500"
            />
            <span className="text-base text-purple-200 group-hover:text-white transition-colors">Будущие события</span>
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 px-5 py-3 rounded-[20px] bg-purple-900/30 border border-purple-500/30 backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
          </svg>
          <span className="text-purple-200 font-semibold text-lg">{totalFound} олимпиад</span>
        </div>
        <button
          onClick={onSearch}
          className="px-10 py-4 rounded-[20px] bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg font-bold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300"
        >
          Найти
        </button>
      </div>
    </div>
  );
}