import { PlayCircleIcon } from "lucide-react";
import { assets, movies } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import ReactPlayer from "react-player";
import { useState } from "react";
const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(
    "https://www.youtube.com/watch?v=hx9APx9-vH8"
  );
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailer
      </p>
      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-90px" />
        <ReactPlayer
          src={currentTrailer}
          controls={false}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        <div
          onClick={() => {
            setCurrentTrailer("https://www.youtube.com/watch?v=ZAXA1DV4dtI");
          }}
          className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
        >
          <img
            src={assets.moneyHeistTrailer}
            alt="trailer"
            className="rounded-lg w-full h-full object-cover brightness-75"
          />
          <PlayCircleIcon
            strokeWidth={1.6}
            className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div
          onClick={() => {
            setCurrentTrailer("https://www.youtube.com/watch?v=BD6PoZJdt_M");
          }}
          className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
        >
          <img
            src={movies.muaDo}
            alt="trailer"
            className="rounded-lg w-full h-full object-cover brightness-75"
          />
          <PlayCircleIcon
            strokeWidth={1.6}
            className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div
          onClick={() => {
            setCurrentTrailer(
              "https://www.youtube.com/watch?v=upRA1Lbg8lk&list=RDupRA1Lbg8lk&start_radio=1"
            );
          }}
          className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
        >
          <img
            src={movies.tuChienTrenKhong}
            alt="trailer"
            className="rounded-lg w-full h-full object-cover brightness-75"
          />
          <PlayCircleIcon
            strokeWidth={1.6}
            className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div
          onClick={() => {
            setCurrentTrailer("https://www.youtube.com/watch?v=BD6PoZJdt_M");
          }}
          className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
        >
          <img
            src={movies.tuChienTrenKhong}
            alt="trailer"
            className="rounded-lg w-full h-full object-cover brightness-75"
          />
          <PlayCircleIcon
            strokeWidth={1.6}
            className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
