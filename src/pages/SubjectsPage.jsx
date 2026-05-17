import { Link } from "react-router-dom";
import { subjects } from "../data/datas";

function SubjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Fənlərim</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {subjects.map((subject) => (
          <article key={subject.id} className="rounded-xl bg-white p-4 shadow">
            <h2 className="text-lg font-semibold">{subject.name}</h2>
            <p className="mt-1 text-sm text-slate-500">Müəllim: {subject.teacher}</p>
            <p className="text-sm text-slate-500">Davamiyyət: {subject.attendance}</p>
            <p className="text-sm text-slate-500">Bal: {subject.score}</p>
            <Link
              className="mt-3 inline-block rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white"
              to={`/subjects/${subject.id}`}
            >
              Daxil ol
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SubjectsPage;
