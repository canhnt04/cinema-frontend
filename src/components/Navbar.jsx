import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, XIcon } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
          to="/"
        >
          Trang chủ
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
          to="/movies"
        >
          Phim
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsMenuOpen(false);
          }}
          to="/"
        >
          Thể loại
        </Link>

        <Link
          onClick={() => {
            scrollTo(0, document.body.scrollHeight - 500);
            setIsMenuOpen(false);
          }}
          to="/"
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
