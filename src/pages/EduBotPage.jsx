import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import FAQCard from "../components/edubot/FAQCard";
import ChatPanel from "../components/edubot/ChatPanel";
import BotIntroCard from "../components/edubot/BotIntroCard";
import RightInfoPanel from "../components/edubot/RightInfoPanel";

function EduBotPage() {
  return (
    <div className="flex h-[calc(100vh-110px)] min-h-0 flex-col overflow-hidden">
      <div className="grid min-h-0 flex-1 gap-5 overflow-hidden xl:grid-cols-[280px_1fr_360px]">
        <div className="min-h-0 overflow-hidden space-y-2.5">
          <BotIntroCard />
          <FAQCard />
        </div>

        <ChatPanel />

        <div className="min-h-0 overflow-hidden">
          <RightInfoPanel />
        </div>
      </div>
    </div>
  );
}

export default EduBotPage;
