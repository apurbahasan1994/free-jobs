import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="fixed z-30 top-0 left-0 w-full  bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-between px-20">
        <div className="flex flex-row items-center gap-20">
          <div className="flex flex-row items-center gap-3">
            <Link className="text-3xl font-bold">Free Jobs</Link>
          </div>
          <ul className="flex flex-row items-center gap-8">
            <li className="py-6">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="blogs">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link className="text-white bg-blue-color hover:bg-primary-700 outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center" to='login'>
          Join Now
        </Link>
      </div>
    </nav>
  );
}
