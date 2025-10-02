import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";

const routes = [
  <Route key="home" path="/" element={<Home />} />,
  <Route key="movies" path="/movies" element={<Movies />} />,
  <Route key="movie-details" path="/movies/:id" element={<MovieDetails />} />,
  <Route key="seat-layout" path="/movies/:id/:date" element={<SeatLayout />} />,
  <Route key="my-bookings" path="/my-bookings" element={<MyBookings />} />,
  <Route key="favorite" path="/favorite" element={<Favorite />} />,
  <Route key="login" path="/login" element={<Login />} />,
];

export default routes;
