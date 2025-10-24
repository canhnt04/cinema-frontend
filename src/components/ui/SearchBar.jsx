import { SearchIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const wrapperRef = useRef();

  const handleSearch = () => {
    const trimmed = keyword.trim();
    if (!trimmed) return;
    navigate(`/search?keyword=${encodeURIComponent(trimmed)}`);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useClickOutside(wrapperRef, () => setKeyword(""));

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center w-full sm:w-80 backdrop-blur"
    >
      <SearchIcon
        onClick={handleSearch}
        className="absolute left-3 w-5 h-5 text-gray-300 cursor-pointer"
      />
      <input
        type="text"
        placeholder="Tìm kiếm phim..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeydown}
        className="w-full bg-white/10 pl-10 pr-3 py-2 text-white rounded border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
      />
    </div>
  );
};

export default SearchBar;
