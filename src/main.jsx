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
import PaymentHistory from "./pages/PaymentHistory.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import MySelectedClasses from "./pages/MySelectedClasses.jsx";
import MyEnrolledClasses from "./pages/MyEnrolledClasses.jsx";
import ManageClasses from "./pages/ManageClasses.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserRoute from "./components/private/UserRoute.jsx";
import InstructorRoute from "./components/private/InstructorRoute.jsx";
import Payment from "./components/payment/payment.jsx";
import AddAClass from "./pages/AddAClass.jsx";
import AdminRoute from "./components/private/AdminRoute.jsx";

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
            element: (
              <UserRoute>
                <MySelectedClasses></MySelectedClasses>,
              </UserRoute>
            ),
          },
          {
            path: "/dashboard/enrolled-classes",
            element: (
              <UserRoute>
                <MyEnrolledClasses></MyEnrolledClasses>,
              </UserRoute>
            ),
          },
          {
            path: "/dashboard/payment/:id/:price/:transaction_id/:class_name/:instructor_name",
            element: (
              <UserRoute>
                <Payment></Payment>,
              </UserRoute>
            ),
          },
          {
            path: "/dashboard/payment-history",
            element: (
              <UserRoute>
                <PaymentHistory></PaymentHistory>,
              </UserRoute>
            ),
          },
          {
            path: "/dashboard/add-class",
            element: (
              <InstructorRoute>
                <AddAClass></AddAClass>,
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/manage-classes",
            element: (
              <AdminRoute>
                <ManageClasses></ManageClasses>,
              </AdminRoute>
            ),
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
