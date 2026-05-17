import { Link } from "react-router-dom";

function NotificationsCard({ notifications, count }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Son bildirişlər</h2>
        <Link className="text-sm font-semibold text-blue-600" to="/notifications">Hamısına bax →</Link>
      </div>
      <ul className="space-y-4">
        {notifications.slice(0, count).map((item) => (
          <li key={item.text} className="rounded-xl bg-slate-50 p-3">
            <p className="text-sm text-slate-700">{item.text}</p>
            <p className="mt-1 text-xs text-slate-500">{item.when}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NotificationsCard;
