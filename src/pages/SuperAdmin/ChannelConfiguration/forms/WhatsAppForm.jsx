import React from "react";

const WhatsAppForm = ({ formik }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        WhatsApp Number
      </label>
      <input
        type="text"
        {...formik.getFieldProps("whatsappNumber")}
        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        placeholder="Enter WhatsApp number"
      />
      {formik.touched.whatsappNumber && formik.errors.whatsappNumber && (
        <p className="text-red-500 text-sm mt-1">
          {formik.errors.whatsappNumber}
        </p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Access Token
      </label>
      <input
        type="text"
        {...formik.getFieldProps("whatsappToken")}
        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        placeholder="Enter WhatsApp token"
      />
      {formik.touched.whatsappToken && formik.errors.whatsappToken && (
        <p className="text-red-500 text-sm mt-1">
          {formik.errors.whatsappToken}
        </p>
      )}
    </div>
  </>
);

export default WhatsAppForm;
