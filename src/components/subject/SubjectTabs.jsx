import {
  LayoutDashboard,
  FileText,
  BookMarked,
  Clock3,
  ShieldCheck,
  Settings,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Ümumi baxış", icon: LayoutDashboard },
  { id: "syllabus", label: "Sillabus", icon: FileText },
  { id: "materials", label: "Metodik vəsaitlər", icon: BookMarked },
  { id: "attendance", label: "Davamiyyət", icon: Clock3 },
  { id: "current", label: "Cari monitor", icon: ShieldCheck },
  { id: "grades", label: "Qiymətləndirmə", icon: Settings },
];

function SubjectTabs({ activeTab, setActiveTab }) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white px-2 shadow-sm sm:px-4">
      <div className="grid grid-cols-2 gap-1 sm:flex sm:flex-wrap sm:gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex min-w-0 items-center gap-2 px-3 py-3 text-left text-xs font-semibold transition sm:px-4 sm:py-4 sm:text-sm ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{tab.label}</span>

              {isActive && (
                <span className="absolute bottom-0 left-0 h-1 w-full rounded-t-full bg-blue-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SubjectTabs;
