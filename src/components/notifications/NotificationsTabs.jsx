function NotificationsTabs({ tabs, activeTab, counts, onChange, markAllRead }) {
  return (
    <div className="flex flex-wrap justify-between rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          const count = tab.key === "all" ? counts.all : counts.unread;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${isActive ? "bg-white/20" : "bg-white"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="rounded-xl border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        onClick={markAllRead}
      >
        Hamısını oxundu et
      </button>
    </div>
  );
}

export default NotificationsTabs;
