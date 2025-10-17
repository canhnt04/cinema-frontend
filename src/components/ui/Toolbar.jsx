import { PlusCircleIcon, SearchIcon } from "lucide-react";

const Toolbar = ({
  onSearch,
  onAdd,
  placeholder = "Tìm kiếm...",
  addButtonText = "Thêm",
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
      {/* Seach input */}
      <div className="relative flex items-center w-full sm:w-80">
        <SearchIcon className="absolute left-3 w-5 h-5 text-gray-300" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch && onSearch(e.target.value)}
          className="w-full bg-gray-800 pl-10 pr-3 py-2 text-white rounded-md border border-gray-700 focus:border-1 focus:border-primary transition outline-none"
        />
      </div>

      {/* Add button */}
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dull transition cursor-pointer active:scale-95"
      >
        <PlusCircleIcon className="w-5 h-5" />
        <span>{addButtonText}</span>
      </button>
    </div>
  );
};

export default Toolbar;
