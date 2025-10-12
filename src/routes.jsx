import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";

const routes = [
  {
    layout: null,
    pages: [{ key: "login", path: "/login", element: <Login /> }],
  },
  {
    layout: <DefaultLayout />,
    pages: [
      { key: "/home", path: "/", element: <Home /> },
      { key: "/movies", path: "/movies", element: <Movies /> },
      {
        key: "/movies/details",
        path: "/movies/:id",
        element: <MovieDetails />,
      },
    ],
  },
  // <Routes>
  //   <Route element={<DefaultLayout />}>
  //     <Route key="home" path="/" element={<Home />} />
  //     <Route key="movies" path="/movies" element={<Movies />} />
  //     <Route
  //       key="movie-details"
  //       path="/movies/:id"
  //       element={<MovieDetails />}
  //     />
  //     <Route
  //       key="seat-layout"
  //       path="/movies/:id/:date"
  //       element={<SeatLayout />}
  //     />
  //     <Route key="my-bookings" path="/my-bookings" element={<MyBookings />} />
  //     <Route key="favorite" path="/favorite" element={<Favorite />} />
  //     <Route key="login" path="/login" element={<Login />} />
  //   </Route>
  // </Routes>,
];

export default routes;
