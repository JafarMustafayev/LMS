import { Link } from "react-router-dom";

function NotificationsCard({ notifications, count }) {
  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 shadow-sm bg-white p-3  sm:p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Son bildirişlər
        </h2>

        <Link
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          to="/notifications"
        >
          Hamısına bax →
        </Link>
      </div>

      <ul className="space-y-3 sm:space-y-4">
        {notifications.slice(0, count).map((item) => (
          <li key={item.id} className="min-w-0 rounded-xl bg-slate-50 p-3">
            <p className="break-words text-sm text-slate-700">{item.title}</p>
            <p className="mt-1 text-xs text-slate-500">{item.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NotificationsCard;
