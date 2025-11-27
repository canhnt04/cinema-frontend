import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BookingProvider } from "../provider/BookingProvider";

const UserLayout = () => {
  return (
    <>
      <BookingProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </BookingProvider>
    </>
  );
};

export default UserLayout;
