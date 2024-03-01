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
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { removeStorage } from "./services/apiEmptyStorage";
import styled from "styled-components";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
            <Route path="edit-project/:id" element={<AddProject />} />
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
      {/* <EmptyButton onClick={() => removeStorage()}>Empty Storage</EmptyButton> */}
    </QueryClientProvider>
  );
}

const EmptyButton = styled.div`
  position: absolute;
  left: 4rem;
  bottom: 4rem;
  opacity: 0.1;
  background-color: red;
  padding: 1rem 2rem;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default App;
