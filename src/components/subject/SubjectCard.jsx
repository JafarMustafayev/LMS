import { Link } from "react-router-dom";
import { User, ClipboardList, BookOpen, ArrowRight } from "lucide-react";

function SubjectCard({ subject }) {
  const Icon = subject.icon;

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${subject.iconBg}`}
        >
          <Icon size={26} className={subject.iconColor} />
        </div>
      </div>

      <h2 className="min-h-10 text-base font-bold text-gray-900">
        {subject.title}
      </h2>

      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
        <User size={13} />
        {subject.teacher}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-gray-500">Ümumi irəliləyiş</span>

          <span className="font-bold text-gray-900">{subject.progress}%</span>
        </div>

        <div className="h-1.5 rounded-full bg-gray-100">
          <div
            className={`h-1.5 rounded-full ${subject.progressColor}`}
            style={{
              width: `${subject.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="my-5 grid grid-cols-2 divide-x divide-gray-100">
        <div className="flex items-center gap-2">
          <ClipboardList size={17} className="text-gray-500" />

          <div>
            <p className="text-sm font-bold text-gray-900">
              {subject.tasksCount}
            </p>

            <p className="text-xs text-gray-500">Tapşırıq</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pl-4">
          <BookOpen size={17} className="text-gray-500" />

          <div>
            <p className="text-sm font-bold text-gray-900">
              {subject.lessonsCount}
            </p>

            <p className="text-xs text-gray-500">Dərs</p>
          </div>
        </div>
      </div>

      <Link
        to={`/subjects/${subject.id}`}
        className={`flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition ${subject.buttonClass}`}
      >
        Fənnə daxil ol
        <ArrowRight size={15} />
      </Link>
    </article>
  );
}

export default SubjectCard;
