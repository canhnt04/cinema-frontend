import Navbar from "./components/Navbar";
import { Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import routes from "./routes";

export default function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>{routes}</Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}
