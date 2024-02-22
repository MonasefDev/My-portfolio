import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import AddProject from "./features/dashboard/AddProject";
import ProjectsList from "./features/dashboard/ProjectsList";
import AddTech from "./features/dashboard/techs/AddTech";
import Login from "./features/login/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route
            path="dashboard"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Navigate replace to="/dashboard/add-project" />}
            />
            <Route path="add-project" element={<AddProject />} />
            <Route path="list-projects" element={<ProjectsList />} />
            <Route path="add-technologie" element={<AddTech />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "30px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "8px 12px",
            backgroundColor: "var(--color-button-p-1)",
            color: "white",
            fontWeight: "300",
          },
        }}
      />
    </>
  );
}

export default App;
