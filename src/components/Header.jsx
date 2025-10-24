import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { HistoryIcon, LogOutIcon, UserCog2Icon } from "lucide-react";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import { useUser } from "../hooks/useUser";
import { useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { showToast } from "./../helper/cooldownToast";
import SearchBar from "./ui/SearchBar";
import useClickOutside from "../hooks/useClickOutside";
const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { logout } = useAuth();
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsDropdown(false));

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 select-none">
      {/* Logo */}
      <Link to="/" className="max-md:flex-1 flex">
        <img
          src={assets.logo}
          alt=""
          className="w-12 h-auto bg-black rounded-full cursor-pointer"
        />
        <h2 className="ml-2 text-3xl max-md:text-xl flex justify-center items-center cursor-pointer">
          Cinema
        </h2>
      </Link>

      <Navbar />

      {/* Search & Login */}
      <div className="flex items-center gap-8">
        <SearchBar />
        {user ? (
          <div
            ref={dropdownRef}
            onClick={() => setIsDropdown((prev) => !prev)}
            className="relative flex flex-wrap items-center gap-2
              after:content-[''] after:w-0 after:h-0 after:border-l-6 after:border-r-6 after:border-t-6
              after:border-l-transparent after:border-r-transparent after:border-t-white
              after:ml-2 after:translate-y-[1px] cursor-pointer"
          >
            {/* Dropdown menu */}
            {isDropdown && (
              <div className="absolute right-0 top-full mt-1 w-42 rounded bg-gray-800 cursor-default">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="border-b border-gray-600 p-3"
                >
                  <p className="text-sm mt-1 text-primary text-balance">
                    {user.name}
                  </p>
                </div>
                <div className="flex flex-wrap my-1 items-center cursor-pointer">
                  <div className="flex gap-2 transition-colors hover:bg-gray-900 p-3 w-full">
                    <UserCog2Icon className="w-5 h-5 text-gray-300" />
                    <p className="text-sm">Tài khoản</p>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/booking-history");
                      scrollTo(0, 0);
                    }}
                    className="flex gap-2 transition-colors hover:bg-gray-900 p-3 w-full border-b border-gray-600"
                  >
                    <HistoryIcon className="w-5 h-5 text-gray-300" />
                    <p className="text-sm">Lịch sử mua hàng</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    showToast("Đăng xuất thành công!", { type: "success" });
                    setTimeout(() => logout(), 200);
                  }}
                  className="flex gap-2 transition-colors hover:bg-gray-900 p-3 my-1 w-full cursor-pointer"
                >
                  <LogOutIcon className="w-5 h-5 text-gray-300" />
                  <p className="text-sm">Đăng xuất</p>
                </div>
              </div>
            )}

            <img
              src={user.avatar}
              alt="img"
              className="w-[38.8px] h-[38.8px] rounded-full object-cover border-2 border-white cursor-pointer"
            />
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="px-5 py-1.5 sm:px-10 sm:py-3 m-3 active:scale-95"
          >
            ĐĂNG NHẬP
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
