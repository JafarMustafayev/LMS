import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { subjects } from "../data/subjectDatas";
import SubjectDetailHeader from "../components/subject/SubjectDetailHeader";
import SubjectTabs from "../components/subject/SubjectTabs";
import SubjectTabContent from "../components/subject/SubjectTabContent";

function SubjectDetailPage() {
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const subject = useMemo(
    () => subjects.find((item) => String(item.id) === String(subjectId)),
    [subjectId],
  );

  if (!subject) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-gray-600">Fənn tapılmadı.</p>

        <Link
          className="mt-3 inline-block font-medium text-blue-600"
          to="/subjects"
        >
          Fənlərə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <SubjectDetailHeader subject={subject} />

      <SubjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <SubjectTabContent activeTab={activeTab} subject={subject} />
    </div>
  );
}

export default SubjectDetailPage;
