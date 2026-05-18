import Breadcrumbs from "./Breadcrumbs";
import { studentProfile } from "../data/studentDatas";
import { Bell, Mail, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-999 border-b border-slate-200 bg-white shadow-sm xl:left-62">
      <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-3">
        {/* Left */}
        <div className="min-w-0 flex-1 md:flex-none">
          <div className="truncate text-base font-bold text-slate-900 sm:text-xl">
            <Breadcrumbs />
          </div>
        </div>

        {/* Search */}
        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <label className="flex h-10 w-full max-w-lg items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3">
            <Search size={16} className="shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Axtarış..."
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="flex shrink-0 items-center rounded-xl border border-slate-200 bg-white p-1">
            <img
              className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9"
              src="https://i.pravatar.cc/80?img=12"
              alt="Profil"
            />

            <div className="hidden px-2 sm:block">
              <p className="max-w-[120px] truncate text-sm font-semibold text-slate-800">
                {studentProfile.firstName} {studentProfile.surname}
              </p>
              <p className="max-w-[120px] truncate text-xs text-slate-500">
                {studentProfile.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
