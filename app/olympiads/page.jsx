"use client";

import React, { useState, useMemo } from "react";
import ParticleBackground from "../components/ParticleBackground";
import PageTransition from "../components/PageTransition";
import FilterPanel from "../components/FilterPanel";
import OlympCard from "../components/OlympCard";
import Pagination from "../components/Pagination";
import UnlistedSection from "../components/UnlistedSection";
import Footer from "../components/Footer";
import { olympiads } from "../data/olympiads";

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

    // Сортировка
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

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animated-gradient min-h-screen w-full relative overflow-hidden">
      {/* Фоновые элементы */}
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

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <PageTransition direction="left">
        <div className="relative z-10 pt-32 pb-16 px-4 md:px-8 w-full">
          <div className="max-w-[1920px] mx-auto w-full">
            
            {/* Заголовок */}
            <div className="mb-10 px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Олимпиады школьников</h1>
              <p className="text-purple-200/70 text-xl max-w-3xl leading-relaxed">
                Перечень 2026/27: профили и уровни выбранного сезона. Прошлые годы доступны в фильтре «Сезон».
              </p>
            </div>

            {/* Фильтры */}
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              onSearch={handleSearch}
              totalFound={filteredOlympiads.length}
            />

            {/* Карточки олимпиад */}
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

            {/* Пагинация */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            {/* Секция "Не в перечне" */}
            <UnlistedSection />

            {/* Футер */}
            <Footer />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}