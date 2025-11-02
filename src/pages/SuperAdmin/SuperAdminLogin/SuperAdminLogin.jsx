import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { loginValidationSchema } from "../../../schema/loginValidationSchema";
import { useNavigate } from "react-router-dom";

export default function SuperAdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log("Login attempt:", values);
      alert("Credentials captured (Simulation Mode)");
      navigate("/superadmin/dashboard");
      resetForm();
    } catch (err) {
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex ">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br  from-[#07122A] to-[#1CAFA0] flex-col items-center justify-center p-12">
        <div className="max-w-md text-center lg:text-left">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-teal-400 shadow-lg rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4 ">
              Phi-Sim
            </h2>
            <p className="text-white opacity-90 text-md my-4 leading-8">
              Secure access to your enterprise administration panel. Manage your
              organization confidently and efficiently.
            </p>
          </div>

          <div className="space-y-6 text-left">
            {/* Feature Item */}
            <div className="flex items-start gap-4 group">
              <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-white  opacity-90  group-hover:animate-bounce transition-transform duration-300">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-base">
                256-bit encryption
              </span>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-white group-hover:animate-bounce transition-transform duration-300">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-base">
                Multi-factor authentication
              </span>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-white group-hover:animate-bounce transition-transform duration-300">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-base">
                Real-time monitoring
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Super Admin Login
            </h1>
            <p className="text-slate-600 text-sm mt-2">
              Authorized personnel only. Secure login required.
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="admin@example.com"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900"
                    disabled={isLoading || isSubmitting}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900"
                    disabled={isLoading || isSubmitting}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => alert("Forgot password flow here")}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full mt-6 bg-[#12376E] text-white font-medium py-2.5 rounded-lg hover:bg-[#082249] transition disabled:bg-[#374151] disabled:cursor-not-allowed"
                >
                  {isLoading || isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-slate-600">
            <p>© 2025 Super Admin Portal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
