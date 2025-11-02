import React from "react";

export default function StatsCard({ title, value, Icon, bgColor }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`${bgColor} p-3 rounded-lg`}>
            <Icon className="text-slate-600" size={24} />
          </div>
        </div>
        <h3 className="text-slate-600 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
