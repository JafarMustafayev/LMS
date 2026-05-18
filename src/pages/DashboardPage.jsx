import { useEffect } from "react";
import RightSidebar from "../components/dashboard/RightSidebar";
import StatsGrid from "../components/dashboard/StatsGrid";
import SubjectsSection from "../components/dashboard/SubjectsSection";
import { nextLesson, statCards } from "../data/datas";
import { notificationsSeed } from "../data/notificationsData";
import { subjects } from "../data/subjectDatas";

function DashboardPage() {
  useEffect(() => {
    document.title = "LMS";
  }, []);

  return (
    <div className="w-full max-w-full overflow-x-hidden space-y-4">
      <div className="grid w-full max-w-full min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="min-w-0 space-y-4">
          <StatsGrid statCards={statCards} />
          <SubjectsSection subjects={subjects} />
        </section>

        <RightSidebar
          nextLesson={nextLesson}
          notifications={notificationsSeed}
        />
      </div>
    </div>
  );
}

export default DashboardPage;