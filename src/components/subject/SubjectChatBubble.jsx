import { CheckCheck, Download } from "lucide-react";

function SubjectChatBubble({ message, teacherImage }) {
  const isStudent = message.sender === "student";

  return (
    <div
      className={`flex gap-3 ${isStudent ? "justify-end" : "justify-start"}`}
    >
      {!isStudent && (
        <img
          src={teacherImage || "https://i.pravatar.cc/1000?img=50"}
          alt=""
          className="mt-1 h-9 w-9 shrink-0 rounded-full object-cover"
        />
      )}

      <div
        className={`max-w-[82%] overflow-hidden rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
          isStudent
            ? "rounded-tr-sm bg-blue-600 text-white"
            : "rounded-tl-sm border border-gray-100 bg-white text-gray-700"
        }`}
      >
        <p className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
          {message.text}
        </p>

        {message.file && (
          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 text-gray-700">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {message.file.name}
              </p>
              <p className="text-xs text-gray-500">{message.file.size}</p>
            </div>

            <Download size={18} className="shrink-0 text-gray-500" />
          </div>
        )}

        <div
          className={`mt-2 flex items-center justify-end gap-1 text-xs ${
            isStudent ? "text-blue-100" : "text-gray-400"
          }`}
        >
          {message.time}
          {isStudent && <CheckCheck size={14} />}
        </div>
      </div>
    </div>
  );
}

export default SubjectChatBubble;
