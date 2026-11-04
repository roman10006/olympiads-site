"use client";

import { unlistedOlympiads } from "../data/olympiads";

export default function UnlistedSection() {
  return (
    <section className="rounded-[28px] bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-xl p-8 md:p-10 my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
        Не входят в перечень РСОШ 2026/27
        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-yellow-500/30 text-yellow-300 text-sm font-bold">
          {unlistedOlympiads.length}
        </span>
      </h2>
      <p className="text-purple-200/70 text-base mb-6 max-w-4xl leading-relaxed">
        Этих олимпиад нет в утверждённом перечне олимпиад школьников на 2026/27 учебный год (приказ Минобрнауки России № 521 от 31.08.2026). Карточки оставлены для справки о прошлых сезонах.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {unlistedOlympiads.map((name, idx) => (
          <li key={idx} className="flex items-center justify-between gap-3 p-4 rounded-[16px] bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/50 transition-all">
            <span className="text-purple-200 text-sm font-medium leading-tight">{name}</span>
            <span className="flex-shrink-0 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-500/30">
              Не в перечне
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}