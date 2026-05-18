import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit3,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";

import {
  initialEvents,
  weekDays,
  monthNames,
  eventTypes,
} from "../data/calendarDatas";

function pad(value) {
  return String(value).padStart(2, "0");
}

function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function fromDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getMonday(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function formatEventTime(event) {
  if (!event.startTime) return "Vaxt qeyd olunmayıb";
  return event.endTime
    ? `${event.startTime} - ${event.endTime}`
    : event.startTime;
}

function getMonthGridDays(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const start = getMonday(firstDay);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
}

const emptyForm = {
  title: "",
  subject: "",
  date: "",
  startTime: "",
  endTime: "",
  type: "lesson",
};

function EventModal({ open, mode, form, setForm, onClose, onSave }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {mode === "edit" ? "Hadisəni redaktə et" : "Yeni hadisə"}
            </h3>
            <p className="text-sm text-slate-500">
              Təqvimə dərs, quiz, imtahan və deadline əlavə edin.
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 hover:bg-slate-50"
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Başlıq
            </span>
            <input
              value={form.title}
              onChange={(event) =>
                setForm({ ...form, title: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Məsələn: Quiz"
            />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Fənn / qeyd
            </span>
            <input
              value={form.subject}
              onChange={(event) =>
                setForm({ ...form, subject: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Məsələn: Data strukturları"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Tarix
            </span>
            <input
              type="date"
              value={form.date}
              onChange={(event) =>
                setForm({ ...form, date: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Növ
            </span>
            <select
              value={form.type}
              onChange={(event) =>
                setForm({ ...form, type: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            >
              {Object.entries(eventTypes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Başlama saatı
            </span>
            <input
              type="time"
              value={form.startTime}
              onChange={(event) =>
                setForm({ ...form, startTime: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Bitmə saatı
            </span>
            <input
              type="time"
              value={form.endTime}
              onChange={(event) =>
                setForm({ ...form, endTime: event.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            type="button"
          >
            Ləğv et
          </button>
          <button
            onClick={onSave}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            type="button"
          >
            Yadda saxla
          </button>
        </div>
      </div>
    </div>
  );
}

function CalendarPage() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("edumonitor-calendar-events");
    return saved ? JSON.parse(saved) : initialEvents;
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem("edumonitor-calendar-events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    document.title = "Təqvim";
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchText = `${event.title} ${event.subject}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesType = selectedType === "all" || event.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [events, search, selectedType]);

  const eventsByDate = useMemo(() => {
    return filteredEvents.reduce((acc, event) => {
      acc[event.date] = acc[event.date] || [];
      acc[event.date].push(event);
      acc[event.date].sort((a, b) => a.startTime.localeCompare(b.startTime));
      return acc;
    }, {});
  }, [filteredEvents]);

  const monthGridDays = useMemo(
    () => getMonthGridDays(currentDate),
    [currentDate],
  );
  const weekStart = useMemo(() => getMonday(currentDate), [currentDate]);
  const weekGridDays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + index);
        return date;
      }),
    [weekStart],
  );

  const pageTitle = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  function openCreateModal(dateKey = toDateKey(currentDate)) {
    setModalMode("create");
    setEditingId(null);
    setForm({ ...emptyForm, date: dateKey });
    setModalOpen(true);
  }

  function openEditModal(event) {
    setModalMode("edit");
    setEditingId(event.id);
    setForm({ ...event });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  }

  function saveEvent() {
    if (!form.title.trim() || !form.date) {
      alert("Başlıq və tarix mütləq doldurulmalıdır.");
      return;
    }

    if (modalMode === "edit") {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId ? { ...form, id: editingId } : event,
        ),
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
        },
      ]);
    }

    closeModal();
  }

  function deleteEvent(id) {
    const confirmed = window.confirm("Bu hadisə silinsin?");
    if (confirmed) {
      setEvents((prev) => prev.filter((event) => event.id !== id));
    }
  }

  function goToday() {
    setCurrentDate(new Date());
  }

  function goPrevious() {
    const next = new Date(currentDate);
    if (view === "month") next.setMonth(next.getMonth() - 1);
    if (view === "week") next.setDate(next.getDate() - 7);
    if (view === "day") next.setDate(next.getDate() - 1);
    setCurrentDate(next);
  }

  function goNext() {
    const next = new Date(currentDate);
    if (view === "month") next.setMonth(next.getMonth() + 1);
    if (view === "week") next.setDate(next.getDate() + 7);
    if (view === "day") next.setDate(next.getDate() + 1);
    setCurrentDate(next);
  }

  function EventCard({ event, compact = false }) {
    const style = eventTypes[event.type] || eventTypes.other;

    return (
      <div
        className={`group min-w-0 overflow-hidden rounded-xl border p-2 ${style.badge}`}
      >
        <div className="flex min-w-0 items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold sm:text-xs">
              {event.title}
            </p>

            {!compact && event.subject && (
              <p className="mt-0.5 truncate text-[11px] opacity-80">
                {event.subject}
              </p>
            )}

            <p className="mt-1 flex min-w-0 items-center gap-1 truncate text-[10px] opacity-80 sm:text-[11px]">
              <Clock size={11} className="shrink-0" />
              <span className="truncate">{formatEventTime(event)}</span>
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-1 group-hover:flex">
            <button onClick={() => openEditModal(event)} type="button">
              <Edit3 size={13} />
            </button>
            <button onClick={() => deleteEvent(event.id)} type="button">
              <Trash2 size={13} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const shortWeekDays = ["B.e", "Ç.a", "Ç", "C.a", "C", "Ş", "B"];

  function MonthView() {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-7 border-b border-slate-200">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className="border-r border-slate-200 p-1.5 text-center text-[10px] font-bold text-slate-700 last:border-r-0 sm:p-3 sm:text-xs lg:text-sm"
            >
              <span className="sm:hidden">{shortWeekDays[index]}</span>
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {monthGridDays.map((date, index) => {
            const dateKey = toDateKey(date);
            const dayEvents = eventsByDate[dateKey] || [];
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();
            const isToday = dateKey === toDateKey(new Date());
            const isSunday = date.getDay() === 0;

            return (
              <button
                key={dateKey + index}
                onClick={() => {
                  setCurrentDate(date);
                  setView("day");
                }}
                className="min-h-22 min-w-0 border-b border-r border-slate-200 p-1 text-left transition hover:bg-slate-50 last:border-r-0  sm:p-2"
                type="button"
              >
                <div
                  className={`mx-auto mb-1 grid h-6 w-6 place-items-center rounded-full text-xs font-bold sm:mx-0 sm:h-7 sm:w-7 sm:text-sm ${
                    isToday
                      ? "bg-blue-600 text-white"
                      : isSunday
                        ? "text-red-500"
                        : isCurrentMonth
                          ? "text-slate-800"
                          : "text-slate-300"
                  }`}
                >
                  {date.getDate()}
                </div>

                {/* Mobile: yalnız event sayı */}
                <div className="sm:hidden">
                  {dayEvents.length > 0 && (
                    <p className="mx-auto w-fit rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-600">
                      {dayEvents.length}
                    </p>
                  )}
                </div>

                {/* Tablet/Desktop: event kartları */}
                <div className="hidden space-y-1.5 sm:block">
                  {dayEvents.slice(0, 1).map((event) => (
                    <EventCard key={event.id} event={event} compact />
                  ))}

                  {dayEvents.length > 1 && (
                    <p className="truncate text-[11px] font-semibold text-slate-400">
                      +{dayEvents.length - 1} hadisə
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function WeekView() {
    return (
      <div className="grid gap-3 md:grid-cols-7">
        {weekGridDays.map((date) => {
          const dateKey = toDateKey(date);
          const dayEvents = eventsByDate[dateKey] || [];
          return (
            <div
              key={dateKey}
              className="min-h-105 rounded-2xl border border-slate-200 p-3"
            >
              <button
                onClick={() => {
                  setCurrentDate(date);
                  setView("day");
                }}
                className="mb-3 w-full rounded-xl bg-slate-50 p-3 text-left hover:bg-slate-100"
                type="button"
              >
                <p className="text-xs font-semibold text-slate-500">
                  {weekDays[(date.getDay() + 6) % 7]}
                </p>
                <p className="text-2xl font-black text-slate-900">
                  {date.getDate()}
                </p>
              </button>
              <div className="space-y-2">
                {dayEvents.length ? (
                  dayEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <p className="rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-400">
                    Hadisə yoxdur
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function DayView() {
    const dateKey = toDateKey(currentDate);
    const dayEvents = eventsByDate[dateKey] || [];

    return (
      <div className="rounded-2xl border border-slate-200 p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">
              {weekDays[(currentDate.getDay() + 6) % 7]}
            </p>
            <h3 className="text-2xl font-black text-slate-900">
              {currentDate.getDate()} {monthNames[currentDate.getMonth()]}{" "}
              {currentDate.getFullYear()}
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {dayEvents.length ? (
            dayEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-slate-400">
              Bu gün üçün hadisə yoxdur.
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden space-y-4">
      <div className="w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={goToday}
              className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-50 sm:text-sm"
              type="button"
            >
              Bugün
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={goPrevious}
                className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 hover:bg-slate-50 sm:h-10 sm:w-10"
                type="button"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={goNext}
                className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 hover:bg-slate-50 sm:h-10 sm:w-10"
                type="button"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <h2 className="flex min-w-0 items-center gap-2 text-lg font-black text-slate-900 sm:text-2xl">
              <CalendarDays size={20} className="shrink-0 text-blue-600" />
              <span className="truncate">{pageTitle}</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-xl bg-slate-100 p-1">
              {[
                ["month", "Ay"],
                ["week", "Həftə"],
                ["day", "Gün"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setView(key)}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    view === key
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => openCreateModal()}
              className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 sm:px-4 sm:text-sm"
              type="button"
            >
              <Plus size={16} />
              Yeni hadisə
            </button>
          </div>
        </div>

        {view === "month" && <MonthView />}
        {view === "week" && <WeekView />}
        {view === "day" && <DayView />}

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-600 sm:text-sm">
          {Object.entries(eventTypes).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${value.dot}`} />
              {value.label}
            </div>
          ))}
        </div>
      </div>

      <EventModal
        open={modalOpen}
        mode={modalMode}
        form={form}
        setForm={setForm}
        onClose={closeModal}
        onSave={saveEvent}
      />
    </div>
  );
}

export default CalendarPage;
