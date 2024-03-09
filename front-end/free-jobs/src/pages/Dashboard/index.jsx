import { createContext, useState } from "react";
import SideBar from "./components/SideBar";
import ToolBar from "./components/ToolBr";
import { Outlet } from "react-router-dom";
export const SideBarContext = createContext();
export default function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      <div className="flex flex-row">
        <SideBar />
        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            showSideBar ? "ml-64" : "ml-0"
          }`}
        >
          <ToolBar />
          <div className="w-full h-full p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </SideBarContext.Provider>
  );
}
