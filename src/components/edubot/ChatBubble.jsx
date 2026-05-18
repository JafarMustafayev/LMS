import eduBot from "../../assets/img/eduBot.png";
import { CheckCheck } from "lucide-react";
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
        className={`max-w-[88%] overflow-hidden rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[75%] sm:px-5 sm:py-4 ${
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

export default ChatBubble;
