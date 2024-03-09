import { MdOutlineMenu } from "react-icons/md";
import { useSidebarContext } from "../hooks/userSideBarContext";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
export default function ToolBar() {
  const { setShowSideBar, showSideBar } = useSidebarContext();
  return (
    <div
      className={`h-20  flex flex-row justify-between items-center px-10 w-full shadow-sm`}
    >
      <div className="flex flex-row gap-4">
        <button
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="text-xl"
        >
          <MdOutlineMenu />
        </button>
      </div>
      <div className=" relative flex flex-row gap-x-6 items-center py-4 group">
        <div className="flex flex-row">
          <div className="flex flex-row text-xl justify-center items-center w-10 h-10 rounded-full bg-slate-300 ">
            S
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-1">
            <div>Super admin</div>
            <div className="flex flex-row justify-between items-center">
              <span>Admin</span>
              <button>
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </button>
            </div>
          </div>
          <ul className="absolute top-20 left-0 z-10 hidden group-hover:flex px-10 py-4 bg-white shadow-lg rounded-lg  flex-col gap-y-3">
            <li className="w-max">
              <Link className="flex flex-row gap-2 items-center">
                <FaRegUser />
                <span>My Account</span>
              </Link>
            </li>
            <li className="w-max">
              <Link className="flex flex-row gap-2 items-center">
                <MdLogout />
                <span>Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
