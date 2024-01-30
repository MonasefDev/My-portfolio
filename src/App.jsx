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

function App() {
  return (
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
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
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
  );
}

export default App;
