import { useEffect, useRef, useState } from "react";
import { CheckCheck } from "lucide-react";
import { chatMessages } from "../../data/eduBotData";
import ChatInput from "./ChatInput";
import eduBot from "../../assets/img/eduBot.png";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex gap-3 max-w-3xl ${
        isUser ? "justify-end ml-auto" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
          <img src={eduBot} alt="" />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 text-sm leading-6 shadow-sm overflow-hidden ${
          isUser
            ? "rounded-tr-sm bg-blue-600 text-white"
            : "rounded-tl-sm border border-gray-100 bg-white text-gray-700"
        }`}
      >
        <div className="prose prose-sm max-w-none whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || "");

                // inline code
                if (inline) {
                  return (
                    <code
                      className={`rounded px-1.5 py-0.5 text-xs font-mono ${
                        isUser
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-red-500"
                      }`}
                    >
                      {children}
                    </code>
                  );
                }

                // multiline code block
                return (
                  <div className="my-3 overflow-hidden rounded-xl">
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match?.[1] || "javascript"}
                      PreTag="div"
                      customStyle={{
                        margin: 0,
                        borderRadius: "0.75rem",
                        padding: "16px",
                        fontSize: "13px",
                        overflowX: "auto",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                );
              },
            }}
          >
            {message.text}
          </ReactMarkdown>
        </div>

        <div
          className={`mt-2 flex items-center justify-end gap-1 text-xs ${
            isUser ? "text-blue-100" : "text-gray-400"
          }`}
        >
          {message.time}
          {isUser && <CheckCheck size={14} />}
        </div>
      </div>
    </div>
  );
}

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
    <div className="flex h-full min-h-0 flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="shrink-0 border-b border-gray-100 py-4 text-center text-sm font-medium text-gray-500">
        Bu gün
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-5 overflow-y-auto overflow-x-hidden p-6"
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
