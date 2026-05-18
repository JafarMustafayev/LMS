import { MessageSquare, ArrowRight } from "lucide-react";
import {
  botFeatures,
  recentQuestions,
  recommendedTopics,
} from "../../data/eduBotData";

function RightInfoPanel() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-gray-900">
          EduBot AI imkanları
        </h2>

        <div className="space-y-5">
          {botFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="flex gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Son suallarınız</h2>

          <button className="flex items-center gap-1 text-sm font-medium text-blue-600">
            Hamısını gör
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="space-y-3">
          {recentQuestions.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-blue-500" />
                <span className="text-gray-700">{item.title}</span>
              </div>

              <span className="shrink-0 text-xs text-gray-400">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightInfoPanel;
