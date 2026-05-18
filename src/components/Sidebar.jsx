import { NavLink } from "react-router-dom";
import {
  User,
  LogOut,
  Calendar,
  Bell,
  Home,
  Presentation,
  Bot,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Ana səhifə", icon: <Home size={21} /> },
  { to: "/subjects", label: "Fənlərim", icon: <Presentation size={21} /> },
  { to: "/notifications", label: "Bildirişlər", icon: <Bell size={21} /> },
  { to: "/calendar", label: "Təqvim", icon: <Calendar size={21} /> },
  { to: "/edubot", label: "EduBot AI", icon: <Bot size={21} /> },
  { to: "/profile", label: "Profil", icon: <User size={21} /> },
];

function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 z-50 hidden h-screen flex-col overflow-y-auto bg-gradient-to-b from-[#012f7a] to-[#012258] p-4 text-slate-100 shadow-xl xl:flex">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 font-semibold transition ${
                  isActive
                    ? "bg-[#0f5ddf] text-white"
                    : "text-blue-100 hover:bg-white/10"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-[999] w-screen max-w-[100vw] overflow-hidden border-t border-slate-200 bg-white px-1 py-1 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] xl:hidden">
        <div className="grid w-full grid-cols-6 gap-0">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `min-w-0 rounded-xl px-0.5 py-1.5 text-center transition ${
                  isActive ? "bg-blue-50 text-[#0f5ddf]" : "text-slate-500"
                }`
              }
            >
              <div className="mx-auto flex w-full min-w-0 flex-col items-center justify-center gap-0.5">
                <span className="[&>svg]:h-[16px] [&>svg]:w-[16px]">
                  {item.icon}
                </span>

                <span className="block w-full truncate text-[9px] font-semibold leading-tight">
                  {item.label}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
