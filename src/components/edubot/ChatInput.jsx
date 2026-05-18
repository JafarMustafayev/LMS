import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

function ChatInput({ onSendMessage }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const trimmed = value.trim();

    if (!trimmed) return;

    onSendMessage(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    // Enter -> göndər
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }

    // Shift + Enter -> yeni sətir
  };

  return (
    <div className="flex items-end gap-3 border-t border-gray-100 bg-white p-4">
      <button type="button" className="mb-2 text-gray-500 hover:text-blue-600">
        <Paperclip size={22} />
      </button>

      <textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Sualınızı yazın..."
        className="max-h-40 min-h-12 flex-1 resize-none overflow-y-auto rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={21} />
      </button>
    </div>
  );
}

export default ChatInput;
