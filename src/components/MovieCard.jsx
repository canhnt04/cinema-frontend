import { useNavigate } from "react-router-dom";
import { movies } from "../assets/assets";
import timeFormat from "../helper/timeFormat";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movies.muaDo}
        alt=""
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />

      <p className="font-semibold mt-2 truncate uppercase">
        {/* {movie.title} */}
        mưa đỏ
      </p>

      <p className="text-sm text-gray-400 mt-1 truncate">
        {/* {movie.genre} */}
        Thể loại: Hành động, Kịch tính
      </p>

      <div className="text-sm text-gray-400 mt-1.5">
        Thời lượng: {timeFormat(new Date().getMinutes())}
      </div>

      <div className="flex items-center gap-8 text-sm text-gray-400">
        <span>Khởi chiếu: {new Date().getFullYear()}</span>
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-200 bg-primary hover:bg-primary-dull px-8 py-2.5 text-xs font-medium rounded-full cursor-pointer"
        >
          Mua vé
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
