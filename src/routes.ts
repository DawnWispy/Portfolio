import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: CaseStudyPage },
      { path: "about", Component: AboutPage },

      { path: "contact", Component: ContactPage },
    ],
  },
]);
