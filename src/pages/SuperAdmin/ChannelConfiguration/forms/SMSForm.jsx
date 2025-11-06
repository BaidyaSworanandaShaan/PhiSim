import React from "react";

const SMSForm = ({ formik }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">
      SMS API Key
    </label>
    <input
      type="text"
      {...formik.getFieldProps("smsApiKey")}
      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
      placeholder="Enter SMS API Key"
    />
    {formik.touched.smsApiKey && formik.errors.smsApiKey && (
      <p className="text-red-500 text-sm mt-1">{formik.errors.smsApiKey}</p>
    )}
  </div>
);

export default SMSForm;
