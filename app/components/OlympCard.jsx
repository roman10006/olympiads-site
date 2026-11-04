"use client";

export default function OlympCard({ olympiad }) {
  const levelColors = {
    1: "from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/40",
    2: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/40",
    3: "from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/40",
  };

  return (
    <article className="rounded-[28px] bg-purple-900/20 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Шапка карточки */}
      <div className="p-8 flex-1">
        <div className="flex items-start gap-5 mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-3xl">
            {olympiad.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white leading-tight mb-2">
              {olympiad.name}
            </h3>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {olympiad.official ? "Официальный" : "Неофициальный"} · {olympiad.season}
            </span>
          </div>
        </div>

        {/* Предметы и уровни */}
        <div className="flex flex-wrap gap-2 mb-4">
          {olympiad.subjects.map((s, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-purple-950/40 px-3 py-1.5 rounded-xl border border-purple-500/20">
              <span className="text-sm text-purple-200">{s.name}</span>
              <span className={`px-2 py-0.5 rounded-md text-xs font-bold bg-gradient-to-r ${levelColors[s.level]} border`}>
                Уровень {s.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Нижняя часть карточки */}
      <div className="border-t border-purple-500/20 p-6 bg-purple-950/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-purple-300/60 mb-1">Ближайшее действие</div>
            <div className="text-base font-semibold text-white mb-1">{olympiad.nextAction}</div>
            {olympiad.nextDate && (
              <div className="text-sm text-purple-300 font-medium">{olympiad.nextDate}</div>
            )}
          </div>
          <div>
            <div className="text-xs text-purple-300/60 mb-1">Вузов с данными о льготах</div>
            <div className="text-2xl font-bold text-purple-300">{olympiad.universities}</div>
          </div>
          <div>
            <div className="text-xs text-purple-300/60 mb-1">Проверено</div>
            <div className="text-base text-purple-200">{olympiad.verified}</div>
          </div>
        </div>
      </div>
    </article>
  );
}