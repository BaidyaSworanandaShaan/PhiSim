import React from "react";
import { MessageSquare, Mail, Phone } from "lucide-react";

const channels = [
  { id: "sms", label: "SMS", icon: MessageSquare },
  { id: "email", label: "Email", icon: Mail },
  { id: "whatsapp", label: "WhatsApp", icon: Phone },
];

const ChannelSelector = ({ selectedChannel, setSelectedChannel }) => {
  return (
    <div className="flex gap-4 mb-6">
      {channels.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setSelectedChannel(item.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            selectedChannel === item.id
              ? "bg-blue-600 text-white border-blue-600"
              : "border-slate-300 text-slate-600 hover:border-blue-400"
          }`}
        >
          <item.icon
            className={`w-5 h-5 ${
              selectedChannel === item.id ? "text-white" : "text-blue-500"
            }`}
          />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ChannelSelector;
