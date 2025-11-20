import { useEffect, useState } from "react";
import { dummyShowsData } from "../assets/mockData";
import BlurCircle from "../components/BlurCircle";
import FullPageSpinner from "../components/ui/FullPageSpinner";
import BookingCard from "../components/BookingCard";

const BookingHistory = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getAllBooking = async () => {
    setIsLoading(false);
  };

  useEffect(() => {
    getAllBooking();
  }, []);

  return !isLoading ? (
    <div className="relative pt-30 px-6 md:px-16 lg:px-24 xl:px-44 select-none">
      <BlurCircle top="50px" left="0px" />
      <BlurCircle top="100px" right="50px" />
      <BlurCircle bottom="0px" left="600px" />
      <h2 className="text-2xl font-semibold mb-4">LỊCH SỬ MUA VÉ</h2>
      {dummyShowsData.map((booking) => (
        <BookingCard key={booking.movie_id} booking={booking} />
      ))}
    </div>
  ) : (
    <FullPageSpinner />
  );
};

export default BookingHistory;
