import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { movies } from "../assets/mockData";
import MovieCard from "./../components/MovieCard";
import BlurCircle from "./../components/BlurCircle";

const SearchPage = () => {
  const { search } = useLocation();
  const keyword =
    new URLSearchParams(search).get("keyword")?.toLowerCase() || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword)
    );
    setResults(filtered);
  }, [keyword]);

  return (
    <div className="relative pt-30 px-6 md:px-16 lg:px-24 xl:px-44 select-none">
      <BlurCircle top="100px" right="30px" />
      <BlurCircle top="50px" left="20px" />
      {results.length ? (
        <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
          {results.map((movie) => (
            <MovieCard key={movie.movie_id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-xl font-medium">Không tìm thấy phim nào</p>
      )}
    </div>
  );
};

export default SearchPage;
