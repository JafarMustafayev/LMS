import SubjectOverview from "./SubjectOverview";
import InfoListCard from "./InfoListCard";

function SubjectTabContent({ activeTab, subject }) {
  if (activeTab === "overview") {
    return <SubjectOverview subject={subject} />;
  }

  if (activeTab === "syllabus") {
    return (
      <InfoListCard title="Sillabus">
        <ul className="space-y-3 text-sm text-gray-600">
          {subject.syllabus?.map((item, index) => (
            <li key={index} className="rounded-xl bg-gray-50 px-4 py-3">
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </InfoListCard>
    );
  }

  if (activeTab === "materials") {
    return (
      <InfoListCard title="Metodik vəsaitlər">
        <ul className="space-y-3 text-sm text-gray-600">
          {subject.materials?.map((item, index) => (
            <li key={index} className="rounded-xl bg-gray-50 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </InfoListCard>
    );
  }

  if (activeTab === "attendance") {
    return (
      <InfoListCard title="Davamiyyət">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-5">
            <p className="text-sm text-gray-500">Ümumi dərs</p>
            <p className="text-2xl font-bold text-blue-600">
              {subject.attendance.total}
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-5">
            <p className="text-sm text-gray-500">İştirak edib</p>
            <p className="text-2xl font-bold text-green-600">
              {subject.attendance.attended}
            </p>
          </div>

          <div className="rounded-xl bg-red-50 p-5">
            <p className="text-sm text-gray-500">Buraxılıb</p>
            <p className="text-2xl font-bold text-red-500">
              {subject.attendance.missed}
            </p>
          </div>
        </div>
      </InfoListCard>
    );
  }

  if (activeTab === "current") {
    return (
      <InfoListCard title="Cari monitor">
        <p className="text-sm leading-7 text-gray-600">
          Fənn üzrə cari monitorinq nəticələri burada göstəriləcək.
        </p>
      </InfoListCard>
    );
  }

  if (activeTab === "grades") {
    return (
      <InfoListCard title="Qiymətləndirmə">
        <div className="space-y-3">
          {subject.grades?.length ? (
            subject.grades.map((grade, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-gray-700">
                  {grade.title}
                </span>
                <span className="font-bold text-gray-900">{grade.score}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Qiymət məlumatı yoxdur.</p>
          )}
        </div>
      </InfoListCard>
    );
  }

  return null;
}

export default SubjectTabContent;