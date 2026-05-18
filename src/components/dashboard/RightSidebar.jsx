import CalendarCard from "./CalendarCard";
import NextLessonCard from "./NextLessonCard";
import NotificationsCard from "./NotificationsCard";

function RightSidebar({ nextLesson, notifications }) {
  return (
    <aside className="min-w-0 space-y-4 xl:sticky xl:top-4 xl:self-start">
      <NextLessonCard nextLesson={nextLesson} />
      <NotificationsCard notifications={notifications} count={3} />
      <CalendarCard />
    </aside>
  );
}

export default RightSidebar;