import { CheckCircle } from "lucide-react";
import ConfirmationDetails from "./ConfirmationDetails";
import { useEffect, useState } from "react";
import axiosClient from "../../config/axios";
import { useSearchParams } from "react-router-dom";

const BookingResultDisplay = () => {
  //   const data = {
  //     orderReferenceId: "45308620",
  //     paymentId: "f727e3d6-a6f6-490d-8e16-89f73cb9f124",
  //     amount: 551000,
  //     paymentMethod: "VNPay",
  //     paymentTime: "2025-11-26T21:23:28",
  //     paymentStatus: 1,
  //     movieTitle: "KHÔNG BÔNG TUYẾT NÀO TRONG SẠCH (T16)",
  //     startTime: "2025-01-20T21:00:00",
  //     theaterName: "Lotte Cinema Landmark",
  //     theaterAddress: "Landmark 81, HCMC",
  //     roomName: "Room A",
  //     tickets: [
  //       {
  //         ticketId: "33120d94-e533-4970-bcb0-ca6525113f60",
  //         type: "adult",
  //         seatName: "H9",
  //         ticketPrice: null,
  //       },
  //       {
  //         ticketId: "33120d94-e533-4970-bcb0-ca6525113f60",
  //         type: "adult",
  //         seatName: "H19",
  //         ticketPrice: null,
  //       },
  //       {
  //         ticketId: "33120d94-e533-4970-bcb0-ca6525113f60",
  //         type: "adult",
  //         seatName: "H19",
  //         ticketPrice: null,
  //       },
  //     ],
  //   };

  const [data, setData] = useState(null);

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const txnRef = searchParams.get("txnRef");
  const paymentId = searchParams.get("paymentId");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosClient.get(
        `/booking/result?status=${status}&txnRef=${txnRef}&paymentId=${paymentId}`
      );
      if (res) setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-24 md:pt-36 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-2">
        <CheckCircle className="w-8 h-8 inline-block mr-2" /> THANH TOÁN THÀNH
        CÔNG!
      </h1>
      <p className="text-center text-sm text-white/80 mb-8">
        Vé của bạn đã được xác nhận.{" "}
        <a href="https://mail.google.com/">Kiểm tra Email</a>
      </p>
      <ConfirmationDetails data={data} />
    </div>
  );
};
export default BookingResultDisplay;
