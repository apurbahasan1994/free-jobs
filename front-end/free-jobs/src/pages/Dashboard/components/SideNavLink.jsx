import { NavLink } from "react-router-dom";

export default function SideNavLink(props) {
  const { linkName, icon, route } = props;
  const customClass =
    "w-full flex flex-row items-center justify-between px-2 py-3 rounded-md hover:bg-sidebar-link-active-color hover:text-white";
  return (
    <li className="flex flex-row items-center justify-between cursor-pointer mx-3">
      <NavLink
        to={route || "/"}
        className={({ isActive }) =>
          isActive
            ? `${customClass} bg-sidebar-link-active-color text-white`
            : customClass
        }
      >
        <span>{linkName}</span>
        {icon}
      </NavLink>
    </li>
  );
}
