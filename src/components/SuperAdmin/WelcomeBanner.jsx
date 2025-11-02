import React from "react";

export default function WelcomeBanner({ name = "Administrator" }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 mt-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Welcome back, {name}! 👋
      </h2>
      <p className="text-slate-500 text-sm mt-1">
        Here's a quick overview of your system stats.
      </p>
    </div>
  );
}
