import { useEffect, useRef, useState } from "react";

import { chatMessages } from "../../data/eduBotData";
import ChatInput from "./ChatInput";
import eduBot from "../../assets/img/eduBot.png";
import ChatBubble from "./ChatBubble";

function ChatPanel() {
  const [messages, setMessages] = useState(chatMessages);
  const scrollRef = useRef(null);

  const handleSendMessage = (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedText,
      time: new Date().toLocaleTimeString("az-AZ", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollTop = element.scrollHeight;
  }, [messages]);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="shrink-0 border-b border-gray-100 py-4 text-center text-sm font-medium text-gray-500">
        Bu gün
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden p-3 sm:p-6"
      >
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>

      <div className="shrink-0">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatPanel;
