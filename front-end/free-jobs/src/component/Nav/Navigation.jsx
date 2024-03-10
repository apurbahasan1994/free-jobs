import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="fixed z-30 top-0 left-0 w-full  bg-white shadow-sm text-text-color">
      <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-between px-20">
        <div className="flex flex-row items-center gap-20">
          <div className="flex flex-row items-center gap-3">
            <Link className="text-3xl font-bold">Free Jobs</Link>
          </div>
          <ul className="flex flex-row items-center gap-8">
            <li className="py-6 font-semibold group relative">
              <Link to="/">Home</Link>
              <div className="w-0 h-1 bg-theme-color group-hover:w-full absolute bottom-1 transition-all duration-300 ease-linear rounded-lg"></div>
            </li>
            <li className="py-6 font-semibold  group relative">
              <Link to="/about">About</Link>
              <div className="w-0 h-1 bg-theme-color group-hover:w-full absolute bottom-1 transition-all duration-300 ease-linear rounded-lg"></div>
            </li>
            <li className="py-6 font-semibold group relative">
              <Link to="blogs">Blog</Link>
              <div className="w-0 h-1 bg-theme-color group-hover:w-full absolute bottom-1 transition-all duration-300 ease-linear rounded-lg"></div>
            </li>
            <li className="py-6 font-semibold group relative">
              <Link to="contact">Contact</Link>
              <div className="w-0 h-1 bg-theme-color group-hover:w-full absolute bottom-1 transition-all duration-300 ease-linear rounded-lg"></div>
            </li>
          </ul>
        </div>
        <Link
          className="text-white bg-theme-color hover:bg-primary-700 outline-none  rounded-lg text-sm font-[600] px-8 py-3 text-center"
          to="login"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}
