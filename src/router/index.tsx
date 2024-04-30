import Auth from "@/views/Auth";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Auth />,
  },
]);

export default router;
