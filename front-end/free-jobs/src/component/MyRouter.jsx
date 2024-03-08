import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

const appRoutes = createBrowserRouter(routes);

export default function MyRouter() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}
