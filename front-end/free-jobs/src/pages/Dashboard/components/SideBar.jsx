import { MdWork } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoStatsChart } from "react-icons/io5";
import SideNavLink from "./SideNavLink";
import { useSidebarContext } from "../hooks/userSideBarContext";
export default function SideBar() {
  const { showSideBar } = useSidebarContext();
  return (
    <div
      className={`w-64 bg-sidebar-color text-white  fixed shadow-md top-0 left-0 h-screen transition-all duration-500 ease-in-out ${
        showSideBar ? "transform translate-x-0" : "transform -translate-x-64"
      }`}
    >
      <div className="h-20 text-white border-b border-secondary-text-color  flex flex-row justify-center items-center px-10 text-center text-3xl">
        Free Jobs
      </div>
      <div>
        <ul className="flex flex-col gap-2 mt-2">
          <SideNavLink
            linkName={"Live Jobs"}
            route={"jobs"}
            icon={<MdWork />}
          />
          <SideNavLink
            linkName={"Stats"}
            route={"stats"}
            icon={<IoStatsChart />}
          />
          <SideNavLink
            linkName={"Profile"}
            route={"profiles"}
            icon={<ImProfile />}
          />
        </ul>
      </div>
    </div>
  );
}
