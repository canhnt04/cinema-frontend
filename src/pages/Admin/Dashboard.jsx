import {
  CalendarIcon,
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
  TvMinimalPlayIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import BlurCircle from "./../../components/BlurCircle";
import {
  timeFormatDuration,
  timeFormatReleaseDate,
} from "../../helper/timeFormat";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import { useAuth } from "../../hooks/useAuth";
import { getMovies } from "../../services/MoviesService";
import { getUsers } from "../../services/UserService";
import { getBookings } from "../../services/BookingService";
import { getRevenueService } from "../../services/revenueService";
import { useNavigate } from "react-router-dom";
import { assets } from "./../../assets/assets";

const Dashboard = () => {
  const { loading } = useAuth();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    activeShowsCount: 0,
    totalUser: 0,
  });

  const dashboardCards = [
    { title: "Số vé đã bán", value: stats.totalBookings, icon: ChartLineIcon },
    {
      title: "Doanh thu tháng này",
      value: stats.totalRevenue,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Số lượng phim đang chiếu",
      value: stats.activeShowsCount,
      icon: PlayCircleIcon,
    },
    { title: "Số lượng người dùng", value: stats.totalUser, icon: UsersIcon },
  ];

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      const fromDate = formatDate(
        new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      );
      const toDate = formatDate(new Date());

      try {
        const [bookingRes, revenueRes, moviesRes, usersRes] = await Promise.all(
          [
            getBookings(),
            getRevenueService({ fromDate, toDate }),
            getMovies(),
            getUsers(),
          ]
        );

        const bookings = bookingRes?.result?.content || [];
        const revenues = revenueRes?.result || 0;
        const moviesData = moviesRes?.result || [];
        const usersData = usersRes?.result || [];

        setStats({
          totalBookings: bookings.length,
          totalRevenue: revenues,
          activeShowsCount: moviesData.length,
          totalUser: usersData.length,
        });

        setMovies(moviesData);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setDataLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading || dataLoading) return <FullPageSpinner />;

  return (
    <>
      <div className="relative flex flex-wrap gap-4 mt-4">
        <BlurCircle top="-100px" left="0" />
        <BlurCircle top="-100px" right="50px" />
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-60 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-base font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-lg font-medium">Phim đang chiếu</p>
      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        <BlurCircle top="100px" left="-10%" />
        {movies.map((show) => (
          <div
            key={show.movieId}
            className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66 select-none cursor-pointer"
          >
            <img
              onClick={() => {
                navigate(`/admin/list-movies`);
                scrollTo(0, 0);
              }}
              src={show.posterUrl || assets.poster}
              className="h-60 w-full object-cover"
            />
            <p className="font-semibold mt-2 uppercase text-balance text-primary">
              {show.title}
            </p>
            <p className="flex items-center gap-2 mt-1.5">
              <CalendarIcon className="w-4 h-4 text-gray-200" />
              <span className="text-sm text-gray-200">
                {timeFormatReleaseDate(show.releaseDate)}
              </span>
            </p>
            <p className="flex items-center gap-2 mt-1.5">
              <TvMinimalPlayIcon className="w-4 h-4 text-gray-200" />
              <span className="text-sm text-gray-200">
                {timeFormatDuration(show.duration)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
