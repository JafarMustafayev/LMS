import { Link } from "react-router-dom";

function CalendarCard({ weekDays }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Təqvim</h2>
        <Link className="text-sm font-semibold text-blue-600" to="calendar">
          Hamısına bax →
        </Link>
      </div>
      <p className="mb-3 text-center text-base font-bold text-slate-800">
        18 - 24 May 2026
      </p>
      <div className="grid grid-cols-7 gap-2 text-center">
        {weekDays.map((day) => (
          <span
            key={day}
            className={`grid h-9 place-items-center rounded-lg text-xs font-semibold ${
              day === "20"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CalendarCard;
