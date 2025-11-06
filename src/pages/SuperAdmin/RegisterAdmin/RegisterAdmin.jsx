import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../../../components/SuperAdmin/DashboardHeader";
import { Users } from "lucide-react";
import { useFormik } from "formik";
import { registerAdminValidationSchema } from "../../../schema/registerAdminValidationSchema";

const RegisterAdmin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: registerAdminValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log("✅ Admin Registered:", values);
      alert("Admin registered successfully!");
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/10">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Register a New Admin
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Fill out the details below to create a new administrator account
                for your organization.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-blue-500"
                }`}
                placeholder="Enter admin name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-600 text-sm mt-1">
                  {formik.errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-blue-500"
                }`}
                placeholder="Enter email address"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={` px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                formik.isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {formik.isSubmitting ? "Registering..." : "+ Register Admin"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterAdmin;
