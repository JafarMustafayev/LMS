import { useLocation } from "react-router-dom";
import { subjects } from "../data/subjectDatas";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeLabels = {
  "": "Dashboard",
  subjects: "Fənlərim",
  notifications: "Bildirişlər",
  calendar: "Təqvim",
  profile: "Profil",
};

function formatSubjectName(raw) {
  if (!raw) {
    return "Dərs";
  }
  return raw
    .split("-")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return <p className="text-sm font-semibold text-slate-700">Dashboard</p>;
  }

  if (parts[0] === "subjects" && parts[1]) {
    const currentSubject = subjects.find(
      (item) => String(item.id) === parts[1],
    );
    const subjectName =
      currentSubject?.name ??
      currentSubject?.title ??
      formatSubjectName(parts[1]);
    return (
      <div className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600">
          Dashboard
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <Link to="/subjects" className="text-gray-500 hover:text-blue-600">
          Fənlərim
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="font-semibold text-gray-900">{subjectName}</span>
      </div>
    );
  }

  const current = routeLabels[parts[0]] ?? formatSubjectName(parts[0]);

  return (
    <>
      <div className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-600">
          Dashboard
        </Link>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="font-semibold text-gray-900">{current}</span>
      </div>
    </>
  );
}

export default Breadcrumbs;
