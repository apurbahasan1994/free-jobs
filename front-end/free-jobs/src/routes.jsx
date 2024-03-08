import About from "./pages/About";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
];

export default routes;
