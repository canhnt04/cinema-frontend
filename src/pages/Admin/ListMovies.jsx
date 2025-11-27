import { useState } from "react";
import { movies } from "../../assets/mockData";
import { timeFormatReleaseDate } from "./../../helper/timeFormat";
import { EyeIcon, SettingsIcon, Trash2Icon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import EditMovieModal from "./Modals/Movies/EditMovieModal";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import AddMovieModal from "./Modals/Movies/AddMovieModal";
import DetailMovieModal from "./Modals/Movies/DetailMovieModal";
import BlurCircle from "./../../components/BlurCircle";
const ListMovies = () => {
  // false -> true
  const [loading, setLoading] = useState(false);
  const [addMovie, setAddMovie] = useState(null);
  const [viewMovie, setViewMovie] = useState(null);
  const [editMovie, setEditMovie] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleAdd = () => {};

  const handleUpdate = (updatedMovie) => {};

  const handleDelete = () => {};

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const infoMovies = [
    { title: "STT" },
    { title: "Tên phim" },
    { title: "Ngày khởi chiếu" },
    { title: "Trạng thái" },
    { title: "Thao tác" },
  ];

  return !loading ? (
    <>
      <div className="relative w-full mt-6">
        <BlurCircle top="0" left="0" />
        <Toolbar onSearch={handleSearch} onAdd={() => setAddMovie(true)} />

        {/* Table */}
        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {infoMovies.map((info) => (
                <th key={info.title} className="p-2 font-medium first:pl-10">
                  {info.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {filteredMovies.map((data, index) => (
              <tr
                key={data.id}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 text-base pl-10">{index + 1}</td>
                <td className="p-2 min-w-45">{data.title}</td>
                <td className="p-2">
                  {timeFormatReleaseDate(data.release_date)}
                </td>
                <td className="p-2">{"Đang khởi chiếu"}</td>
                <td className="p-2 flex gap-4 text-sm">
                  <span
                    className="cursor-pointer active:scale-95"
                    onClick={() => setViewMovie(data)}
                  >
                    <EyeIcon className="w-6 h-6" />
                  </span>
                  <span
                    className="cursor-pointer active:scale-95"
                    onClick={() => setEditMovie(data)}
                  >
                    <SettingsIcon className="w-6 h-6" />
                  </span>
                  <span
                    onClick={handleDelete}
                    className="cursor-pointer active:scale-95  text-red-500"
                  >
                    <Trash2Icon className="w-6 h-6" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addMovie && (
        <AddMovieModal movie={addMovie} onClose={() => setAddMovie(null)} />
      )}

      {viewMovie && (
        <DetailMovieModal
          movie={viewMovie}
          onClose={() => setViewMovie(null)}
        />
      )}

      {editMovie && (
        <EditMovieModal
          movie={editMovie}
          onSave={handleUpdate}
          onClose={() => setEditMovie(null)}
        />
      )}
    </>
  ) : (
    <FullPageSpinner />
  );
};

export default ListMovies;
