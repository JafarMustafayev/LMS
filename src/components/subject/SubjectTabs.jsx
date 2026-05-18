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
    <div className="rounded-2xl border border-gray-100 bg-white px-4 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-4 text-sm font-semibold transition ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon size={18} />
              {tab.label}

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
