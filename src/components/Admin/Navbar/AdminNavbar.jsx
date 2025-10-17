import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      <Link to="/" className="flex max-md:flex-1">
        <img
          src={assets.logo}
          alt=""
          className="w-10 h-autobg-black rounded-full cursor-pointer"
        />
        <h2 className="ml-2 text-2xl max-md:text-xl flex justify-center items-center cursor-pointer">
          Cinema
        </h2>
      </Link>
    </div>
  );
};

export default AdminNavbar;
