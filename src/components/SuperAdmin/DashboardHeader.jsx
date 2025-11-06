import React from "react";
import { Plus, LogOut, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardHeader({ onRegisterClick, onLogoutClick }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Dashboard Title */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield size={24} className="text-white" />
          </div>

          {/* Title and subtitle */}
          <div>
            <Link
              to="/superadmin/dashboard"
              className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors"
            >
              Superadmin Dashboard
            </Link>
          </div>
        </div>

        {/* Right side: Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLogoutClick}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
