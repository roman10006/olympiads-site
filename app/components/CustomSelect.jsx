"use client";

import React, { useState, useRef, useEffect } from "react";

export default function CustomSelect({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className="relative w-full">
      {/* Кнопка выбора */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 rounded-[20px] bg-purple-950/50 border text-lg text-left transition-all flex items-center justify-between ${
          isOpen
            ? "border-purple-400 ring-2 ring-purple-500/30"
            : "border-purple-500/30 hover:border-purple-400"
        }`}
      >
        <span className={value ? "text-white" : "text-purple-300/40"}>
          {value || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-purple-300 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-[20px] bg-purple-950/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-500/20 overflow-hidden z-50 animate-dropdown">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-5 py-3 text-left text-lg transition-all hover:bg-purple-500/20 ${
                value === option
                  ? "bg-purple-600/30 text-purple-200 font-semibold"
                  : "text-purple-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}