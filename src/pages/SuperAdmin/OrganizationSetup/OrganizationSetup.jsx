import React, { useState } from "react";
import { Building2, Upload } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const OrganizationSetup = () => {
  const [logoPreview, setLogoPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      logo: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Organization name must be at least 2 characters")
        .required("Organization name is required"),
      logo: Yup.mixed()
        .required("Logo is required")
        .test("fileType", "Only image files are allowed", (value) => {
          return (
            value &&
            ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
          );
        }),
    }),
    onSubmit: (values) => {
      console.log("Organization Setup Data:", values);
      alert("Organization setup saved successfully!");
    },
  });

  const handleLogoChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("logo", file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          {" "}
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/10">
              <Building2 className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Organization Setup
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Provide your organization details to get started.
              </p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Organization Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter organization name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:outline-none transition-all ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-blue-500"
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Organization Logo
              </label>
              <div
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer ${
                  formik.touched.logo && formik.errors.logo
                    ? "border-red-500"
                    : "border-slate-300 hover:border-blue-500"
                }`}
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-24 h-24 object-cover rounded-md mb-3"
                  />
                ) : (
                  <Upload className="w-10 h-10 text-slate-400 mb-2" />
                )}
                <label
                  htmlFor="logo-upload"
                  className="text-blue-600 hover:underline text-sm cursor-pointer"
                >
                  {logoPreview ? "Change Logo" : "Upload Logo"}
                </label>
                <input
                  id="logo-upload"
                  name="logo"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  onBlur={formik.handleBlur}
                  className="hidden"
                />
              </div>
              {formik.touched.logo && formik.errors.logo && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.logo}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all"
            >
              Save Organization
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default OrganizationSetup;
