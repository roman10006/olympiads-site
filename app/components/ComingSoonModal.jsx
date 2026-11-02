"use client";

export default function ComingSoonModal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Затемненный фон с размытием */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Само окно */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-purple-900/80 to-purple-950/90 border border-purple-400/30 shadow-2xl shadow-purple-500/30 backdrop-blur-xl animate-fade-in">
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-purple-300 hover:text-white hover:bg-purple-500/30 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Иконка и текст */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">Скоро всё будет! 🚀</h3>
          <p className="text-purple-200/80 mb-8 leading-relaxed">
            {title || "Этот раздел находится в активной разработке. Мы добавим эту функцию в ближайшее время."}
          </p>
          
          <button 
            onClick={onClose}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-[1.02] transition-all duration-300"
          >
            Понятно, жду!
          </button>
        </div>
      </div>
    </div>
  );
}