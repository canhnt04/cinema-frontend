import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, XIcon } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownMovie, setIsDropdownMovie] = useState(false);

  // const handleCloseAll = () => {
  //   setIsMenuOpen(false);
  //   setIsDropdownMovie(false);
  // };

  return (
    <>
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50
          flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
          min-md:rounded-full backdrop-blur bg-black/90 md:bg-white/10 md:border border-gray-300/20
          transition-[width] duration-400
          ${isMenuOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <XIcon
          className="md:hidden absolute top-7 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
          to="/"
          className="hover:text-primary"
        >
          Trang chủ
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownMovie(true)}
          onMouseLeave={() => setIsDropdownMovie(false)}
        >
          <label className="cursor-pointer select-none">Phim</label>
          <div
            className={`absolute left-0 top-full mt-2 w-42 bg-neutral-800 text-white font-medium px-3 py-4 flex-col border gap-1.5 rounded shadow-lg transition-all duration-300 
              before:content-[''] before:absolute before:top-[-8px] before:left-0 before:w-full before:h-3 before:bg-transparent
            ${
              isDropdownMovie
                ? "flex opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-2"
            }`}
          >
            <Link
              to="/movies/now-showing"
              onClick={() => {
                setIsDropdownMovie(false);
                setIsMenuOpen(false);
              }}
              className="hover:text-primary"
            >
              Phim Đang Chiếu
            </Link>
            <Link
              to="/movies/coming-soon"
              onClick={() => {
                setIsDropdownMovie(false);
                setIsMenuOpen(false);
              }}
              className="hover:text-primary"
            >
              Phim Sắp Chiếu
            </Link>
          </div>
        </div>

        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
          to="/"
          className="hover:text-primary"
        >
          Thể loại
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 150);
            setIsMenuOpen(false);
          }}
          to="/"
          className="hover:text-primary"
        >
          Trailer
        </Link>

        <Link
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
            setIsMenuOpen(false);
          }}
          to="/"
          className="hover:text-primary"
        >
          Liên hệ
        </Link>
      </div>

      <Menu
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  );
}
