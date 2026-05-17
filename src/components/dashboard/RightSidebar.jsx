import CalendarCard from "./CalendarCard";
import NextLessonCard from "./NextLessonCard";
import NotificationsCard from "./NotificationsCard";

function RightSidebar({ nextLesson, notifications }) {
  return (
    <aside className="space-y-4">
      <NextLessonCard nextLesson={nextLesson} />
      <NotificationsCard notifications={notifications} count={3} />
      <CalendarCard />
    </aside>
  );
}

export default RightSidebar;
