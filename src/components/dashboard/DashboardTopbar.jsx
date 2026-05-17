function DashboardTopbar() {
  return (
    <header className="flex flex-wrap items-center gap-3 rounded- border border-slate-200 bg-white px-4 py-3">
      <label className="flex h-10 flex-1 items-center rounded-xl border border-slate-200 px-3 lg:max-w-md">
        <input
          className="w-full bg-transparent text-sm text-slate-700 outline-none"
          placeholder="Axtarış..."
        />
        <span className="text-slate-400">⌕</span>
      </label>
      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500"
        >
          🔔
        </button>
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500"
        >
          ✉
        </button>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-2 py-1">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pravatar.cc/80?img=12"
            alt="Əli Məmmədov"
          />
          <div>
            <p className="text-xs font-semibold text-slate-800">Əli Məmmədov</p>
            <p className="text-[11px] text-slate-500">Tələbə</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardTopbar;
