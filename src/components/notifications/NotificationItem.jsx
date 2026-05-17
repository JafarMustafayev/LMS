import { notificationTypeMeta } from "../../data/notificationsData";

function NotificationItem({ item, onToggleRead }) {
  const meta = notificationTypeMeta[item.type] ?? notificationTypeMeta.system;

  return (
    <article className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center">
      <div className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-bold ${meta.iconClass}`}>{meta.icon}</div>
      <div>
        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
        <p className="text-sm text-slate-600">{item.message}</p>
      </div>
      <div className="flex items-center gap-3 md:flex-col md:items-end">
        <p className="text-xs text-slate-500">{item.time}</p>
        <button
          type="button"
          onClick={() => onToggleRead(item.id)}
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            item.read ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
          }`}
        >
          {item.read ? "Oxunub" : "Oxunmamış"}
        </button>
      </div>
    </article>
  );
}

export default NotificationItem;
