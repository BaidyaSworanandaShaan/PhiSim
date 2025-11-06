import React from "react";
import { useNavigate } from "react-router-dom"; // or use `useRouter` if using Next.js

const FeatureCard = ({
  id,
  title,
  description,
  icon: Icon,
  color,
  bgColor,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition cursor-pointer flex flex-col items-start">
      <div className={`p-3 rounded-xl ${bgColor} mb-4`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-4 leading-6">{description}</p>
      <button
        onClick={() => navigate(path)}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default FeatureCard;
