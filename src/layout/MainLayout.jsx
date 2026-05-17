import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100 xl:grid xl:grid-cols-[250px_1fr]">
      <Sidebar />
      <main>
        <DashboardTopbar />
        <div className="p-3 md:p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
