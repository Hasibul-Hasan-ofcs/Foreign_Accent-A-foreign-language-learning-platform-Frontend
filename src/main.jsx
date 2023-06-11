import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundErrorPage from "./pages/NotFoundErrorPage.jsx";
import Instructors from "./pages/Instructors.jsx";
import Classes from "./pages/Classes.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import MySelectedClasses from "./pages/MySelectedClasses.jsx";
import MyEnrolledClasses from "./pages/MyEnrolledClasses.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/selected-classes",
            element: <MySelectedClasses></MySelectedClasses>,
          },
          {
            path: "/dashboard/enrolled-classes",
            element: <MyEnrolledClasses></MyEnrolledClasses>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundErrorPage></NotFoundErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
