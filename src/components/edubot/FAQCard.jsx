import { ChevronRight, Plus } from "lucide-react";
import { quickQuestions } from "../../data/eduBotData";

function FAQCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-gray-900">
        Tez-tez verilən suallar
      </h2>

      <div className="space-y-2">
        {quickQuestions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className="flex w-full items-center justify-between rounded-xl border-b border-gray-100 px-2 py-3 text-left hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={21} />
                </div>

                <span className="text-sm font-medium text-gray-700">
                  {item.title}
                </span>
              </div>

              <ChevronRight size={18} className="text-gray-400" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FAQCard;
