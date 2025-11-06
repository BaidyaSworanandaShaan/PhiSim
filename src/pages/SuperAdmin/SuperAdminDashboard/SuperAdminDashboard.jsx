import React, { useState } from "react";
import { Users, Shield, Lock, TrendingUp } from "lucide-react";
import DashboardHeader from "../../../components/SuperAdmin/DashboardHeader";
import StatsCard from "../../../components/SuperAdmin/StatsCard";
import RegisterAdminModal from "../../../components/SuperAdmin/RegisterAdminModal";
import WelcomeBanner from "../../../components/SuperAdmin/WelcomeBanner";
import { useNavigate } from "react-router-dom";
import FeatureCard from "../../../components/SuperAdmin/FeatureCard";
import { Building, Settings } from "lucide-react";
export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegister = () => {
    setShowRegisterModal(false);
  };

  // Stats Cards
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

  // Feature Cards
  const features = [
    {
      id: "admin",
      title: "Register Admin",
      description: "Create and manage  accounts for your organization.",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      path: "/superadmin/register-admin",
    },
    {
      id: "organization",
      title: "Organization Setup",
      description: "Configure organization details and management settings.",
      icon: Building,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      path: "/superadmin/organization-setup",
    },
    {
      id: "channel",
      title: "Channel Configuration",
      description: "Manage communication and notification channels for admins.",
      icon: Settings,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      path: "/superadmin/channel-configuration",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {" "}
      <WelcomeBanner />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Actions Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Quick Actions
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Access core administrative tools and configuration panels easily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-500 mt-1 text-sm">
              Track key statistics and system insights at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>
      </main>
      <RegisterAdminModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegister={handleRegister}
      />
    </div>
  );
}
