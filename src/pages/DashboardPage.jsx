import AttendanceSection from "../components/dashboard/AttendanceSection";
import RightSidebar from "../components/dashboard/RightSidebar";
import StatsGrid from "../components/dashboard/StatsGrid";
import SubjectsSection from "../components/dashboard/SubjectsSection";
import {
  attendance,
  nextLesson,
  notifications,
  statCards,
  subjects,
  weekDays,
} from "../data/datas";

function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 2xl:grid-cols-[1fr_360px]">
        <section className="space-y-4">
          <StatsGrid statCards={statCards} />
          <SubjectsSection subjects={subjects} />
          <AttendanceSection attendance={attendance} />
        </section>

        <RightSidebar
          nextLesson={nextLesson}
          notifications={notifications}
          weekDays={weekDays}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
