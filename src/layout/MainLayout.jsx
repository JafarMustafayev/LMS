import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100 xl:grid xl:grid-cols-[250px_1fr]">
      <Sidebar />
      <main>
        <Navbar />
        <div className="p-1.5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
