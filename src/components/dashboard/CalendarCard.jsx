import { Link } from "react-router-dom";
import { monthNames } from "../../data/calendarDatas";

function getWeekDates(baseDate) {
  const current = new Date(baseDate);
  const day = current.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(current);
  monday.setDate(current.getDate() + diffToMonday);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

function CalendarCard() {
  const today = new Date();
  const weekDates = getWeekDates(today);

  const firstDate = weekDates[0];
  const lastDate = weekDates[6];
  const rangeLabel = `${firstDate.getDate()} - ${lastDate.getDate()} ${monthNames[lastDate.getMonth()]} ${lastDate.getFullYear()}`;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Təqvim</h2>
        <Link className="text-sm font-semibold text-blue-600" to="calendar">
          Hamısına bax →
        </Link>
      </div>

      <p className="mb-3 text-center text-base font-bold text-slate-800">
        {rangeLabel}
      </p>

      <div className="grid grid-cols-7 gap-2 text-center">
        {weekDates.map((date) => {
          const isToday = date.toDateString() === today.toDateString();

          return (
            <span
              key={date.toISOString()}
              className={`grid h-9 place-items-center rounded-lg text-xs font-semibold ${
                isToday
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {date.getDate()}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarCard;
