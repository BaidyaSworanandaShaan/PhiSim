import React from "react";

export default function WelcomeBanner({ name = "Administrator" }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 my-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-100 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-800">
        Welcome back, <span className="text-blue-600">{name}</span>! 👋
      </h2>
      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        Manage your phishing simulation platform with ease. Get started by
        setting up your organization and administrators.
      </p>
    </div>
  );
}
