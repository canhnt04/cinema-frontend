import { useEffect, useState } from "react";
import BlurCircle from "../components/BlurCircle";
import FullPageSpinner from "../components/ui/FullPageSpinner";
import { getMyBooking } from "../services/BookingService";
import BookingCard from "./../components/BookingCard";

const BookingHistory = () => {
  const [loading, setLoading] = useState(true);
  const [bills, setBills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyBooking();
        console.log(res);

        if (res) {
          setBills(res);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <FullPageSpinner />;
  return (
    <div className="relative pt-30 px-6 md:px-16 lg:px-24 xl:px-44 select-none">
      <BlurCircle top="50px" left="0px" />
      <BlurCircle top="100px" right="50px" />
      <BlurCircle bottom="0px" left="600px" />
      <h2 className="text-2xl font-semibold mb-4">LỊCH SỬ MUA VÉ</h2>
      {bills?.map((booking) => (
        <BookingCard key={booking} booking={booking} />
      ))}
    </div>
  );
};

export default BookingHistory;
