import {
  CalendarIcon,
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  TvMinimalPlayIcon,
  UsersIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import BlurCircle from "./../../components/BlurCircle";
import {
  timeFormatDuration,
  timeFormatReleaseDate,
} from "../../helper/timeFormat";
import FullPageSpinner from "../../components/ui/FullPageSpinner";
import { useAuth } from "../../hooks/useAuth";
import { getMoviesService } from "../../services/MoviesService";
import { getUsersService } from "../../services/UserService";
import { getBookingsService } from "../../services/BookingService";
import { useNavigate } from "react-router-dom";
import { getRevenueService } from "../../services/revenueService";

const Dashboard = () => {
  const { loading } = useAuth();
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [shows, setShows] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [dataLoading, setDataLoading] = useState(true);

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  if (loading) return <FullPageSpinner />;

  const dashboardCards = [
    {
      title: "Số vé đã bán",
      value: dashboardData.totalBookings,
      icon: ChartLineIcon,
    },
    {
      title: "Doanh thu tháng vừa qua",
      value: dashboardData.totalRevenue,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Số lượng phim đang chiếu",
      value: dashboardData.activeShows.length,
      icon: PlayCircleIcon,
    },
    {
      title: "Số lượng người dùng",
      value: dashboardData.totalUser,
      icon: UsersIcon,
    },
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const revenueRes = await getRevenueService();
        const bookingRes = await getBookingsService();
        const moviesRes = await getMoviesService();
        const userRes = await getUsersService();

        const revenues = revenueRes?.result?.totalRevenue || 0;
        const bookings = bookingRes?.result || [];
        const movies = moviesRes?.result || [];
        const users = userRes?.result || [];

        setBookings(bookings);
        setMovies(movies);
        setUsers(users);

        setDashboardData({
          totalRevenue: revenues,
          totalBookings: 50,
          activeShows: movies,
          totalUser: users.length,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setDataLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return !dataLoading ? (
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
              <div className="">
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
        {movies.map((show) => {
          return (
            <div
              key={show.movieId}
              className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66 select-none cursor-pointer"
            >
              <img
                onClick={() => {
                  navigate(`/admin/list-movies`);
                  scrollTo(0, 0);
                }}
                src={show.posterUrl}
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
          );
        })}
      </div>
    </>
  ) : (
    <FullPageSpinner />
  );
};

export default Dashboard;
