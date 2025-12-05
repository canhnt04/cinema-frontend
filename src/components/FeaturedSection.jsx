import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { useEffect, useRef, useState } from "react";
import { getMovies } from "../services/MoviesService";

const FeaturedSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const listMovieRef = useRef(null);

  const handleShowMore = () => {
    if (visibleCount < movies?.length) {
      setVisibleCount(Math.min(visibleCount + 4, movies?.length));
    } else {
      setVisibleCount(4);
    }

    listMovieRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const loadMovies = async () => {
      const res = await getMovies("/movies");
      if (res) {
        setMovies(res?.result);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden select-none">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="-10px" right="-90px" />
        <p className="text-gray-300 font-medium text-lg">Phim đang chiếu</p>
        <button
          onClick={() => {
            navigate("/movies/now-showing");
            scrollTo(0, 0);
          }}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          Tất cả
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>
      <div
        ref={listMovieRef}
        className="flex flex-wrap max-sm:justify-center gap-8 mt-8"
      >
        {movies?.slice(0, visibleCount)?.map((show) => (
          <MovieCard key={show.movieId} movie={show} />
        ))}
      </div>

      <div className="flex justify-center mt-20 mb-5">
        <button
          onClick={handleShowMore}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
        rounded-md font-medium cursor-pointer"
        >
          {visibleCount < movies?.length ? "Hiển thị thêm" : "Thu gọn"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
