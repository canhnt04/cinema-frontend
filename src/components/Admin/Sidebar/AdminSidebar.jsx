import {
  FilmIcon,
  LayoutDashboardIcon,
  ListCollapseIcon,
  TicketIcon,
  UsersIcon,
} from "lucide-react";
import { assets } from "../../../assets/assets";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const user = {
    full_name: "Nguyễn Tấn Cảnh",
    avatarUrl: assets.avatar,
  };
  const adminNAvLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    {
      name: "List Movies",
      path: "/admin/list-movies",
      icon: FilmIcon,
    },
    {
      name: "List Shows",
      path: "/admin/list-shows",
      icon: TicketIcon,
    },
    {
      name: "List Bookings",
      path: "/admin/list-bookings",
      icon: ListCollapseIcon,
    },
    {
      name: "List Users",
      path: "/admin/list-users",
      icon: UsersIcon,
    },
  ];
  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      <img
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        src={user.avatarUrl}
        alt="sidebar"
      />
      <p className="mt-2 text-base max-md:hidden">{user.full_name}</p>
      <div className="w-full">
        {adminNAvLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end
            className={({ isActive }) =>
              `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 ${
                isActive && "bg-primary/15 text-primary group"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className="max-md:hidden">{link.name}</p>
                <span
                  className={`w-1 h-10 rounded-l-full right-0 absolute ${
                    isActive && "bg-primary"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
