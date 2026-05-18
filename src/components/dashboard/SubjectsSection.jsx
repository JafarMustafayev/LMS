import { Link } from "react-router-dom";

function SubjectsSection({ subjects }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Fənlərim</h2>

        <Link to="subjects" className="text-sm font-semibold text-blue-600">
          Hamısına bax →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => {
          const Icon = subject.icon;

          return (
            <article
              key={subject.id}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {subject.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {subject.teacher}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${subject.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${subject.iconColor}`} />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
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
                    style={{
                      width: `${subject.progress}%`,
                    }}
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
