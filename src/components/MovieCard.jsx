import noImage from "../assets/no_image.jpg";
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
          navigate(`/movie/${movie.movie_id}`);
          scrollTo(0, 0);
          navigate(`/movies/${movie.movieId}`);
        }}
        src={movie.posterUrl || noImage}
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
        Khởi chiếu: {timeFormatReleaseDate(movie.releaseDate)}
      </p>
      <Button
        onClick={() => {
          navigate(`/movie/${movie.movie_id}`);
          scrollTo(0, 0);
          navigate(`/movies/${movie.movieId}`);
        }}
        className="text-gray-200 mt-3 py-3 text-xs font-medium"
      >
        ĐẶT VÉ
      </Button>
    </div>
  );
};

export default MovieCard;
