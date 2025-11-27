import { timeFormatReleaseDate } from "../helper/timeFormat";

const BookingCard = ({ booking }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-5xl">
      <div className="flex flex-col md:flex-row">
        <img
          src={booking.posterUrl}
          alt=""
          className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded"
        />
        <div className="flex flex-col p-4 flex-none">
          <p className="text-lg font-semibold text-balance w-[200px]">
            {booking.title}
          </p>
          <p className="text-sm">{booking.duration} phút</p>
          <p className="text-sm mt-auto">
            {timeFormatReleaseDate(booking.release_date)}
          </p>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-base font-medium">
            Rạp: {`Cinestar Quốc thanh ${1}`}
          </p>
          <p className="text-base font-medium mt-auto">Số vé: {`${1}`}</p>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-base font-medium">Phòng: {`${2}`}</p>
          <p className="text-base font-medium mt-auto">Ghế: {`A${1}`}</p>
        </div>
      </div>
      <div className="flex justify-end items-center mt-2 px-4">
        <span className="text-base font-semibold">Tổng tiền: 123.000VNĐ</span>
      </div>
    </div>
  );
};

export default BookingCard;
1;
