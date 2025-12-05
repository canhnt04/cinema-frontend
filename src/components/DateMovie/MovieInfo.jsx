import { ClockIcon, TagIcon, UserCog2Icon, Users2Icon } from "lucide-react";
import BlurCircle from "../BlurCircle";
import { timeFormatDuration } from "../../helper/timeFormat";

const MovieInfo = ({ movie }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
      <img
        src={movie.posterUrl}
        className="max-md:mx-auto rounded-xl h-104 md:h-130 max-w-70 md:max-w-120 object-cover"
      />
      <div className="relative flex flex-col gap-3">
        <BlurCircle top="-100px" left="-80px" />
        <h1 className="text-4xl font-semibold max-w-96 text-balance uppercase">
          {movie.title}
        </h1>

        <div className="flex items-center gap-3 mt-3">
          <TagIcon className="w-5 h-5" />
          <p className="text-gray-300">Thể loại: {movie.genre}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <ClockIcon className="w-5 h-5" />
          <p className="text-gray-300">
            Thời lượng: {timeFormatDuration(movie.duration)}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <UserCog2Icon className="w-5 h-5" />
          <p className="text-gray-300">Đạo diễn: {movie.director}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <Users2Icon className="w-5 h-5" />
          <p className="text-gray-300">Diễn viên: {movie.cast}</p>
        </div>

        <div>
          <p className="font-semibold text-2xl mt-5 uppercase">Nội dung phim</p>
          <p className="mt-3 text-gray-200 max-w-xl leading-relaxed">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
