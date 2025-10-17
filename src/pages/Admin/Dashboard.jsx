import {
  CalendarIcon,
  ChartLineIcon,
  CircleDollarSignIcon,
  FilmIcon,
  PlayCircleIcon,
  TvMinimalPlayIcon,
  UsersIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import BlurCircle from "./../../components/BlurCircle";
import { dummyDashboardData, dummyShowsData } from "../../assets/mockData";
import { timeFormatReleaseDate } from "../../helper/timeFormat";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: "Số vé đã bán",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Doanh thu",
      value: dashboardData.totalRevenue + currency || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Phim đang chiếu",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "Người dùng",
      value: dashboardData.totalUser || "0",
      icon: UsersIcon,
    },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return !loading ? (
    <>
      <div className="relative flex flex-wrap gap-4 mt-4">
        <BlurCircle top="-100px" left="0" />
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-50 w-full"
            >
              <div className="">
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-lg font-medium">Phim đang chiếu</p>
      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        <BlurCircle top="100px" left="-10%" />
        {dummyShowsData.map((show) => {
          return (
            <div
              key={show.movie_id}
              className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300"
            >
              <img
                src={show.poster_url}
                alt=""
                className="h-60 w-full object-cover"
              />
              <p className="flex items-center px-1 gap-2 mt-2">
                <FilmIcon className="w-4 h-4" />
                <span className="font-medium truncate">{show.title}</span>
              </p>
              {/* Ngày khởi chiếu */}
              <p className="flex items-center px-1 gap-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span className="">
                  {timeFormatReleaseDate(show.release_date)}
                </span>
              </p>
              {/* Số lượng suất chiếu */}
              <p className="flex items-center px-1 gap-2 mt-2">
                <TvMinimalPlayIcon className="w-4 h-4" />
                <span className="text-sm ">{"123"}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div className=""></div>
  );
};

export default Dashboard;
