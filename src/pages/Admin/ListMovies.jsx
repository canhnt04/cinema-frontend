import { useEffect, useState } from "react";
import {
  timeFormatDuration,
  timeFormatReleaseDate,
} from "./../../helper/timeFormat";
import { EyeIcon, SettingsIcon, Trash2Icon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import EditMovieModal from "./Modals/Movies/EditMovieModal";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import AddMovieModal from "./Modals/Movies/AddMovieModal";
import DetailMovieModal from "./Modals/Movies/DetailMovieModal";
import BlurCircle from "./../../components/BlurCircle";
import { deleteMovie, getMovies } from "../../services/MoviesService";
import { showToast } from "../../helper/cooldownToast";
const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const [addMovie, setAddMovie] = useState(null);
  const [viewMovie, setViewMovie] = useState(null);
  const [editMovie, setEditMovie] = useState(null);
  // const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  // const handleSearch = (value) => {
  //   setSearchValue(value);
  // };

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const handleDeleteMovie = async (movieId) => {
    try {
      const res = await deleteMovie(movieId);
      if (res) {
        showToast("Xóa phim thành công", { type: "success" });
        fetchData();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const headers = [
    { title: "STT" },
    { title: "Tên phim" },
    { title: "Thời lượng" },
    { title: "Ngày khởi chiếu" },
    { title: "Thao tác" },
  ];

  const fetchData = async () => {
    try {
      const res = await getMovies();
      if (res) setMovies(res.result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <FullPageSpinner />;

  return (
    <>
      <div className="relative w-full mt-6">
        <BlurCircle top="0" left="0" />
        <Toolbar
          // onSearch={handleSearch}
          onAdd={() => setAddMovie(true)}
        />

        {/* Table */}
        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {headers.map((info) => (
                <th key={info.title} className="p-2 font-medium first:pl-10">
                  {info.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {movies.map((data, index) => (
              <tr
                key={data.id}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 text-base pl-10">{index + 1}</td>
                <td className="p-2 min-w-45">{data.title}</td>
                <td className="p-2">{timeFormatDuration(data.duration)}</td>
                <td className="p-2">
                  {timeFormatReleaseDate(data.releaseDate)}
                </td>
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
                    onClick={handleDeleteMovie}
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
        <EditMovieModal movie={editMovie} onClose={() => setEditMovie(null)} />
      )}
    </>
  );
};

export default ListMovies;
