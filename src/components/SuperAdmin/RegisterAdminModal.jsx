import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerAdminValidationSchema } from "../../schema/registerAdminValidationSchema";

export default function RegisterAdminModal({ show, onClose, onRegister }) {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: registerAdminValidationSchema,
    onSubmit: (values) => {
      onRegister(values);
      formik.resetForm();
    },
  });

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Register New Admin
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...formik.getFieldProps("name")}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
