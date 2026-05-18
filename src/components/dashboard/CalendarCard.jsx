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

  const rangeLabel = `${firstDate.getDate()} - ${lastDate.getDate()} ${
    monthNames[lastDate.getMonth()]
  } ${lastDate.getFullYear()}`;

  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 shadow-sm bg-white p-3  sm:p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Təqvim</h2>

        <Link
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          to="/calendar"
        >
          Hamısına bax →
        </Link>
      </div>

      <p className="mb-3 text-center text-sm font-bold text-slate-800 sm:text-base">
        {rangeLabel}
      </p>

      <div className="grid min-w-0 grid-cols-7 gap-1 text-center sm:gap-2">
        {weekDates.map((date) => {
          const isToday = date.toDateString() === today.toDateString();

          return (
            <span
              key={date.toISOString()}
              className={`grid h-8 min-w-0 place-items-center rounded-lg text-xs font-semibold sm:h-9 ${
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
