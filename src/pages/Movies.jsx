import { useNavigate, useParams } from "react-router-dom";
import BlurCircle from "../components/BlurCircle";
import MovieCard from "../components/MovieCard";
import { dummyShowsData, movies } from "./../assets/mockData";
import { filterComingSoon, filterNowShowing } from "../helper/MoviesFilter";

const Movies = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const nowShowing = filterNowShowing(dummyShowsData);
  const comingSoon = filterComingSoon(dummyShowsData);

  const filteredMovies = type === "coming-soon" ? comingSoon : nowShowing;

  return (
    <>
      <div className="px-6 md:px-16 lg:px-36">
        <BlurCircle top="100px" left="50px" />
        <BlurCircle top="100px" right="50px" />
        <div className="mt-30">
          <div className="flex items-center justify-between border-b py-5 gap-4">
            <h1 className="text-4xl font-bold select-none">
              {" "}
              {type === "coming-soon" ? "Phim Sắp Chiếu" : "Phim Đang Chiếu"}
            </h1>
            <button
              type="button"
              onClick={() =>
                navigate(
                  type === "coming-soon"
                    ? "/movies/now-showing"
                    : "/movies/coming-soon"
                )
              }
              className="text-xl font-semibold text-gray-300 cursor-pointer"
            >
              {type === "coming-soon" ? "Phim Đang Chiếu" : "Phim Sắp Chiếu"}
            </button>
          </div>
          <div className="flex flex-wrap max-sm:justify-center gap-8 mt-10 border-b pb-10">
            {filteredMovies.slice(0, movies.length).map((show) => (
              <MovieCard key={show.movie_id} movie={show} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
