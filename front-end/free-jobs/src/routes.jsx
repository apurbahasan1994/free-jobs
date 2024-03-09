import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Dashboard/components/Profile";
import Stat from "./pages/Dashboard/components/Stat";
import LiveJobs from "./pages/Dashboard/pages/LiveJobs";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "jobs", element: <LiveJobs />, index: true },
      { path: "stats", element: <Stat /> },
      { path: "profiles", element: <Profile /> },
    ],
  },
];

export default routes;
