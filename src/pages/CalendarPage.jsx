import { calendarEvents } from "../data/datas";

function CalendarPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Təqvim</h1>
      <div className="rounded-xl bg-white p-4 shadow">
        <ul className="space-y-2">
          {calendarEvents.map((event) => (
            <li key={event.id} className="rounded-lg bg-slate-50 p-3">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-slate-500">{event.date} - {event.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarPage;
