import { useContext } from "react"
import { SideBarContext } from ".."

export const useSidebarContext = ()=>{
    return useContext(SideBarContext);
}