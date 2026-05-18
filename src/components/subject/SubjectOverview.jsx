import {
  BookOpen,
  ClipboardList,
  CalendarDays,
  CirclePlay,
  MessageSquare,
} from "lucide-react";

import InfoListCard from "./InfoListCard";

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 py-2 text-sm">
      <Icon size={18} className="text-gray-500" />
      <p>
        <span className="font-semibold text-gray-900">{label}:</span>{" "}
        <span className="text-gray-600">{value}</span>
      </p>
    </div>
  );
}

function StatusBadge({ status }) {
  const isSuccess = status === "İzlənildi" || status === "Təqdim edildi";
  const isWaiting = status === "Gözləyir";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        isSuccess
          ? "bg-green-50 text-green-600"
          : isWaiting
            ? "bg-orange-50 text-orange-500"
            : "bg-gray-50 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
}

function LessonRow({ item }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <CirclePlay size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      </div>

      <StatusBadge status={item.status} />
    </div>
  );
}

function AssignmentRow({ item }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
          <ClipboardList size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          <p className="text-xs text-gray-500">Deadline: {item.deadline}</p>
        </div>
      </div>

      <StatusBadge status={item.status} />
    </div>
  );
}

function SubjectOverview({ subject }) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      <InfoListCard title="Fənn haqqında">
        <p className="mb-5 text-sm leading-7 text-gray-600">{subject.about}</p>

        <DetailItem
          icon={MessageSquare}
          label="Dərs dili"
          value={subject.language}
        />
        <DetailItem icon={BookOpen} label="Səviyyə" value={subject.level} />
        <DetailItem
          icon={ClipboardList}
          label="Fənn növü"
          value={subject.type}
        />
        <DetailItem
          icon={CalendarDays}
          label="Semestr"
          value={subject.semester}
        />
      </InfoListCard>

      <InfoListCard title="Son dərslər">
        <div className="space-y-1">
          {subject.lessons?.length ? (
            subject.lessons.map((item) => (
              <LessonRow key={item.id} item={item} />
            ))
          ) : (
            <p className="text-sm text-gray-500">Dərs məlumatı yoxdur.</p>
          )}
        </div>
      </InfoListCard>

      <InfoListCard title="Son tapşırıqlar">
        <div className="space-y-1">
          {subject.assignments?.length ? (
            subject.assignments.map((item) => (
              <AssignmentRow key={item.id} item={item} />
            ))
          ) : (
            <p className="text-sm text-gray-500">Tapşırıq məlumatı yoxdur.</p>
          )}
        </div>
      </InfoListCard>
    </div>
  );
}

export default SubjectOverview;
