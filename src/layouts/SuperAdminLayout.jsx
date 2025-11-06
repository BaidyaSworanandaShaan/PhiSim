import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/SuperAdmin/DashboardHeader";
import WelcomeBanner from "../components/SuperAdmin/WelcomeBanner";

const SuperAdminLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Shared Header */}
      <DashboardHeader />
      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SuperAdminLayout;
