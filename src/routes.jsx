import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import MyBookings from "./pages/MyBookings";
import AdminLayout from "./layouts/AdminLayout";
import ListMovies from "./pages/Admin/ListMovies";
import ListShows from "./pages/Admin/ListShows";
import ListBookings from "./pages/Admin/ListBookings";
import { BookingProvider } from "./provider/BookingProvider";
import { UserProvider } from "./provider/UserProvider";

const routes = [
  {
    layout: null,
    pages: [
      { key: "login", path: "/login", element: <Login /> },
      { key: "dashboard", path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    layout: (
      <UserProvider>
        <BookingProvider>
          <DefaultLayout />
        </BookingProvider>
      </UserProvider>
    ),
    pages: [
      { key: "home", path: "/", element: <Home /> },
      { key: "movies", path: "/movies", element: <Movies /> },
      {
        key: "movies/details",
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        key: "my-bookings",
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/admin",
    layout: <AdminLayout />,
    pages: [
      { key: "dashboard", path: "", element: <Dashboard /> },
      { key: "list-movies", path: "list-movies", element: <ListMovies /> },
      { key: "list-shows", path: "list-shows", element: <ListShows /> },
      {
        key: "list-bookings",
        path: "list-bookings",
        element: <ListBookings />,
      },
    ],
  },
];

export default routes;
