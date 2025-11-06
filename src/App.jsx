import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuperAdminLogin from "./pages/SuperAdmin/SuperAdminLogin/SuperAdminLogin";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard/SuperAdminDashboard";
import RegisterAdmin from "./pages/SuperAdmin/RegisterAdmin/RegisterAdmin";
import OrganizationSetup from "./pages/SuperAdmin/OrganizationSetup/OrganizationSetup";
import ChannelConfiguration from "./pages/SuperAdmin/ChannelConfiguration/ChannelConfiguration";
import SuperAdminLayout from "./layouts/SuperAdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SuperAdminLogin />,
  },
  {
    path: "/superadmin",
    children: [
      { path: "login", element: <SuperAdminLogin /> },

      {
        element: <SuperAdminLayout />,
        children: [
          { path: "dashboard", element: <SuperAdminDashboard /> },
          { path: "register-admin", element: <RegisterAdmin /> },
          { path: "organization-setup", element: <OrganizationSetup /> },
          { path: "channel-configuration", element: <ChannelConfiguration /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
