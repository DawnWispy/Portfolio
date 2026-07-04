import { RouterProvider } from "react-router";
import { AnimatePresence } from "motion/react";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
