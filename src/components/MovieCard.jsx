import { useNavigate } from "react-router-dom";
import {
  timeFormatDuration,
  timeFormatReleaseDate,
} from "../helper/timeFormat";
import Button from "./ui/Button";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66 select-none">
      <img
        onClick={() => {
          scrollTo(0, 0);
          navigate(`/movies/${movie.movie_id}`);
        }}
        src={movie.poster_url}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />
      <p className="font-semibold mt-2 truncate uppercase">{movie.title}</p>
      <p className="text-sm text-gray-400 mt-1 truncate">
        Thể loại: {movie.genre}
      </p>
      <p className="text-sm text-gray-400 mt-1.5">
        Thời lượng: {timeFormatDuration(movie.duration)}
      </p>
      <p className="text-sm text-gray-400 mt-1.5">
        Khởi chiếu: {timeFormatReleaseDate(movie.release_date)}
      </p>
      <Button
        onClick={() => {
          scrollTo(0, 0);
          navigate(`/movies/${movie.movie_id}`);
        }}
        className="text-gray-200 mt-3 py-3 text-xs font-medium"
      >
        ĐẶT VÉ
      </Button>
    </div>
  );
};

export default MovieCard;
