import RightSidebar from "../components/dashboard/RightSidebar";
import StatsGrid from "../components/dashboard/StatsGrid";
import SubjectsSection from "../components/dashboard/SubjectsSection";
import { nextLesson, statCards } from "../data/datas";
import { notificationsSeed } from "../data/notificationsData";
import { subjects } from "../data/subjectDatas";
import { useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    document.title = "LMS";
  }, []);
  return (
    <div className="space-y-4">
      <div className="grid gap-4 2xl:grid-cols-[1fr_360px]">
        <section className="space-y-4">
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
