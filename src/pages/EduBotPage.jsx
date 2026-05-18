import FAQCard from "../components/edubot/FAQCard";
import ChatPanel from "../components/edubot/ChatPanel";
import BotIntroCard from "../components/edubot/BotIntroCard";
import RightInfoPanel from "../components/edubot/RightInfoPanel";
import { useEffect } from "react";

function EduBotPage() {
  useEffect(() => {
    document.title = "Edubot AI";
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)_360px]">
        <div className="order-2 space-y-4 xl:order-1">
          <BotIntroCard />
          <FAQCard />
        </div>

        <div className="order-1 h-[calc(100dvh-170px)] min-h-[520px] xl:order-2 xl:h-[calc(100dvh-120px)]">
          <ChatPanel />
        </div>

        <div className="order-3 xl:order-3">
          <RightInfoPanel />
        </div>
      </div>
    </div>
  );
}

export default EduBotPage;
