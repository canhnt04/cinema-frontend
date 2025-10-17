import { useState } from "react";
import { dummyShowsData } from "../../assets/mockData";
import { timeFormatReleaseDate } from "./../../helper/timeFormat";
import { EyeIcon, LockIcon, PenIcon } from "lucide-react";
import MovieDetailModal from "./Modal/MovieDetailModal";
import Toolbar from "../../components/ui/Toolbar";
import EditMovieModal from "./Modal/EditMovieModal";
const ListMovies = () => {
  // false -> true
  const [loading, setLoading] = useState(false);
  const [viewMovie, setViewMovie] = useState(null);
  const [editMovie, setEditMovie] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredMovies = dummyShowsData.filter((movie) =>
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
      <div className="w-full mt-6 overflow-x-auto">
        <Toolbar onSearch={handleSearch} />
        {/* Table */}
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {infoMovies.map((info) => (
                <th key={info.title} className="p-2 font-medium first:pl-5">
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
                <td className="p-2 text-base pl-5">{index + 1}</td>
                <td className="p-2 min-w-45">{data.title}</td>
                <td className="p-2">
                  {timeFormatReleaseDate(data.release_date)}
                </td>
                <td className="p-2">{"Đang khởi chiếu"}</td>
                <td className="p-2 flex gap-2 text-sm">
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
                    <PenIcon className="w-6 h-6" />
                  </span>
                  <span className="cursor-pointer active:scale-95">
                    <LockIcon className="w-6 h-6" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal view movie detail */}
      {viewMovie && (
        <MovieDetailModal
          movie={viewMovie}
          onClose={() => setViewMovie(null)}
        />
      )}
      {/* Modal edit movie */}
      {editMovie && (
        <EditMovieModal movie={editMovie} onClose={() => setEditMovie(null)} />
      )}
    </>
  ) : (
    <div>Loading</div>
  );
};

export default ListMovies;
