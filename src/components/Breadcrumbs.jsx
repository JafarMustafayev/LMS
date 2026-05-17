import { useLocation } from "react-router-dom";
import { subjects } from "../data/datas";
import { ArrowRight } from "lucide-react";

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
      <p className="text-sm font-semibold text-slate-700">
        Fənlərim {">"} {subjectName}
      </p>
    );
  }

  const current = routeLabels[parts[0]] ?? formatSubjectName(parts[0]);

  return (
    <>
      <i className="ri-image-line text-lg text-green-500"></i>
      <p className="text-base font-semibold text-slate-900 flex">
        Dashboard {">"}
        {current}
      </p>
    </>
  );
}

export default Breadcrumbs;
