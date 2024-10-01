import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
