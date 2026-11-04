"use client";

export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-[32px] bg-purple-950/60 border-t border-purple-500/20 backdrop-blur-xl">
      <div className="max-w-[1920px] mx-auto px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Бренд */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 border border-purple-400/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white">OlympTracker</div>
                <div className="text-sm text-purple-300/70">Сервис для подготовки к поступлению</div>
              </div>
            </div>
            <p className="text-purple-200/60 text-sm leading-relaxed">
              Все олимпиады в одном месте. Отслеживай сроки, уровни РСОШ и готовься к поступлению в МФТИ эффективно.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Разделы</h3>
            <nav className="flex flex-col gap-3">
              <a href="/" className="text-purple-200/70 hover:text-white transition-colors">Главная</a>
              <a href="/olympiads" className="text-purple-200/70 hover:text-white transition-colors">Олимпиады</a>
              <a href="#" className="text-purple-200/70 hover:text-white transition-colors">Календарь</a>
              <a href="#" className="text-purple-200/70 hover:text-white transition-colors">О проекте</a>
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Связаться</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-purple-200/70 hover:text-white transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                Telegram
              </a>
              <a href="#" className="text-purple-200/70 hover:text-white transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/>
                </svg>
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-purple-300/50 text-sm">
            © 2026 OlympTracker · Создано для подготовки к поступлению в МФТИ
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-2 rounded-[16px] bg-purple-900/30 border border-purple-500/30 text-purple-200 hover:border-purple-400 hover:text-white transition-all flex items-center gap-2"
          >
            Наверх <b>↑</b>
          </button>
        </div>
      </div>
    </footer>
  );
}