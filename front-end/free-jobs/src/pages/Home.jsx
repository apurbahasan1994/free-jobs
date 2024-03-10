import { Outlet } from "react-router-dom";
import Navigation from "../component/Nav/Navigation";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrolltoTop";
export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="pt-[72px]">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
