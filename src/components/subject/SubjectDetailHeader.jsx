import { BookOpen, ClipboardList, GraduationCap } from "lucide-react";

function StatBox({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 border-r border-gray-100 px-5 last:border-r-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function SubjectDetailHeader({ subject }) {
  const Icon = subject.icon;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex gap-5">
          <div
            className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl ${subject.iconBg} shadow-sm`}
          >
            <Icon size={48} className={subject.iconColor} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {subject.title}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt={subject.teacher}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-gray-900">{subject.teacher}</p>
                <p className="text-sm text-gray-500">{subject.teacherRole}</p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600">
              {subject.description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex rounded-2xl border border-gray-100 bg-white py-4 shadow-sm">
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

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Ümumi irəliləyiş</p>
              <p className="text-xl font-bold text-gray-900">
                {subject.progress}%
              </p>
            </div>

            <div className="h-2 rounded-full bg-gray-100">
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
