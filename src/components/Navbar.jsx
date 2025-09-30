import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, SearchIcon, User, XIcon } from "lucide-react";
import { assets } from "../assets/assets";
export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
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

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50
       flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
       min-md:rounded-full backdrop-blur bg-black/90 md:bg-white/10 md:border border-gray-300/20
       overflow-hidden transition-[width] duration-400 
       ${isMenuOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          className="md:hidden absolute top-7 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <Link
          onClick={() => {
            scrollTo(0, 0), setIsMenuOpen(false);
          }}
          to="/"
        >
          Home
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0), setIsMenuOpen(false);
          }}
          to="/movies"
        >
          Movies
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0), setIsMenuOpen(false);
          }}
          to="/theater"
        >
          Theaters
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0), setIsMenuOpen(false);
          }}
          to="/releases"
        >
          Releases
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0), setIsMenuOpen(false);
          }}
          to="/favorite"
        >
          Favorites
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Login
        </button>
      </div>

      <Menu
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}
