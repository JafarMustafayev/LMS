function SubjectsSection({ subjects }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Fənlərim</h2>
        <a className="text-sm font-semibold text-blue-600" href="#">Hamısına bax →</a>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <article key={subject.title} className="rounded-xl border border-slate-200 p-4">
            <h3 className="text-xl font-bold leading-tight text-slate-900">{subject.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{subject.teacher}</p>
            <p className="mt-4 text-xs font-semibold text-slate-600">{subject.progress}%</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
              <span className={`block h-full ${subject.color}`} style={{ width: `${subject.progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SubjectsSection;
