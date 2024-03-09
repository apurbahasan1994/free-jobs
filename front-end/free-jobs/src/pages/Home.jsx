import { Outlet } from "react-router-dom";
import Navigation from "../component/Nav/Navigation";
export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="pt-[72px]">
        <Outlet />
      </div>
    </div>
  );
}
