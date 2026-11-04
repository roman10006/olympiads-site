"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center gap-3 my-10" aria-label="Страницы каталога">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 rounded-[16px] font-bold text-lg transition-all duration-300 ${
            currentPage === page
              ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/40"
              : "bg-purple-900/20 text-purple-200 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/40"
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-12 h-12 rounded-[16px] bg-purple-900/20 text-purple-200 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/40 transition-all duration-300 flex items-center justify-center"
          aria-label="Следующая страница"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      )}
    </nav>
  );
}