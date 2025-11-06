import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ChannelSelector from "./ChannelSelector";
import SMSForm from "./forms/SMSForm";
import EmailForm from "./forms/EmailForm";
import WhatsAppForm from "./forms/WhatsAppForm";

const ChannelConfiguration = () => {
  const [selectedChannel, setSelectedChannel] = useState("sms");

  const validationSchema = Yup.object({
    smsApiKey: Yup.string().when("channel", {
      is: "sms",
      then: (schema) => schema.required("SMS API Key is required"),
    }),
    emailHost: Yup.string().when("channel", {
      is: "email",
      then: (schema) => schema.required("Email Host is required"),
    }),
    emailPort: Yup.number().when("channel", {
      is: "email",
      then: (schema) =>
        schema
          .typeError("Email Port must be a number")
          .required("Email Port is required"),
    }),
    whatsappNumber: Yup.string().when("channel", {
      is: "whatsapp",
      then: (schema) => schema.required("WhatsApp Number is required"),
    }),
    whatsappToken: Yup.string().when("channel", {
      is: "whatsapp",
      then: (schema) => schema.required("WhatsApp Token is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      channel: selectedChannel,
      smsApiKey: "",
      emailHost: "",
      emailPort: "",
      whatsappNumber: "",
      whatsappToken: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Configuration Saved:", values);
      alert(
        `${values.channel.toUpperCase()} configuration saved successfully!`
      );
      formik.resetForm();
    },
  });

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/10">
              <MessageSquare className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Channel Configuration
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Configure communication channels to send notifications and
                updates.
              </p>
            </div>
          </div>

          {/* Channel Selector */}
          <ChannelSelector
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
          />

          {/* Dynamic Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {selectedChannel === "sms" && <SMSForm formik={formik} />}
            {selectedChannel === "email" && <EmailForm formik={formik} />}
            {selectedChannel === "whatsapp" && <WhatsAppForm formik={formik} />}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all"
            >
              Save {selectedChannel.toUpperCase()} Configuration
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChannelConfiguration;
