import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuperAdminLogin from "./pages/SuperAdmin/SuperAdminLogin/SuperAdminLogin";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard/SuperAdminDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SuperAdminLogin />,
  },
  {
    path: "/superadmin",
    children: [
      { path: "login", element: <SuperAdminLogin /> },
      { path: "dashboard", element: <SuperAdminDashboard /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
