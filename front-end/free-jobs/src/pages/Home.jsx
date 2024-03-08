import { Outlet } from "react-router-dom";
import Navigation from "../component/Nav/Navigation";
export default function Home() {
  return (
    <div className="bg-body-color h-screen w-screen">
      <Navigation />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
