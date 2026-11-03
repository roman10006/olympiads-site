"use client";

import React, { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import ComingSoonModal from "./components/ComingSoonModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="animated-gradient min-h-screen w-full relative overflow-hidden">
      {/* ===== ФОНОВЫЕ ЭЛЕМЕНТЫ ===== */}
      {/* Фиолетовые пятна */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      
      {/* Розовые пятна */}
      <div className="blob blob-5"></div>
      <div className="blob blob-6"></div>
      <div className="blob blob-7"></div>
      <div className="blob blob-8"></div>

      <div className="glow-dot" style={{ top: "10%", left: "15%", animationDelay: "0s" }}></div>
      <div className="glow-dot" style={{ top: "20%", left: "85%", animationDelay: "0.5s" }}></div>
      <div className="glow-dot" style={{ top: "40%", left: "10%", animationDelay: "1s" }}></div>
      <div className="glow-dot" style={{ top: "60%", left: "90%", animationDelay: "1.5s" }}></div>
      <div className="glow-dot" style={{ top: "80%", left: "20%", animationDelay: "2s" }}></div>
      <div className="glow-dot" style={{ top: "15%", left: "50%", animationDelay: "2.5s" }}></div>
      <div className="glow-dot" style={{ top: "70%", left: "70%", animationDelay: "0.8s" }}></div>
      <div className="glow-dot" style={{ top: "30%", left: "30%", animationDelay: "1.3s" }}></div>
      <div className="glow-dot" style={{ top: "50%", left: "60%", animationDelay: "1.8s" }}></div>
      <div className="glow-dot" style={{ top: "90%", left: "45%", animationDelay: "0.3s" }}></div>

      <ParticleBackground />

      {/* ===== НАВИГАЦИОННАЯ ПАНЕЛЬ (КНОПКИ) ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-purple-950/40 backdrop-blur-xl border-b border-purple-500/20">
        {/* Левая кнопка */}
        <button 
          onClick={() => handleButtonClick("Раздел 'Все олимпиады' с расширенным поиском и фильтрами скоро будет доступен!")}
          className="group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 border border-purple-400/30 text-white font-bold text-base md:text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
          <span>Все олимпиады</span>
        </button>

        {/* Логотип по центру (для красоты) */}
        <div className="hidden md:block text-xl font-bold bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
          OlympTracker
        </div>

        {/* Правая кнопка */}
        <button 
          onClick={() => handleButtonClick("Интерактивный календарь с дедлайнами и напоминаниями находится в разработке!")}
          className="group relative px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600/80 to-purple-600/80 border border-purple-400/30 text-white font-bold text-base md:text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          <span>Календарь</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </button>
      </nav>

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        
        {/* HERO-СЕКЦИЯ - ЦЕНТР ЭКРАНА */}
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

      </div>

      {/* ===== МОДАЛЬНОЕ ОКНО ===== */}
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle} 
      />
    </div>
  );
}