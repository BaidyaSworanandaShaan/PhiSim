import React, { useState } from "react";
import { Users, Shield, Lock, TrendingUp, Plus } from "lucide-react";
import DashboardHeader from "../../../components/SuperAdmin/DashboardHeader";
import StatsCard from "../../../components/SuperAdmin/StatsCard";
import RegisterAdminModal from "../../../components/SuperAdmin/RegisterAdminModal";
import WelcomeBanner from "../../../components/SuperAdmin/WelcomeBanner";
import { useNavigate } from "react-router-dom";

export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegister = () => {
    setShowRegisterModal(false);
  };
  const handleLogout = () => {
    alert("Superadmin Logged Out");
    navigate("/superadmin/login");
  };

  const stats = [
    {
      title: "Total Admins",
      value: 5,
      icon: Shield,
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Sessions",
      value: "12",
      icon: Users,
      bgColor: "bg-green-50",
    },
    {
      title: "Security Score",
      value: "94%",
      icon: Lock,
      bgColor: "bg-purple-50",
    },
    {
      title: "Growth",
      value: "+28%",
      icon: TrendingUp,
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader
        onRegisterClick={() => setShowRegisterModal(true)}
        onLogoutClick={handleLogout}
      />
      <WelcomeBanner name="Nabil Bank" />
      <main className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <StatsCard
              key={i}
              title={stat.title}
              value={stat.value}
              Icon={stat.icon}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
      </main>

      <RegisterAdminModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegister={handleRegister}
      />
    </div>
  );
}
