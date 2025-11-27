import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import MyBookings from "./pages/MyBookings";
import AdminLayout from "./layouts/AdminLayout";
import ListMovies from "./pages/Admin/ListMovies";
import ListShows from "./pages/Admin/ListShows";
import ListBookings from "./pages/Admin/ListBookings";
import ListUsers from "./pages/Admin/ListUsers";
import BookingHistory from "./pages/BookingHistory";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import UserLayout from "./layouts/UserLayout";

const routes = [
  {
    layout: <UserLayout />,
    pages: [
      {
        key: "home",
        path: "/",
        element: <Home />,
        roles: ["CUSTOMER"],
      },
      {
        key: "login",
        path: "/login",
        element: <Login />,
        guestOnly: true,
      },
      {
        key: "movies",
        path: "/movies/:type",
        element: <Movies />,
        roles: ["CUSTOMER"],
      },
      {
        key: "movies/details",
        path: "/movie/:id",
        element: <MovieDetails />,
        requireAuth: true,
        roles: ["CUSTOMER"],
      },
      {
        key: "my-bookings",
        path: "/my-bookings",
        element: <MyBookings />,
        requireAuth: true,
        roles: ["CUSTOMER"],
      },
      {
        key: "booking-history",
        path: "/booking-history",
        element: <BookingHistory />,
        requireAuth: true,
        roles: ["CUSTOMER"],
      },
      {
        key: "profile",
        path: "/profile",
        element: <Profile />,
        requireAuth: true,
        roles: ["CUSTOMER"],
      },
      {
        key: "search-page",
        path: "/search",
        element: <SearchPage />,
        roles: ["CUSTOMER"],
      },
    ],
  },
  {
    layout: <AdminLayout />,
    pages: [
      {
        key: "dashboard",
        path: "/admin",
        element: <Dashboard />,
        requireAuth: true,
        roles: ["ADMIN"],
      },
      {
        key: "list-movies",
        path: "/admin/list-movies",
        element: <ListMovies />,
        requireAuth: true,
        roles: ["ADMIN"],
      },
      {
        key: "list-shows",
        path: "/admin/list-shows",
        element: <ListShows />,
        requireAuth: true,
        roles: ["ADMIN"],
      },
      {
        key: "list-bookings",
        path: "/admin/list-bookings",
        element: <ListBookings />,
        requireAuth: true,
        roles: ["ADMIN"],
      },
      {
        key: "list-users",
        path: "/admin/list-users",
        element: <ListUsers />,
        requireAuth: true,
        roles: ["ADMIN"],
      },
    ],
  },
];

export default routes;
