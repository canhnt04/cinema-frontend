import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { SearchIcon } from "lucide-react";
import Navbar from "./Navbar";
import Button from "./ui/Button";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
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
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        <Button
          onClick={() => {
            navigate("/login");
          }}
          className="px-5 py-1.5 sm:px-10 sm:py-3 m-3 active:scale-95"
        >
          ĐĂNG NHẬP
        </Button>
      </div>
    </div>
  );
};

export default Header;
