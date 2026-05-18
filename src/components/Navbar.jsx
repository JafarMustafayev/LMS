import Breadcrumbs from "./Breadcrumbs";
import { studentProfile } from "../data/studentDatas";

import { Bell, Mail, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between gap-4 border border-slate-200 bg-white px-6 py-4 shadow-sm">
      {/* Left */}
      <div className="min-w-55">
        <div className="mt-1 text-xl font-bold text-slate-900">
          <Breadcrumbs />
        </div>
      </div>

      {/* Center Search */}
      <div className="flex flex-1 justify-center">
        <label className="flex h-11 w-full max-w-xl items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-blue-400 focus-within:bg-white">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Axtarış..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
        >
          <Bell size={20} />
        </button>

        {/* Messages */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100"
        >
          <Mail size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src="https://i.pravatar.cc/80?img=12"
            alt="Əli Məmmədov"
          />

          <div>
            <p className="text-sm font-semibold text-slate-800">
              {studentProfile.firstName} {studentProfile.surname}
            </p>

            <p className="text-xs text-slate-500">{studentProfile.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
