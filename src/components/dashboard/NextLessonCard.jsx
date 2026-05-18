function NextLessonCard({ nextLesson }) {
  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 shadow-sm bg-white p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Növbəti dərs
        </h2>
      </div>

      <div className="min-w-0 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="break-words text-lg font-bold leading-tight text-slate-900 sm:text-xl">
          {nextLesson.title}
        </h3>

        <p className="mt-1 break-words text-sm text-slate-600">
          {nextLesson.topic}
        </p>

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
