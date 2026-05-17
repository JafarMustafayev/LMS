import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SubjectAssignmentsTable from "../components/SubjectAssignmentsTable";
import { subjects } from "../data/datas";

function SubjectDetailPage() {
  const { subjectId } = useParams();
  const subject = useMemo(() => subjects.find((item) => item.id === subjectId), [subjectId]);

  if (!subject) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-slate-600">Fənn tapılmadı.</p>
        <Link className="mt-3 inline-block text-brand-700" to="/subjects">
          Fənlərə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">{subject.name}</h1>
        <p className="text-sm text-slate-500">Müəllim: {subject.teacher}</p>
        <p className="text-sm text-slate-500">Davamiyyət: {subject.attendance}</p>
      </div>
      <SubjectAssignmentsTable assignments={subject.assignments} />
    </div>
  );
}

export default SubjectDetailPage;
