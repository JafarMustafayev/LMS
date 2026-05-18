function StatsGrid({ statCards }) {
  return (
    <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {statCards.map((card) => (
        <article
          key={card.title}
          className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs ${card.tone}`}
          >
            {card.icon}
          </span>

          <p className="mt-3 truncate text-sm font-semibold text-slate-800 sm:text-base">
            {card.title}
          </p>

          <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {card.value}
          </p>

          <p className="mt-1 text-xs text-slate-500">{card.note}</p>
        </article>
      ))}
    </div>
  );
}

export default StatsGrid;