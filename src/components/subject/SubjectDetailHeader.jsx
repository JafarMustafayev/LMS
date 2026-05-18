import { BookOpen, ClipboardList, GraduationCap } from "lucide-react";
import { useEffect } from "react";

function StatBox({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 items-center gap-2 border-r border-gray-100 px-2 last:border-r-0 sm:gap-3 sm:px-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[11px] text-gray-500 sm:text-xs">{label}</p>
        <p className="text-base font-bold text-gray-900 sm:text-lg">{value}</p>
      </div>
    </div>
  );
}

function SubjectDetailHeader({ subject }) {
  useEffect(() => {
    document.title = subject.title;
  }, []);
  const Icon = subject.icon;

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:gap-5">
          <div
            className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl ${subject.iconBg} shadow-sm sm:h-24 sm:w-24`}
          >
            <Icon size={40} className={subject.iconColor} />
          </div>

          <div className="min-w-0">
            <h1 className="break-words text-2xl font-bold text-gray-900 sm:text-3xl">
              {subject.title}
            </h1>

            <div className="mt-3 flex min-w-0 items-center gap-3">
              <img
                src={subject.teacherImage}
                alt={subject.teacher}
                className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
              />

              <div className="min-w-0">
                <p className="truncate font-semibold text-gray-900">
                  {subject.teacher}
                </p>
                <p className="truncate text-sm text-gray-500">
                  {subject.teacherRole}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5">
              {subject.description}
            </p>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-gray-100 bg-white py-4 shadow-sm">
            <StatBox
              icon={BookOpen}
              label="Dərslər"
              value={subject.lessonsCount}
            />
            <StatBox
              icon={ClipboardList}
              label="Tapşırıqlar"
              value={subject.tasksCount}
            />
            <StatBox
              icon={GraduationCap}
              label="Kredit"
              value={subject.credit}
            />
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm text-gray-500">Ümumi irəliləyiş</p>
              <p className="shrink-0 text-lg font-bold text-gray-900 sm:text-xl">
                {subject.progress}%
              </p>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-2 rounded-full ${subject.progressColor}`}
                style={{ width: `${subject.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetailHeader;
