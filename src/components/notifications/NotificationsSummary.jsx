function NotificationsSummary({ total, unread, read, systemCount }) {
  const unreadPercent = (unread / total) * 100;
  const readPercent = (read / total) * 100;
  const systemPercent = (systemCount / total) * 100;

  const circleStyle = {
    background: `conic-gradient(
      #3b82f6 0% ${unreadPercent}%,
      #34d399 ${unreadPercent}% ${unreadPercent + readPercent}%,
      #94a3b8 ${unreadPercent + readPercent}% 100%
    )`,
  };

  return (
    <section className="rounded-2xl border border-slate-200 shadow-sm bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Bildiriş xülasəsi</h2>

      <div className="mt-4 flex items-center gap-4">
        {/* Dynamic Circle */}
        <div
          style={circleStyle}
          className="relative grid h-32 w-32 place-items-center rounded-full"
        >
          {/* Inner white circle */}
          <div className="grid h-24 w-24 place-items-center rounded-full bg-white">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-slate-900">{total}</p>
              <p className="text-xs text-slate-500">Ümumi</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            Oxunmamış: <b>{unread}</b>
          </li>

          <li className="flex items-center gap-2 text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Oxunmuş: <b>{read}</b>
          </li>

          <li className="flex items-center gap-2 text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            Sistem: <b>{systemCount}</b>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NotificationsSummary;
