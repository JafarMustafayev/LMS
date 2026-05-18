import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-100">
      <Sidebar />

      <div className="min-w-0 w-full overflow-x-hidden xl:pl-[250px]">
        <Navbar />

        <main className="min-w-0 w-full overflow-x-hidden px-2 pb-20 pt-16 sm:px-3 xl:pb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;