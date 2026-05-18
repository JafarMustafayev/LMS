import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-dvh w-full max-w-full overflow-x-hidden bg-slate-100 xl:grid xl:grid-cols-[250px_minmax(0,1fr)]">
      <Sidebar />

      <main className="min-w-0 w-full overflow-x-hidden pb-20 pt-14 xl:pb-0 xl:pt-16">
        <Navbar />

        <div className="w-full max-w-full overflow-x-hidden p-2 sm:p-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
