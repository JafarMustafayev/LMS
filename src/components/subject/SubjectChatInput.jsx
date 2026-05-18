import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

function SubjectChatInput({ onSendMessage }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const trimmed = value.trim();

    if (!trimmed) return;

    onSendMessage(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="shrink-0 border-t border-gray-100 bg-white p-4">
      <div className="flex items-end gap-3">
        <button
          type="button"
          className="mb-3 shrink-0 text-gray-500 hover:text-blue-600"
        >
          <Paperclip size={21} />
        </button>

        <textarea
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Mesajınızı yazın..."
          className="max-h-32 min-h-[46px] min-w-0 flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default SubjectChatInput;
