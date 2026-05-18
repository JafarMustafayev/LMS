import { Link } from "react-router-dom";

function SubjectsSection({ subjects }) {
  return (
    <section className="w-full min-w-0 rounded-2xl border border-slate-200 shadow-sm bg-white p-3  sm:p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Fənlərim
        </h2>

        <Link
          to="/subjects"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Hamısına bax →
        </Link>
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {subjects.map((subject) => {
          const Icon = subject.icon;

          return (
            <article
              key={subject.id}
              className="min-w-0 rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5"
            >
              <div className="flex min-w-0 items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-slate-900 sm:text-lg">
                    {subject.title}
                  </h3>

                  <p className="mt-1 truncate text-sm text-slate-500">
                    {subject.teacher}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${subject.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${subject.iconColor}`}
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-slate-700">
                    Tamamlanma
                  </p>

                  <span className="text-sm font-bold text-slate-900">
                    {subject.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${subject.progressColor}`}
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SubjectsSection;
