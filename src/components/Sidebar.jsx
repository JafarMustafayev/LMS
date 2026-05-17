import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Ana səhifə", icon: "⌂" },
  { to: "/subjects", label: "Fənlərim", icon: "◫" },
  { to: "/notifications", label: "Bildirişlər", icon: "◍",},
  { to: "/calendar", label: "Təqvim", icon: "⌘" },

];

function Sidebar() {
  return (
    <aside className="sticky top-0 z-20 flex h-screen flex-col overflow-y-auto bg-gradient-to-b from-[#012f7a] to-[#012258] p-4 text-slate-100 shadow-xl xl:rounded-none">
     

      <nav className="space-y-1">
        {navItems.map((item, index) => (
          <NavLink
            key={`${item.label}-${index}`}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 font-semibold transition ${
                isActive ? "bg-[#0f5ddf] text-white" : "text-blue-100 hover:bg-white/10"
              }`
            }
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge ? (
              <span className="ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white">
                {item.badge}
              </span>
            ) : null}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto space-y-1 border-t border-white/15 pt-5">
        <NavLink to="/profile" className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 font-semibold text-blue-100 hover:bg-white/10">
          <span>⚙</span>
          <span>Parametrlər</span>
        </NavLink>
        <button
          type="button"
          className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-semibold text-blue-100 hover:bg-white/10"
        >
          <span>↪</span>
          <span>Çıxış</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
