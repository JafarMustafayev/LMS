function StatsGrid({ statCards }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {statCards.map((card) => (
        <article
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <span
            className={`grid h-9 w-9 place-items-center rounded-full text-xs ${card.tone}`}
          >
            {card.icon}
          </span>
          <p className="mt-3 text-base font-semibold text-slate-800">
            {card.title}
          </p>
          <p className="text-3xl font-extrabold text-slate-900">{card.value}</p>
          <p className="text-xs text-slate-500">{card.note}</p>
        </article>
      ))}
    </div>
  );
}

export default StatsGrid;
