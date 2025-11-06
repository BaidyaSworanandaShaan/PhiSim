import React from "react";

const EmailForm = ({ formik }) => (
  <>
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Email Host
      </label>
      <input
        type="text"
        {...formik.getFieldProps("emailHost")}
        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        placeholder="Enter Email Host"
      />
      {formik.touched.emailHost && formik.errors.emailHost && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.emailHost}</p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Email Port
      </label>
      <input
        type="number"
        {...formik.getFieldProps("emailPort")}
        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        placeholder="Enter Port Number"
      />
      {formik.touched.emailPort && formik.errors.emailPort && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.emailPort}</p>
      )}
    </div>
  </>
);

export default EmailForm;
