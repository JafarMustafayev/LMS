import { useEffect, useRef, useState } from "react";
import { Search, UserRound, MoreVertical } from "lucide-react";
import SubjectChatBubble from "./SubjectChatBubble";
import SubjectChatInput from "./SubjectChatInput";

function SubjectChat({ subject }) {
  const [messages, setMessages] = useState(subject.chatMessages || []);
  const messagesRef = useRef(null);

  const handleSendMessage = (text) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const newMessage = {
      id: Date.now(),
      sender: "student",
      text: trimmed,
      time: new Date().toLocaleTimeString("az-AZ", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  useEffect(() => {
    const element = messagesRef.current;
    if (!element) return;

    element.scrollTop = element.scrollHeight;
  }, [messages]);

  return (
    <aside className="flex h-[620px] min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm xl:sticky xl:top-20 xl:h-[calc(100vh-96px)]">
      <div className="shrink-0 border-b border-gray-100 p-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Fənn chati</h2>

          <div className="flex items-center gap-3 text-gray-500">
            <button className="hover:text-blue-600">
              <MoreVertical size={19} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={subject.teacherImage || "https://i.pravatar.cc/1000?img=50"}
            alt={subject.teacher}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="min-w-0">
            <p className="truncate font-semibold text-gray-900">
              {subject.teacher}
            </p>
            <p className="text-sm text-gray-500">{subject.teacherRole}</p>
          </div>
        </div>
      </div>

      <div
        ref={messagesRef}
        className="min-h-0 flex-1 space-y-5 overflow-y-auto overflow-x-hidden p-4"
      >
        <div className="text-center text-xs text-gray-400">10 May 2025</div>

        {messages.map((message) => (
          <SubjectChatBubble
            key={message.id}
            message={message}
            teacherImage={subject.teacherImage}
          />
        ))}
      </div>

      <SubjectChatInput onSendMessage={handleSendMessage} />
    </aside>
  );
}

export default SubjectChat;
