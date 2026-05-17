import { Link } from "react-router-dom";

function NextLessonCard({ nextLesson }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Növbəti dərs</h2>
        <Link className="text-sm font-semibold text-blue-600" to="/nextLesson">
          Hamısına bax →
        </Link>
      </div>
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="text-xl font-bold leading-tight text-slate-900">
          {nextLesson.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{nextLesson.topic}</p>
        <p className="mt-2 text-xs font-medium text-slate-600">
          {nextLesson.time}
        </p>
        <span className="mt-3 inline-flex rounded-lg bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {nextLesson.mode}
        </span>
      </div>
    </section>
  );
}

export default NextLessonCard;
